/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getStandards
// ====================================================

export interface getStandards_standards {
  __typename: "Standard";
  id: number;
  value: string;
  label: string;
}

export interface getStandards {
  standards: getStandards_standards[];
}
