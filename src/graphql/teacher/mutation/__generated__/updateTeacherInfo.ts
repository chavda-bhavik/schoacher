/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTeacherType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateTeacherInfo
// ====================================================

export interface updateTeacherInfo_updateTeacherInfo_entity {
  __typename: "Teacher";
  address: string | null;
  email: string;
  firstName: string;
  lastName: string;
  gender: number;
  headline: string | null;
  mobile1: string | null;
  mobile2: string | null;
  photoUrl: string;
  about: string | null;
}

export interface updateTeacherInfo_updateTeacherInfo_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateTeacherInfo_updateTeacherInfo {
  __typename: "TeacherResponseType";
  entity: updateTeacherInfo_updateTeacherInfo_entity | null;
  errors: updateTeacherInfo_updateTeacherInfo_errors[] | null;
}

export interface updateTeacherInfo {
  updateTeacherInfo: updateTeacherInfo_updateTeacherInfo;
}

export interface updateTeacherInfoVariables {
  data: UpdateTeacherType;
}
