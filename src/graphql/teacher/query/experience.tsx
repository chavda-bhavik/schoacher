import { gql } from '@apollo/client';

export const GET_EXPERIENCE = gql`
    query getExperience($experienceId: Float!) {
        getExperience(experienceId: $experienceId) {
            currentlyWorking
            description
            employerName
            start
            end
            id
            title
            type
            subjects {
                boardId
                standardId
                subjectId
                id
            }
        }
    }
`;
