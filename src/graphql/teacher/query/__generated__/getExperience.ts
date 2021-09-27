/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getExperience
// ====================================================

export interface getExperience_getExperience_subjects {
  __typename: "SubStdBoard";
  boardId: number;
  standardId: number;
  subjectId: number;
  id: number;
}

export interface getExperience_getExperience {
  __typename: "Experience";
  currentlyWorking: boolean;
  description: string | null;
  employerName: string | null;
  start: string;
  end: string | null;
  id: number;
  title: string;
  type: string;
  subjects: getExperience_getExperience_subjects[];
}

export interface getExperience {
  getExperience: getExperience_getExperience;
}

export interface getExperienceVariables {
  experienceId: number;
  teacherId: number;
}
