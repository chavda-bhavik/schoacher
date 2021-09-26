import { gql } from '@apollo/client';

export const GET_TEACHER_INFO = gql`
    query getTeacherInfo($teacherId: Float!) {
        teacher(id: $teacherId) {
            address
            email
            firstName
            gender
            lastName
            gender
            about
            headline
            mobile1
            mobile2
            photoUrl
        }
    }
`;
