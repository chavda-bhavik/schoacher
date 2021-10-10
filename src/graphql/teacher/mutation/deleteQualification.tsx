import { gql } from '@apollo/client';

export const DELETE_QUALIFICATION = gql`
    mutation deleteQualification($qualificationId: Float!) {
        deleteQualification(qualificationId: $qualificationId) {
            id
        }
    }
`;
