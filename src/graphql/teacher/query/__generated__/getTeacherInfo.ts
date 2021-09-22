/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTeacherInfo
// ====================================================

export interface getTeacherInfo_teacher_experiences_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getTeacherInfo_teacher_experiences_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getTeacherInfo_teacher_experiences_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getTeacherInfo_teacher_experiences_subjects {
  __typename: "SubStdBoard";
  board: getTeacherInfo_teacher_experiences_subjects_board;
  standard: getTeacherInfo_teacher_experiences_subjects_standard;
  subject: getTeacherInfo_teacher_experiences_subjects_subject;
}

export interface getTeacherInfo_teacher_experiences {
  __typename: "Experience";
  currentlyWorking: boolean;
  title: string;
  type: string;
  start: string;
  end: string | null;
  subjects: getTeacherInfo_teacher_experiences_subjects[];
}

export interface getTeacherInfo_teacher_qualifications {
  __typename: "Qualification";
  college: string;
  degree: string;
  start: string;
  end: string;
}

export interface getTeacherInfo_teacher_materials_subjects_board {
  __typename: "Board";
  value: string;
}

export interface getTeacherInfo_teacher_materials_subjects_standard {
  __typename: "Standard";
  value: string;
}

export interface getTeacherInfo_teacher_materials_subjects_subject {
  __typename: "Subject";
  value: string;
}

export interface getTeacherInfo_teacher_materials_subjects {
  __typename: "SubStdBoard";
  board: getTeacherInfo_teacher_materials_subjects_board;
  standard: getTeacherInfo_teacher_materials_subjects_standard;
  subject: getTeacherInfo_teacher_materials_subjects_subject;
}

export interface getTeacherInfo_teacher_materials {
  __typename: "Material";
  title: string;
  fileUrl: string;
  subjects: getTeacherInfo_teacher_materials_subjects[];
}

export interface getTeacherInfo_teacher {
  __typename: "Teacher";
  address: string | null;
  email: string;
  id: number;
  headline: string | null;
  gender: number;
  experiences: getTeacherInfo_teacher_experiences[];
  qualifications: getTeacherInfo_teacher_qualifications[];
  materials: getTeacherInfo_teacher_materials[];
}

export interface getTeacherInfo {
  teacher: getTeacherInfo_teacher;
}

export interface getTeacherInfoVariables {
  teacherId: number;
}
