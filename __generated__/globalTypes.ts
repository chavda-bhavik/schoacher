/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Enum describing Employer Type
 */
export enum EmployerTypeEnum {
  HomeBatch = "HomeBatch",
  School = "School",
  Tution = "Tution",
}

export interface ExperienceType {
  start?: string | null;
  end?: string | null;
  title?: string | null;
  currentlyWorking?: boolean | null;
  description?: string | null;
  type?: EmployerTypeEnum | null;
  employerName?: string | null;
}

export interface QualificationType {
  start?: string | null;
  end?: string | null;
  college?: string | null;
  degree?: string | null;
  description?: string | null;
  grade?: string | null;
}

export interface SubStdBoardType {
  boardId: number;
  subjectId: number;
  standardId: number;
}

export interface UpdateTeacherType {
  firstName?: string | null;
  lastName?: string | null;
  mobile1?: string | null;
  mobile2?: string | null;
  headline?: string | null;
  address?: string | null;
  gender?: number | null;
  about?: string | null;
  photo?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
