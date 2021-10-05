import { gql } from '@apollo/client';

export const ADD_REQUIREMENT = gql`
    mutation addRequirement(
        $data: RequirementType!
        $employerId: Float!
        $subjects: [SubStdBoardType!]
    ) {
        addRequirement(data: $data, employerId: $employerId, subjects: $subjects) {
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
