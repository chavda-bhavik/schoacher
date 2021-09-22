import { gql } from '@apollo/client';

export const GET_TEACHER_INFO = gql`
    query getTeacherInfo($teacherId: Float!) {
        teacher(id: $teacherId) {
            address
            email
            id
            headline
            gender
            experiences {
                currentlyWorking
                title
                type
                start
                end
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
            }
            qualifications {
                college
                degree
                start
                end
            }
            materials {
                title
                fileUrl
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
            }
        }
    }
`;
