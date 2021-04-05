import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'utils/apollo-client';

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
