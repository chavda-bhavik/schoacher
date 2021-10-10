import { gql } from '@apollo/client';

export const REGISTER_TEACHER = gql`
    mutation registerTeacher($data: RegisterTeacherType!) {
        registerTeacher(data: $data) {
            errors {
                field
                message
            }
            entity {
                id
            }
        }
    }
`;
