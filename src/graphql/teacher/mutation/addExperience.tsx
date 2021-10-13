import { gql } from '@apollo/client';

export const ADD_EXPERIENCE = gql`
    mutation addExperience($data: ExperienceType!, $subjects: [SubStdBoardType!]) {
        addExperience(data: $data, subjects: $subjects) {
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
