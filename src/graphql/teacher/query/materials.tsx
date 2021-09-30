import { gql } from '@apollo/client';

export const GET_ALL_MATERIALS = gql`
    query getAllMaterials($teacherId: Float!) {
        getAllMaterials(teacherId: $teacherId) {
            fileUrl
            id
            title
            subjects {
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
