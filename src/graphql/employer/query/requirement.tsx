import { gql } from '@apollo/client';

export const GET_REQUIREMENT = gql`
    query getRequirement($requirementId: Float!) {
        getRequirement(requirementId: $requirementId) {
            description
            endTime
            qualification
            salaryFrom
            salaryUpTo
            startTime
            subjects {
                boardId
                standardId
                subjectId
            }
            title
            type
        }
    }
`;
