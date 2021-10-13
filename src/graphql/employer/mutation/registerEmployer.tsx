import { gql } from '@apollo/client';

export const REGISTER_EMPLOYER = gql`
    mutation registerEmployer($data: RegisterEmployerType!) {
        registerEmployer(data: $data) {
            errors {
                field
                message
            }
            entity {
                id
            }
        }
    }
`;
