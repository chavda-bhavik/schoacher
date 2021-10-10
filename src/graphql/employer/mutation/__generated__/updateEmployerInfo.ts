/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateEmployerType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateEmployerInfo
// ====================================================

export interface updateEmployerInfo_updateEmployerInfo_entity {
  __typename: "Employer";
  id: number;
}

export interface updateEmployerInfo_updateEmployerInfo_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateEmployerInfo_updateEmployerInfo {
  __typename: "EmployerResponseType";
  entity: updateEmployerInfo_updateEmployerInfo_entity | null;
  errors: updateEmployerInfo_updateEmployerInfo_errors[] | null;
}

export interface updateEmployerInfo {
  updateEmployerInfo: updateEmployerInfo_updateEmployerInfo;
}

export interface updateEmployerInfoVariables {
  data: UpdateEmployerType;
  subjects?: SubStdBoardType[] | null;
}
