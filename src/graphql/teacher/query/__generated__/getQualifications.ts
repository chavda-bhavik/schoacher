/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getQualifications
// ====================================================

export interface getQualifications_getAllQualifications {
  __typename: "Qualification";
  id: number;
  degree: string;
  college: string;
  start: string;
  end: string;
  grade: string | null;
  description: string | null;
}

export interface getQualifications {
  getAllQualifications: getQualifications_getAllQualifications[];
}
