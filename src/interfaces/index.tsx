export type IconsType = 'check' | 'logIn';
export type IconsSizesType = 'xs' | 'sm' | 'md' | 'lg';

export type TeacherRegisterFieldTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type SchoolRegisterFieldTypes = {
    schoolName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type LoginFieldTypes = {
    email: string;
    password: string;
};
