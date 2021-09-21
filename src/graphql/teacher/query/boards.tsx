import { gql } from '@apollo/client';

export const GET_ALL_BOARDS = gql`
    query getBoards {
        boards {
            id
            label
            value
        }
    }
`;
