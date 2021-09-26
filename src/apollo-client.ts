import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
    link: createUploadLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache(),
});

export default client;

// https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/
