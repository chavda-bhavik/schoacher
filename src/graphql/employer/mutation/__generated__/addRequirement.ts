/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addRequirement
// ====================================================

export interface addRequirement_addRequirement_entity {
  __typename: "Requirement";
  id: number;
}

export interface addRequirement_addRequirement_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface addRequirement_addRequirement {
  __typename: "RequirementResponseType";
  entity: addRequirement_addRequirement_entity | null;
  errors: addRequirement_addRequirement_errors[] | null;
}

export interface addRequirement {
  addRequirement: addRequirement_addRequirement;
}

export interface addRequirementVariables {
  data: RequirementType;
  subjects?: SubStdBoardType[] | null;
}
