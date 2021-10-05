import { gql } from '@apollo/client';

export const GET_ALL_REQUIREMENTS = gql`
    query getAllRequirements($employerId: Float!) {
        getAllRequirements(employerId: $employerId) {
            title
            type
            startTime
            endTime
            qualification
            id
            subjects {
                id
                board {
                    value
                }
                standard {
                    value
                }
                subject {
                    value
                }
            }
        }
    }
`;
