import { gql } from '@apollo/client';

export const GET_QUALIFICATION = gql`
    query getQualification($qualificationId: Float!, $teacherId: Float!) {
        getQualifications(qualificationId: $qualificationId, teacherId: $teacherId) {
            college
            degree
            description
            end
            grade
            start
        }
    }
`;
