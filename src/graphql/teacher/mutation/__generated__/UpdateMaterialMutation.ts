/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMaterialType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMaterialMutation
// ====================================================

export interface UpdateMaterialMutation_updateMaterial_entity {
  __typename: "Material";
  id: number;
}

export interface UpdateMaterialMutation_updateMaterial_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface UpdateMaterialMutation_updateMaterial {
  __typename: "MaterialResponseType";
  entity: UpdateMaterialMutation_updateMaterial_entity | null;
  errors: UpdateMaterialMutation_updateMaterial_errors[] | null;
}

export interface UpdateMaterialMutation {
  updateMaterial: UpdateMaterialMutation_updateMaterial;
}

export interface UpdateMaterialMutationVariables {
  data: UpdateMaterialType;
  materialId: number;
  subjects?: SubStdBoardType[] | null;
}
