import { Subject } from '.';
export interface TeacherProfileType {
    firstName: string;
    lastName: string;
    address?: string;
    mobile1?: string;
    mobile2?: string;
    photoUrl?: string;
    email?: string;
    emailVerified?: boolean;
    headline?: string;
    about?: string;
}

export interface QualificationType {
    id: string | number;
    degree: string;
    college: string;
    description?: string;
    start: Date;
    end: Date;
    grade?: string;
}

export interface ExperienceType {
    id: string | number;
    title: string;
    type: string;
    employerName: string;
    start: Date;
    end?: Date;
    currentlyWorking: Boolean;
    description: string;
    subjects: Subject[];
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
