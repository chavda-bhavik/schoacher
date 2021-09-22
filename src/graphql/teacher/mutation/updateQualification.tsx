import { gql } from '@apollo/client';

export const UPDATE_QUALIFICATION = gql`
    mutation updateQualification(
        $updateQualificationData: QualificationType!
        $updateQualificationQualificationId: Float!
    ) {
        updateQualification(
            data: $updateQualificationData
            qualificationId: $updateQualificationQualificationId
        ) {
            entity {
                id
                degree
                college
                start
                end
            }
            errors {
                field
                message
            }
        }
    }
`;
