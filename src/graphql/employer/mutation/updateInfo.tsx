import { gql } from '@apollo/client';

export const UPDATE_INFO = gql`
    mutation updateEmployerInfo(
        $data: UpdateEmployerType!
        $employerId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        updateEmployerInfo(data: $data, employerId: $employerId, subjects: $subjects) {
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
