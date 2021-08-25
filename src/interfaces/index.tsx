export type {
    ExperienceType,
    MaterialType,
    QualificationType,
    TeacherProfileType,
} from './teacher';

export type { SchoolProfileType } from './school';

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
    | 'trash';

export type IconsSizesType = 'xs' | 'sm' | 'md' | 'lg';

export type SchoolRegisterFieldTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface Subject {
    id: number | string;
    board: string;
    standard: string;
    subject: string;
}

export interface Address {
    id: string | number;
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    pincode?: string | number;
}
