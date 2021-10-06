import { gql } from '@apollo/client';

export const DELETE_EXPERIENCE = gql`
    mutation deleteExperience($experienceId: Float!, $teacherId: Float!) {
        deleteExperience(experienceId: $experienceId, teacherId: $teacherId) {
            id
        }
    }
`;
