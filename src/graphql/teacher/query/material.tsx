import { gql } from '@apollo/client';

export const GET_MATERIAL = gql`
    query getMaterial($materialId: Float!, $teacherId: Float!) {
        getMaterial(materialId: $materialId, teacherId: $teacherId) {
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
