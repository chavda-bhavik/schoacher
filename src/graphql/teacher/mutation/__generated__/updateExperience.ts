/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExperienceType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateExperience
// ====================================================

export interface updateExperience_updateExperience_entity {
  __typename: "Experience";
  id: number;
}

export interface updateExperience_updateExperience_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface updateExperience_updateExperience {
  __typename: "ExperienceResponseType";
  entity: updateExperience_updateExperience_entity | null;
  errors: updateExperience_updateExperience_errors[] | null;
}

export interface updateExperience {
  updateExperience: updateExperience_updateExperience;
}

export interface updateExperienceVariables {
  data: ExperienceType;
  experienceId: number;
  subjects?: SubStdBoardType[] | null;
}
