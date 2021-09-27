export type {
    ExperienceType,
    ExperienceFormType,
    MaterialType,
    QualificationType,
    TeacherProfileType,
    TeacherRequirementFilterType,
} from './teacher';

export type { EmployerProfileType, RequirementType } from './employer';

export type IconsType =
    | 'check'
    | 'logOut'
    | 'pencil'
    | 'user'
    | 'userCircle'
    | 'email'
    | 'phone'
    | 'phoneF'
    | 'home'
    | 'homeF'
    | 'building'
    | 'buildingF'
    | 'plusCircle'
    | 'book'
    | 'grid'
    | 'page'
    | 'download'
    | 'envelop'
    | 'logIn'
    | 'envelopFilled'
    | 'close'
    | 'plus'
    | 'pinAlt'
    | 'orderedList'
    | 'unOrderedList'
    | 'text'
    | 'document'
    | 'inbox'
    | 'loader'
    | 'trash'
    | 'danger'
    | 'info'
    | 'filter';

export type IconsSizesType = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success' | 'bordered';

export type InputTypes =
    | 'text'
    | 'number'
    | 'tel'
    | 'password'
    | 'email'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'file';

export type SchoolRegisterFieldTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

interface SubjectStandardBoard {
    id: number;
    label: string;
    value: string;
}

export interface Subject {
    id: number | string;
    board: Partial<SubjectStandardBoard>;
    standard: Partial<SubjectStandardBoard>;
    subject: Partial<SubjectStandardBoard>;
}

export interface SubjectFormType {
    id: number | string;
    boardId: number | string;
    standardId: number | string;
    subjectId: number | string;
}

export interface Address {
    id?: string | number;
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    pincode?: string | number;
}
