import { gql } from '@apollo/client';

export const GET_REQUIREMENT_INFO = gql`
    query getRequirementInfo($requirementId: Float!, $employerId: Float!) {
        getRequirement(requirementId: $requirementId, employerId: $employerId) {
            id
            description
            endTime
            startTime
            qualification
            salaryFrom
            salaryUpTo
            title
            type
            applied
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
            employer {
                name
                address {
                    city
                    state
                    pincode
                    street1
                    street2
                }
                mobile1
                mobile2
                email
                about
                photoUrl
                type
            }
        }
    }
`;
