import { gql } from '@apollo/client';

export const ADD_REQUIREMENT = gql`
    mutation addRequirement($data: RequirementType!, $subjects: [SubStdBoardType!]) {
        addRequirement(data: $data, subjects: $subjects) {
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
