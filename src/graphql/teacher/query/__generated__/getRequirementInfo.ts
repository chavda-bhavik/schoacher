/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getRequirementInfo
// ====================================================

export interface getRequirementInfo_getRequirement_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getRequirementInfo_getRequirement_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getRequirementInfo_getRequirement_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getRequirementInfo_getRequirement_subjects {
  __typename: "SubStdBoard";
  id: number;
  board: getRequirementInfo_getRequirement_subjects_board;
  standard: getRequirementInfo_getRequirement_subjects_standard;
  subject: getRequirementInfo_getRequirement_subjects_subject;
}

export interface getRequirementInfo_getRequirement_employer_address {
  __typename: "Address";
  city: string;
  state: string;
  pincode: number;
  street1: string;
  street2: string;
}

export interface getRequirementInfo_getRequirement_employer {
  __typename: "Employer";
  name: string;
  address: getRequirementInfo_getRequirement_employer_address | null;
  mobile1: string | null;
  mobile2: string | null;
  email: string;
  about: string | null;
  photoUrl: string | null;
  type: string;
}

export interface getRequirementInfo_getRequirement {
  __typename: "Requirement";
  id: number;
  description: string | null;
  endTime: string | null;
  startTime: string | null;
  qualification: string | null;
  salaryFrom: number | null;
  salaryUpTo: number | null;
  title: string;
  type: RequirementTypeEnum;
  applied: boolean;
  subjects: getRequirementInfo_getRequirement_subjects[];
  employer: getRequirementInfo_getRequirement_employer;
}

export interface getRequirementInfo {
  getRequirement: getRequirementInfo_getRequirement;
}

export interface getRequirementInfoVariables {
  requirementId: number;
}
