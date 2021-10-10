import { gql } from '@apollo/client';

export const DELETE_MATERIAL = gql`
    mutation deleteMaterial($materialId: Float!) {
        deleteMaterial(materialId: $materialId) {
            id
        }
    }
`;
