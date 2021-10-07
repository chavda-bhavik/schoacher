/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequirementTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchRequirements
// ====================================================

export interface searchRequirements_search_employer_address {
  __typename: "Address";
  city: string;
  state: string;
}

export interface searchRequirements_search_employer {
  __typename: "Employer";
  name: string;
  photoUrl: string | null;
  address: searchRequirements_search_employer_address | null;
}

export interface searchRequirements_search {
  __typename: "Requirement";
  id: number;
  title: string;
  employer: searchRequirements_search_employer;
  type: RequirementTypeEnum;
  salaryFrom: number | null;
  salaryUpTo: number | null;
}

export interface searchRequirements {
  search: searchRequirements_search[];
}

export interface searchRequirementsVariables {
  expectedSalary?: number | null;
  pincode?: number | null;
  state?: string | null;
  ciry?: string | null;
  type?: RequirementTypeEnum | null;
}
