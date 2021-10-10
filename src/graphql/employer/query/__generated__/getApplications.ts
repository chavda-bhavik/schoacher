/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getApplications
// ====================================================

export interface getApplications_applications_teacher {
  __typename: "Teacher";
  headline: string | null;
  firstName: string;
  lastName: string;
  about: string | null;
  photoUrl: string;
}

export interface getApplications_applications {
  __typename: "Application";
  id: number;
  teacher: getApplications_applications_teacher;
}

export interface getApplications {
  applications: getApplications_applications[];
}

export interface getApplicationsVariables {
  requirementId?: number | null;
}
