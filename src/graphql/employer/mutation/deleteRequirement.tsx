import { gql } from '@apollo/client';

export const DELETE_REQUIREMENT = gql`
    mutation deleteRequirement($requirementId: Float!) {
        deleteRequirement(requirementId: $requirementId) {
            id
        }
    }
`;
