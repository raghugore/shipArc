import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

const handler = async (req: _NextApiRequest, res: _NextApiResponse) => {
  const {
    method,
    body: { email },
  } = req;

  switch (method) {
    case 'POST':
      if (email) {
        try {
          const user = await req.prisma.user.findUnique({ where: { email } });
          if (!user) {
            return res
              .status(400)
              .json({ error: 'User not found!', errorcode: 'USER_NOT_FOUND' });
          }
          const mailOptions = {
            from: 'mail@ajaymore.in',
            subject: 'Your Password to Login',
            html: `<div><h3>Your Password Is</h3><p>${user.password}</p></div>`,
            to: email,
          };
          await req.transporter.sendMail(mailOptions);
          return res.status(200).json({ message: 'Email Sent Successfully' });
        } catch (err) {
          console.error(err);
          return res.status(400).json({ message: 'Error sending OTP' });
        }
      } else {
        return res.status(400).json({
          error: 'Insufficient Information!',
          errorcode: 'INSUFFICIENT_INFORMATION',
        });
      }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default middleware(handler);
