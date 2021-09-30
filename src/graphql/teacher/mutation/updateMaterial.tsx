import { gql } from '@apollo/client';

export const UPDATE_MATERIAL = gql`
    mutation updateMaterial(
        $data: UpdateMaterialType!
        $materialId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        updateMaterial(data: $data, materialId: $materialId, subjects: $subjects) {
            entity {
                id
            }
            errors {
                field
                message
            }
        }
    }
`;
