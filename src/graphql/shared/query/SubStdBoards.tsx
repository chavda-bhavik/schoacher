import { gql } from '@apollo/client';

export const GET_SUB_STD_BOARDS = gql`
    query getSubStdBoards {
        boards {
            id
            label
            value
        }
        subjects {
            id
            label
            value
        }
        standards {
            id
            value
            label
        }
    }
`;
