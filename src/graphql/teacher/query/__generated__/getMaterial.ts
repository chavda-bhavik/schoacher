/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMaterial
// ====================================================

export interface getMaterial_getMaterial_subjects {
  __typename: "SubStdBoard";
  boardId: number;
  standardId: number;
  subjectId: number;
}

export interface getMaterial_getMaterial {
  __typename: "Material";
  id: number;
  description: string | null;
  title: string;
  subjects: getMaterial_getMaterial_subjects[];
}

export interface getMaterial {
  getMaterial: getMaterial_getMaterial;
}

export interface getMaterialVariables {
  materialId: number;
}
