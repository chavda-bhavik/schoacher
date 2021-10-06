import { gql } from '@apollo/client';

export const ADD_EXPERIENCE = gql`
    mutation addExperience(
        $data: ExperienceType!
        $teacherId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        addExperience(data: $data, teacherId: $teacherId, subjects: $subjects) {
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
