import { gql } from '@apollo/client';

export const UPDATE_EXPERIENCE = gql`
    mutation updateExperience(
        $data: ExperienceType!
        $experienceId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        updateExperience(data: $data, experienceId: $experienceId, subjects: $subjects) {
            entity {
                id
            }
            errors {
                field
                message
            }
        }
    }
`;
