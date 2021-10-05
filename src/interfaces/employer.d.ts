import { Address, Subject } from './index';

export interface EmployerProfileBase {
    name: string;
    address?: Address;
    mobile1?: string;
    mobile2?: string;
    email?: string;
    subjects?: Subject[];
    about?: string;
    photoUrl?: string;
}
export interface EmployerProfileType {
    name?: string;
    address?: Address;
    mobile1?: string;
    mobile2?: string;
    email?: string;
    subjects?: Subject[];
    about?: string;
    photo?: any;
    photoUrl?: string;
    subjects?: Partial<Subject>[];
}

export interface RequirementType {
    id: number;
    title: string;
    subjects: Partial<Subject>[];
    description?: string;
    type: string;
    qualification?: string;
    startTime?: string;
    endTime?: string;
    salaryFrom?: number;
    salaryUpTo?: number;
    subjects: Partial<Subject>[];
}
