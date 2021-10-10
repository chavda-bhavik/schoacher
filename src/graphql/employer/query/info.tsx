import { gql } from '@apollo/client';

export const GET_INFO = gql`
    query getInfo {
        employer {
            about
            mobile1
            mobile2
            name
            photoUrl
            type
            address {
                city
                pincode
                state
                street1
                street2
            }
            subjects {
                id
                boardId
                subjectId
                standardId
                board {
                    id
                    value
                }
                standard {
                    id
                    value
                }
                subject {
                    id
                    value
                }
            }
        }
    }
`;
