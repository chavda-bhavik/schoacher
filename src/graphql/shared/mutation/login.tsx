import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($password: String!, $email: String!) {
        login(password: $password, email: $email) {
            type
            error
        }
    }
`;
