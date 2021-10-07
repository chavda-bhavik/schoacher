import { gql } from '@apollo/client';

export const SEARCH_REQUIREMENTS = gql`
    query searchRequirements(
        $expectedSalary: Float
        $pincode: Float
        $state: String
        $ciry: String
        $type: RequirementTypeEnum
    ) {
        search(
            expectedSalary: $expectedSalary
            pincode: $pincode
            state: $state
            city: $ciry
            type: $type
        ) {
            id
            title
            employer {
                name
                photoUrl
                address {
                    city
                    state
                }
            }
            type
            salaryFrom
            salaryUpTo
        }
    }
`;
