/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddMaterialType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addMaterial
// ====================================================

export interface addMaterial_addMaterial_entity {
  __typename: "Material";
  id: number;
}

export interface addMaterial_addMaterial_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface addMaterial_addMaterial {
  __typename: "MaterialResponseType";
  entity: addMaterial_addMaterial_entity | null;
  errors: addMaterial_addMaterial_errors[] | null;
}

export interface addMaterial {
  addMaterial: addMaterial_addMaterial;
}

export interface addMaterialVariables {
  data: AddMaterialType;
  teacherId: number;
  subjects?: SubStdBoardType[] | null;
}
