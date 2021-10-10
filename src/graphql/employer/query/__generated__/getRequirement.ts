/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getRequirement
// ====================================================

export interface getRequirement_getRequirement_subjects {
  __typename: "SubStdBoard";
  boardId: number;
  standardId: number;
  subjectId: number;
}

export interface getRequirement_getRequirement {
  __typename: "Requirement";
  description: string | null;
  endTime: string | null;
  qualification: string | null;
  salaryFrom: number | null;
  salaryUpTo: number | null;
  startTime: string | null;
  subjects: getRequirement_getRequirement_subjects[];
  title: string;
  type: RequirementTypeEnum;
}

export interface getRequirement {
  getRequirement: getRequirement_getRequirement;
}

export interface getRequirementVariables {
  requirementId: number;
}
