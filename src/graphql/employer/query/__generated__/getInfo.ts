/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getInfo
// ====================================================

export interface getInfo_employer_address {
  __typename: "Address";
  city: string;
  pincode: number;
  state: string;
  street1: string;
  street2: string;
}

export interface getInfo_employer_subjects_board {
  __typename: "Board";
  id: number;
  value: string;
}

export interface getInfo_employer_subjects_standard {
  __typename: "Standard";
  id: number;
  value: string;
}

export interface getInfo_employer_subjects_subject {
  __typename: "Subject";
  id: number;
  value: string;
}

export interface getInfo_employer_subjects {
  __typename: "SubStdBoard";
  id: number;
  boardId: number;
  subjectId: number;
  standardId: number;
  board: getInfo_employer_subjects_board;
  standard: getInfo_employer_subjects_standard;
  subject: getInfo_employer_subjects_subject;
}

export interface getInfo_employer {
  __typename: "Employer";
  about: string | null;
  mobile1: string | null;
  mobile2: string | null;
  name: string;
  photoUrl: string | null;
  type: string;
  address: getInfo_employer_address;
  subjects: getInfo_employer_subjects[];
}

export interface getInfo {
  employer: getInfo_employer;
}

export interface getInfoVariables {
  employerId: number;
}
