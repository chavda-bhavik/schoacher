/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBoards
// ====================================================

export interface getBoards_boards {
  __typename: "Board";
  id: number;
  label: string;
  value: string;
}

export interface getBoards {
  boards: getBoards_boards[];
}
