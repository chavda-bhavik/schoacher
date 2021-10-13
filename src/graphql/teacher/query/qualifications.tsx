import { gql } from '@apollo/client';

export const GET_ALL_QUALIFICATIONS = gql`
    query getQualifications {
        getAllQualifications {
            id
            degree
            college
            start
            end
            grade
            description
        }
    }
`;
