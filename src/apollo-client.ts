import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from "@apollo/client/link/error";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        // this will handle query/mutation errors
        graphQLErrors.forEach(({ name, message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Name: ${name}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: ApolloLink.from([
        errorLink,
        createUploadLink({ uri: 'http://localhost:4000/graphql' }),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default client;

// https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/
