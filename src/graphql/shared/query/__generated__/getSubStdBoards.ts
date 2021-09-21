/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSubStdBoards
// ====================================================

export interface getSubStdBoards_boards {
  __typename: "Board";
  id: number;
  label: string;
  value: string;
}

export interface getSubStdBoards_subjects {
  __typename: "Subject";
  id: number;
  label: string;
  value: string;
}

export interface getSubStdBoards_standards {
  __typename: "Standard";
  id: number;
  value: string;
  label: string;
}

export interface getSubStdBoards {
  boards: getSubStdBoards_boards[];
  subjects: getSubStdBoards_subjects[];
  standards: getSubStdBoards_standards[];
}
