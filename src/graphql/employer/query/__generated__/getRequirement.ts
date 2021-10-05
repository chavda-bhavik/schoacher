/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

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
  type: string;
}

export interface getRequirement {
  getRequirement: getRequirement_getRequirement;
}

export interface getRequirementVariables {
  requirementId: number;
  employerId: number;
}
