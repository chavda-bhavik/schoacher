import { gql } from '@apollo/client';

export const GET_TEACHER = gql`
    query teacherInfo($teacherId: Float!) {
        teacherInfo(teacherId: $teacherId) {
            firstName
            lastName
            mobile1
            mobile2
            headline
            email
            about
            photoUrl
            experiences {
                id
                title
                type
                start
                end
                employerName
                currentlyWorking
                subjects {
                    id
                    standard {
                        value
                    }
                    board {
                        value
                    }
                    subject {
                        value
                    }
                }
            }
            qualifications {
                id
                college
                degree
                end
                start
            }
            materials {
                id
                title
                fileUrl
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
            }
        }
    }
`;
