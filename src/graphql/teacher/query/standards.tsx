import { gql } from '@apollo/client';

export const GET_ALL_STANDARDS = gql`
    query getStandards {
        standards {
            id
            value
            label
        }
    }
`;
