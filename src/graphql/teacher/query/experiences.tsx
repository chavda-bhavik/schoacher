import { gql } from '@apollo/client';

export const GET_ALL_EXPERIENCES = gql`
    query getAllExperiences {
        getAllExperiences {
            currentlyWorking
            end
            id
            start
            subjects {
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
            type
            title
        }
    }
`;
