import { EmployerTypeEnum } from '@/../__generated__/globalTypes';
import { Subject, SubjectFormType } from '.';
export interface TeacherProfileType {
    firstName: string;
    lastName: string;
    address?: string;
    mobile1?: string;
    mobile2?: string;
    photoUrl?: string;
    email?: string;
    gender?: number;
    photoUrl?: string;
    headline?: string;
    about?: string;
}

export interface QualificationType {
    id: string | number;
    degree: string;
    college: string;
    description?: string;
    start: string;
    end: string;
    grade?: string;
}

export interface ExperienceBase {
    id: number;
    title: string;
    type: EmployerTypeEnum;
    employerName?: string;
    start: string;
    end?: string;
    currentlyWorking: boolean;
    description?: string;
}
export interface ExperienceType extends ExperienceBase {
    subjects: Partial<Subject>[];
}
export interface ExperienceFormType extends ExperienceBase {
    subjects: SubjectFormType[];
}

export interface MaterialType {
    id: string | number;
    title: string;
    subjects: Subject[];
    mediaUrl?: string;
    mediaObj?: File;
    description: string;
}

export interface TeacherRequirementFilterType {
    expectedSalary?: number;
    city?: string;
    state?: string;
    type?: string;
    pincode?: number;
    subjects?: Subject[];
}
