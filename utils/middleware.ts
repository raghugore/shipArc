import { verify } from 'jsonwebtoken';
import { getPrismaInstance } from './prisma-instance';
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, User } from '.prisma/client';
import Mail from 'nodemailer/lib/mailer';

export interface _NextApiRequest extends NextApiRequest {
  prisma: PrismaClient;
  transporter: Mail;
  user: User;
}

export interface _NextApiResponse extends NextApiResponse {}

const prisma = getPrismaInstance();
const transporter = nodemailer.createTransport({
  host: process.env.SES_HOST,
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SES_USER,
    pass: process.env.SES_PASSWORD,
  },
});

export const middleware = (handler) => async (req, res) => {
  req.prisma = prisma;
  req.transporter = transporter;
  if (req.headers && req.headers.authorization) {
    try {
      const [_, token] = req.headers.authorization.split(' ');
      if (token) {
        const payload: any = verify(token, process.env.JWT_SECRET as string);
        const user = await prisma.user.findUnique({
          where: { id: payload.id },
        });
        req.user = user;
        return handler(req, res);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return handler(req, res);
};

// function add(a, b) {
//   return a + b;
// }

// function squaredAddition(add) {
//   return function (a, b) {
//     const c = a * a;
//     const d = b * b;
//     return add(c, d);
//   };
// }
