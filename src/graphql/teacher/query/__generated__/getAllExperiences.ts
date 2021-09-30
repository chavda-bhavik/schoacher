/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployerTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllExperiences
// ====================================================

export interface getAllExperiences_getAllExperiences_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getAllExperiences_getAllExperiences_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getAllExperiences_getAllExperiences_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getAllExperiences_getAllExperiences_subjects {
  __typename: "SubStdBoard";
  board: getAllExperiences_getAllExperiences_subjects_board;
  standard: getAllExperiences_getAllExperiences_subjects_standard;
  subject: getAllExperiences_getAllExperiences_subjects_subject;
}

export interface getAllExperiences_getAllExperiences {
  __typename: "Experience";
  currentlyWorking: boolean;
  end: string | null;
  id: number;
  start: string;
  subjects: getAllExperiences_getAllExperiences_subjects[];
  type: EmployerTypeEnum;
  title: string;
}

export interface getAllExperiences {
  getAllExperiences: getAllExperiences_getAllExperiences[];
}

export interface getAllExperiencesVariables {
  teacherId: number;
}
