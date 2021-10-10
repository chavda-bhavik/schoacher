import { gql } from '@apollo/client';

export const UPDATE_INFO = gql`
    mutation updateEmployerInfo($data: UpdateEmployerType!, $subjects: [SubStdBoardType!]) {
        updateEmployerInfo(data: $data, subjects: $subjects) {
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
