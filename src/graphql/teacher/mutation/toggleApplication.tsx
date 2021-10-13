import { gql } from '@apollo/client';

export const TOGGLE_APPLICATION = gql`
    mutation toggleApplicaiton($requirementId: Float!) {
        toggleApplication(requirementId: $requirementId)
    }
`;
