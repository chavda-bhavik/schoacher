import { Address, Subject } from '@/..';

export interface SchoolProfileType {
    id: number | string;
    since?: number;
    name: string;
    address?: Address;
    mobile1?: string | number;
    mobile2?: string | number;
    email?: string;
    subjects?: Subject[];
    about?: string;
    profileImageUrl?: string;
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