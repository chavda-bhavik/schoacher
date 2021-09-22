import { gql } from '@apollo/client';

export const GET_ALL_QUALIFICATIONS = gql`
    query getQualifications($getAllQualificationsTeacherId: Float!) {
        getAllQualifications(teacherId: $getAllQualificationsTeacherId) {
            id
            degree
            college
            start
            end
            grade
            description
        }
    }
`;
