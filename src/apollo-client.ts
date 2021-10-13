import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';
import toast from './shared/toast';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        // this will handle query/mutation errors
        graphQLErrors.forEach(({ name, message, locations, path }) =>
            toast.error(`[GraphQL error]: Message: ${message}`)
        );
    if (networkError) toast.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: ApolloLink.from([
        errorLink,
        createUploadLink({
            uri: process.env.NEXT_PUBLIC_SERVER_URL + '/graphql',
            credentials: 'include',
        }),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default client;

// https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/
