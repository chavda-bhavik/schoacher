/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getQualification
// ====================================================

export interface getQualification_getQualification {
  __typename: "Qualification";
  college: string;
  degree: string;
  description: string | null;
  end: string;
  grade: string | null;
  start: string;
}

export interface getQualification {
  getQualification: getQualification_getQualification;
}

export interface getQualificationVariables {
  qualificationId: number;
}
