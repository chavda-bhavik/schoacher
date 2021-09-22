import { gql } from '@apollo/client';

export const ADD_QUALIFICATION = gql`
    mutation addQualification($data: QualificationType!, $teacherId: Float!) {
        addQualification(data: $data, teacherId: $teacherId) {
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
