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
    board: string;
    standard: string;
    subject: string;
}
