/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddMaterialType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddMaterialMutation
// ====================================================

export interface AddMaterialMutation_addMaterial_entity {
  __typename: "Material";
  id: number;
}

export interface AddMaterialMutation_addMaterial_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface AddMaterialMutation_addMaterial {
  __typename: "MaterialResponseType";
  entity: AddMaterialMutation_addMaterial_entity | null;
  errors: AddMaterialMutation_addMaterial_errors[] | null;
}

export interface AddMaterialMutation {
  addMaterial: AddMaterialMutation_addMaterial;
}

export interface AddMaterialMutationVariables {
  data: AddMaterialType;
  teacherId: number;
  subjects?: SubStdBoardType[] | null;
}
