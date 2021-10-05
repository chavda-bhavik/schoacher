/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateRequirement
// ====================================================

export interface updateRequirement_updateRequirement_entity {
  __typename: "Requirement";
  id: number;
}

export interface updateRequirement_updateRequirement_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateRequirement_updateRequirement {
  __typename: "RequirementResponseType";
  entity: updateRequirement_updateRequirement_entity | null;
  errors: updateRequirement_updateRequirement_errors[] | null;
}

export interface updateRequirement {
  updateRequirement: updateRequirement_updateRequirement;
}

export interface updateRequirementVariables {
  data: RequirementType;
  requirementId: number;
  subjects?: SubStdBoardType[] | null;
}
