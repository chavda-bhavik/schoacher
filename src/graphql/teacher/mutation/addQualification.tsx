import { gql } from '@apollo/client';

export const ADD_QUALIFICATION = gql`
    mutation addQualification($data: QualificationType!) {
        addQualification(data: $data) {
            entity {
                id
                college
                degree
                description
                start
                end
                grade
            }
            errors {
                field
                message
            }
        }
    }
`;
