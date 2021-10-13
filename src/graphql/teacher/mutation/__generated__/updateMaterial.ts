/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMaterialType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateMaterial
// ====================================================

export interface updateMaterial_updateMaterial_entity {
  __typename: "Material";
  id: number;
}

export interface updateMaterial_updateMaterial_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateMaterial_updateMaterial {
  __typename: "MaterialResponseType";
  entity: updateMaterial_updateMaterial_entity | null;
  errors: updateMaterial_updateMaterial_errors[] | null;
}

export interface updateMaterial {
  updateMaterial: updateMaterial_updateMaterial;
}

export interface updateMaterialVariables {
  data: UpdateMaterialType;
  materialId: number;
  subjects?: SubStdBoardType[] | null;
}
