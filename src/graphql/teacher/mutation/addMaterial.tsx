import { gql } from '@apollo/client';

export const ADD_MATERIAL = gql`
    mutation addMaterial($data: AddMaterialType!, $subjects: [SubStdBoardType!]) {
        addMaterial(data: $data, subjects: $subjects) {
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
