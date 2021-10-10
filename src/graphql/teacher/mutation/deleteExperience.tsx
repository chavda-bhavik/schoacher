import { gql } from '@apollo/client';

export const DELETE_EXPERIENCE = gql`
    mutation deleteExperience($experienceId: Float!) {
        deleteExperience(experienceId: $experienceId) {
            id
        }
    }
`;
