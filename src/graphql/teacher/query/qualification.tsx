import { gql } from '@apollo/client';

export const GET_QUALIFICATION = gql`
    query getQualification($qualificationId: Float!) {
        getQualification(qualificationId: $qualificationId) {
            college
            degree
            description
            end
            grade
            start
        }
    }
`;
