/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSubjects
// ====================================================

export interface getSubjects_subjects {
  __typename: "Subject";
  id: number;
  value: string;
  label: string;
}

export interface getSubjects {
  subjects: getSubjects_subjects[];
}
