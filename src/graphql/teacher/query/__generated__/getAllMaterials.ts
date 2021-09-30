/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllMaterials
// ====================================================

export interface getAllMaterials_getAllMaterials_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getAllMaterials_getAllMaterials_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getAllMaterials_getAllMaterials_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getAllMaterials_getAllMaterials_subjects {
  __typename: "SubStdBoard";
  board: getAllMaterials_getAllMaterials_subjects_board;
  subject: getAllMaterials_getAllMaterials_subjects_subject;
  standard: getAllMaterials_getAllMaterials_subjects_standard;
}

export interface getAllMaterials_getAllMaterials {
  __typename: "Material";
  fileUrl: string;
  id: number;
  title: string;
  subjects: getAllMaterials_getAllMaterials_subjects[];
}

export interface getAllMaterials {
  getAllMaterials: getAllMaterials_getAllMaterials[];
}

export interface getAllMaterialsVariables {
  teacherId: number;
}
