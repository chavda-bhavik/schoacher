/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QualificationType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateQualification
// ====================================================

export interface updateQualification_updateQualification_entity {
  __typename: "Qualification";
  id: number;
  degree: string;
  college: string;
  start: string;
  end: string;
}

export interface updateQualification_updateQualification_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateQualification_updateQualification {
  __typename: "QualificationResponseType";
  entity: updateQualification_updateQualification_entity | null;
  errors: updateQualification_updateQualification_errors[] | null;
}

export interface updateQualification {
  updateQualification: updateQualification_updateQualification;
}

export interface updateQualificationVariables {
  updateQualificationData: QualificationType;
  updateQualificationQualificationId: number;
}
