import { gql } from '@apollo/client';

export const UPDATE_REQUIREMENT = gql`
    mutation updateRequirement(
        $data: RequirementType!
        $requirementId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        updateRequirement(data: $data, requirementId: $requirementId, subjects: $subjects) {
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
