import { gql } from '@apollo/client';

export const ADD_MATERIAL = gql`
    mutation addMaterial(
        $data: AddMaterialType!
        $teacherId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        addMaterial(data: $data, teacherId: $teacherId, subjects: $subjects) {
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
