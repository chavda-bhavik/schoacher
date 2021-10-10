import { gql } from '@apollo/client';

export const GET_APPLICATIONS = gql`
    query getApplications($employerId: Float!, $requirementId: Float) {
        applications(employerId: $employerId, requirementId: $requirementId) {
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
