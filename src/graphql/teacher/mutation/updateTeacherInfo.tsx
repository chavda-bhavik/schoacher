import { gql } from '@apollo/client';

export const UPDATE_TEACHER_INFO = gql`
    mutation updateTeacherInfo($data: UpdateTeacherType!, $teacherId: Float!) {
        updateTeacherInfo(data: $data, id: $teacherId) {
            entity {
                address
                email
                firstName
                lastName
                gender
                headline
                mobile1
                mobile2
                photoUrl
                about
            }
            errors {
                field
                message
            }
        }
    }
`;
