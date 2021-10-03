/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTeacherInfo
// ====================================================

export interface getTeacherInfo_teacher {
  __typename: "Teacher";
  address: string | null;
  email: string;
  firstName: string;
  gender: number;
  lastName: string;
  about: string | null;
  headline: string | null;
  mobile1: string | null;
  mobile2: string | null;
  photoUrl: string;
}

export interface getTeacherInfo {
  teacher: getTeacherInfo_teacher;
}

export interface getTeacherInfoVariables {
  teacherId: number;
}
