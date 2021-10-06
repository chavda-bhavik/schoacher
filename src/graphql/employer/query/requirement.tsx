import { gql } from '@apollo/client';

export const GET_REQUIREMENT = gql`
    query getRequirement($requirementId: Float!, $employerId: Float!) {
        getRequirement(requirementId: $requirementId, employerId: $employerId) {
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
