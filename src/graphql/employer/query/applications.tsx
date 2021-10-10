import { gql } from '@apollo/client';

export const GET_APPLICATIONS = gql`
    query getApplications($requirementId: Float) {
        applications(requirementId: $requirementId) {
            id
            teacher {
                headline
                lastName
                lastName
                about
                photoUrl
            }
        }
    }
`;
