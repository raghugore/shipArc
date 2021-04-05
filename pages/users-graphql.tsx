import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import { addApolloState, initializeApollo } from 'utils/apollo-client';
import { CreateUser, CreateUserVariables } from '__generated__/CreateUser';
import { Users } from '__generated__/Users';

const USERS_QUERY = gql`
  query Users {
    users {
      id
      email
      createdAt
      updatedAt
      email
      name
      phone
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser(
    $password: String!
    $designation: String!
    $email: String!
    $isSuperAdmin: Boolean!
    $name: String!
    $phone: String!
  ) {
    createUser(
      password: $password
      designation: $designation
      email: $email
      isSuperAdmin: $isSuperAdmin
      name: $name
      phone: $phone
    ) {
      id
      email
      name
    }
  }
`;

function UsersGraphql() {
  const { loading, data, error } = useQuery<Users>(USERS_QUERY);
  const [createUser] = useMutation<CreateUser, CreateUserVariables>(
    CREATE_USER
  );
  const [email, setEmail] = useState('');

  if (loading || error) {
    return <div>Loading data....</div>;
  }

  if (data.users) {
    return (
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <br />
        <button
          onClick={async () => {
            await createUser({
              variables: {
                designation: 'add',
                email,
                isSuperAdmin: false,
                name: '233',
                password: 'aa33',
                phone: 'fasfsad',
              },
              refetchQueries: [
                {
                  query: USERS_QUERY,
                },
              ],
            });
            setEmail('');
          }}
        >
          Submit
        </button>
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>No data received!</div>;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: USERS_QUERY,
    variables: {},
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default UsersGraphql;
