/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployerTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: teacherInfo
// ====================================================

export interface teacherInfo_teacherInfo_experiences_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface teacherInfo_teacherInfo_experiences_subjects_board {
  __typename: "Board";
  value: string;
}

export interface teacherInfo_teacherInfo_experiences_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface teacherInfo_teacherInfo_experiences_subjects {
  __typename: "SubStdBoard";
  id: number;
  standard: teacherInfo_teacherInfo_experiences_subjects_standard;
  board: teacherInfo_teacherInfo_experiences_subjects_board;
  subject: teacherInfo_teacherInfo_experiences_subjects_subject;
}

export interface teacherInfo_teacherInfo_experiences {
  __typename: "Experience";
  id: number;
  title: string;
  type: EmployerTypeEnum;
  start: string;
  end: string | null;
  employerName: string | null;
  currentlyWorking: boolean;
  subjects: teacherInfo_teacherInfo_experiences_subjects[];
}

export interface teacherInfo_teacherInfo_qualifications {
  __typename: "Qualification";
  id: number;
  college: string;
  degree: string;
  end: string;
  start: string;
}

export interface teacherInfo_teacherInfo_materials_subjects_board {
  __typename: "Board";
  value: string;
}

export interface teacherInfo_teacherInfo_materials_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface teacherInfo_teacherInfo_materials_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface teacherInfo_teacherInfo_materials_subjects {
  __typename: "SubStdBoard";
  id: number;
  board: teacherInfo_teacherInfo_materials_subjects_board;
  standard: teacherInfo_teacherInfo_materials_subjects_standard;
  subject: teacherInfo_teacherInfo_materials_subjects_subject;
}

export interface teacherInfo_teacherInfo_materials {
  __typename: "Material";
  id: number;
  title: string;
  fileUrl: string;
  subjects: teacherInfo_teacherInfo_materials_subjects[];
}

export interface teacherInfo_teacherInfo {
  __typename: "Teacher";
  firstName: string;
  lastName: string;
  mobile1: string | null;
  mobile2: string | null;
  headline: string | null;
  email: string;
  about: string | null;
  photoUrl: string;
  experiences: teacherInfo_teacherInfo_experiences[];
  qualifications: teacherInfo_teacherInfo_qualifications[];
  materials: teacherInfo_teacherInfo_materials[];
}

export interface teacherInfo {
  teacherInfo: teacherInfo_teacherInfo | null;
}

export interface teacherInfoVariables {
  teacherId: number;
}
