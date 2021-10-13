/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QualificationType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addQualification
// ====================================================

export interface addQualification_addQualification_entity {
  __typename: "Qualification";
  id: number;
  college: string;
  degree: string;
  description: string | null;
  start: string;
  end: string;
  grade: string | null;
}

export interface addQualification_addQualification_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface addQualification_addQualification {
  __typename: "QualificationResponseType";
  entity: addQualification_addQualification_entity | null;
  errors: addQualification_addQualification_errors[] | null;
}

export interface addQualification {
  addQualification: addQualification_addQualification;
}

export interface addQualificationVariables {
  data: QualificationType;
}
