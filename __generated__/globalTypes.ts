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

export enum LoginResponseTypeEnum {
  employer = "employer",
  teacher = "teacher",
}

/**
 * Enum describing Requirement Type
 */
export enum RequirementTypeEnum {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
}

export interface AddMaterialType {
  title?: string | null;
  description?: string | null;
  document?: any | null;
}

export interface AddressType {
  street1: string;
  street2: string;
  city: string;
  state: string;
  pincode: number;
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

export interface RegisterEmployerType {
  name: string;
  email: string;
  password: string;
  type?: EmployerTypeEnum | null;
}

export interface RegisterTeacherType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RequirementType {
  title?: string | null;
  type?: RequirementTypeEnum | null;
  qualification?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  salaryFrom?: number | null;
  salaryUpTo?: number | null;
  description?: string | null;
}

export interface SubStdBoardType {
  boardId: number;
  subjectId: number;
  standardId: number;
}

export interface UpdateEmployerType {
  name?: string | null;
  mobile1?: string | null;
  mobile2?: string | null;
  about?: string | null;
  type?: EmployerTypeEnum | null;
  photo?: any | null;
  address?: AddressType | null;
}

export interface UpdateMaterialType {
  title?: string | null;
  description?: string | null;
  document?: any | null;
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
