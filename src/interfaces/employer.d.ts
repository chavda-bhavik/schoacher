import { Address, Subject } from '@/..';

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
    id: string | number;
    title: string;
    subjects: Subject[];
    description?: string;
    type: number;
    qualification?: string;
    time?: {
        startTime: Date;
        endTime: Date;
    };
    salaryRange?: {
        start?: number;
        end?: number;
    };
}
