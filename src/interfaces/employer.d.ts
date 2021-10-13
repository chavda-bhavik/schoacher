import { RequirementTypeEnum } from '@/../__generated__/globalTypes';
import { Address, Subject, SubjectFormType } from './index';

export interface EmployerProfileBase {
    name?: string;
    address?: Address;
    mobile1?: string;
    mobile2?: string;
    email?: string;
    subjects?: Subject[];
    about?: string;
    photoUrl?: string;
    photo?: any;
}
export interface ListEmployerType extends EmployerProfileBase {
    address?: Partial<Address>;
}

export interface RequirementBaseType {
    id: number;
    title: string;
    subjects: Partial<Subject>[];
    description?: string;
    type?: RequirementTypeEnum;
    qualification?: string;
    startTime?: string;
    endTime?: string;
    salaryFrom?: number;
    salaryUpTo?: number;
    applied?: boolean;
    employer?: Partial<ListEmployerType>;
}
export interface RequirementType extends RequirementBaseType {
    subjects?: Partial<Subject>[];
}
export interface RequirementFormType extends RequirementBaseType {
    subjects?: SubjectFormType[];
}

export interface ApplicationsFilterType {
    requirementId?: number;
}
