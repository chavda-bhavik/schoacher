/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllRequirements
// ====================================================

export interface getAllRequirements_getAllRequirements_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getAllRequirements_getAllRequirements_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getAllRequirements_getAllRequirements_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getAllRequirements_getAllRequirements_subjects {
  __typename: "SubStdBoard";
  id: number;
  board: getAllRequirements_getAllRequirements_subjects_board;
  standard: getAllRequirements_getAllRequirements_subjects_standard;
  subject: getAllRequirements_getAllRequirements_subjects_subject;
}

export interface getAllRequirements_getAllRequirements {
  __typename: "Requirement";
  title: string;
  type: RequirementTypeEnum;
  startTime: string | null;
  endTime: string | null;
  qualification: string | null;
  id: number;
  subjects: getAllRequirements_getAllRequirements_subjects[];
}

export interface getAllRequirements {
  getAllRequirements: getAllRequirements_getAllRequirements[];
}

export interface getAllRequirementsVariables {
  employerId: number;
}
