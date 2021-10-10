/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExperienceType, SubStdBoardType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addExperience
// ====================================================

export interface addExperience_addExperience_entity {
  __typename: "Experience";
  id: number;
}

export interface addExperience_addExperience_errors {
  __typename: "FieldError";
  field: string;
  message: string;
}

export interface addExperience_addExperience {
  __typename: "ExperienceResponseType";
  entity: addExperience_addExperience_entity | null;
  errors: addExperience_addExperience_errors[] | null;
}

export interface addExperience {
  addExperience: addExperience_addExperience;
}

export interface addExperienceVariables {
  data: ExperienceType;
  subjects?: SubStdBoardType[] | null;
}
