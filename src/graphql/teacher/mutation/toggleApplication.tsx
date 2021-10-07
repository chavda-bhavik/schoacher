import { gql } from '@apollo/client';

export const TOGGLE_APPLICATION = gql`
    mutation toggleApplicaiton($requirementId: Float!, $teacherId: Float!) {
        toggleApplication(requirementId: $requirementId, teacherId: $teacherId)
    }
`;
