import { gql } from '@apollo/client';

export const GET_ALL_MATERIALS = gql`
    query getAllMaterials {
        getAllMaterials {
            fileUrl
            id
            title
            subjects {
                id
                board {
                    value
                }
                subject {
                    value
                }
                standard {
                    value
                }
            }
        }
    }
`;
