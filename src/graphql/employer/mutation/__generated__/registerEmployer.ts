/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterEmployerType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: registerEmployer
// ====================================================

export interface registerEmployer_registerEmployer_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface registerEmployer_registerEmployer_entity {
  __typename: "Employer";
  id: number;
}

export interface registerEmployer_registerEmployer {
  __typename: "EmployerResponseType";
  errors: registerEmployer_registerEmployer_errors[] | null;
  entity: registerEmployer_registerEmployer_entity | null;
}

export interface registerEmployer {
  registerEmployer: registerEmployer_registerEmployer;
}

export interface registerEmployerVariables {
  data: RegisterEmployerType;
}
