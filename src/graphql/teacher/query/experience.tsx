import { gql } from '@apollo/client';

export const GET_EXPERIENCE = gql`
    query getExperience($experienceId: Float!, $teacherId: Float!) {
        getExperience(experienceId: $experienceId, teacherId: $teacherId) {
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
