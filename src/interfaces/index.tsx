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
    | 'plus';

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

export interface TeacherProfileData {
    firstName: string;
    lastName: string;
    address?: string;
    mobile1?: string;
    mobile2?: string;
    photoUrl?: string;
    email?: string;
    emailVerified?: boolean;
}

export interface Qualification {
    id: string | number;
    degree: string;
    college: string;
    description?: string;
    start: Date;
    end: Date;
    grade?: string;
}

export interface Experience {
    id: string | number;
    title: string;
    type: string;
    schoolName: string;
    start: Date;
    end?: Date;
    currentlyWorking: Boolean;
    description: string;
    subjects: Subject[];
}

export interface Address {
    id: string | number;
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    pincode?: string | number;
}
