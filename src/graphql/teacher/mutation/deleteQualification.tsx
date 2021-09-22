import { gql } from '@apollo/client';

export const DELETE_QUALIFICATION = gql`
    mutation deleteQualification($qualificationId: Float!, $teacherId: Float!) {
        deleteQualification(qualificationId: $qualificationId, teacherId: $teacherId) {
            id
        }
    }
`;
