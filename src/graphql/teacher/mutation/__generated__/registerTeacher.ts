/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterTeacherType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: registerTeacher
// ====================================================

export interface registerTeacher_registerTeacher_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface registerTeacher_registerTeacher_entity {
  __typename: "Teacher";
  id: number;
}

export interface registerTeacher_registerTeacher {
  __typename: "TeacherResponseType";
  errors: registerTeacher_registerTeacher_errors[] | null;
  entity: registerTeacher_registerTeacher_entity | null;
}

export interface registerTeacher {
  registerTeacher: registerTeacher_registerTeacher;
}

export interface registerTeacherVariables {
  data: RegisterTeacherType;
}
