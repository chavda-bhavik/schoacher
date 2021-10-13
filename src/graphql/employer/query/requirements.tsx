import { gql } from '@apollo/client';

export const GET_ALL_REQUIREMENTS = gql`
    query getAllRequirements {
        getAllRequirements {
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
