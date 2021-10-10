import { gql } from '@apollo/client';

export const GET_MATERIAL = gql`
    query getMaterial($materialId: Float!) {
        getMaterial(materialId: $materialId) {
            id
            description
            title
            subjects {
                boardId
                standardId
                subjectId
            }
        }
    }
`;
