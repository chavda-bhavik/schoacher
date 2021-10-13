import { RequirementType } from './employer';
import { TeacherProfileType } from './teacher';

export type {
    ExperienceType,
    ExperienceFormType,
    MaterialType,
    MaterialFormType,
    QualificationType,
    TeacherProfileType,
    TeacherRequirementFilterType,
    ExperienceBase,
    MaterialBase,
    TeacherType,
} from './teacher';

export type {
    RequirementType,
    EmployerProfileBase,
    RequirementBaseType,
    RequirementFormType,
    ApplicationsFilterType,
} from './employer';

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
    | 'filter'
    | 'msgAlt';

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
    id?: number;
    boardId: number;
    standardId: number;
    subjectId: number;
}

export interface Address {
    id?: number;
    street1: string;
    street2: string;
    city: string;
    state: string;
    pincode: number;
}

export interface ToastVariantType {
    base: string;
    iconstyle: string;
    icon: IconsType;
    name: string;
}

export interface Application {
    id: number;
    requirement?: Partial<RequirementType>;
    teacher?: Partial<TeacherProfileType>;
}
