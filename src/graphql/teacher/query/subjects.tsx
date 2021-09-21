import { gql } from '@apollo/client';

export const GET_ALL_SUBJECTS = gql`
    query getSubjects {
        subjects {
            id
            value
            label
        }
    }
`;
