import { gql } from '@apollo/client';

export const GET_ALL_EXPERIENCES = gql`
    query getAllExperiences($teacherId: Float!) {
        getAllExperiences(teacherId: $teacherId) {
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
