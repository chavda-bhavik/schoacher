export const regularExpressions = {
    email: /\S+@\S+\.\S+/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    // prettier-ignore
    mobile: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
};

export const passwordErrMessage = 'Password must be 8 or more characters long and combination of number and characters';

export const uniqueEmailMsg = 'Please Enter Unique Email';

export const invalidEmail = 'Email is not valid';

export const appRoutes = {
    LOGIN_PAGE: '/login',
    FORGOT_PASSWORD: '/forgotpassword',
    RESET_PASSWORD: '/resetpassword',
    SIGNUP: '/register',
    REGISTER_SCHOOL: '/register/school',
    REGISTER_TEACHER: '/register/teacher',
    LANDING: '/',
};

const constants = {
    teacherProfile: {
        dateFormat: 'MMM-YYYY',
    },
    acceptPDF: 'application/pdf',
    acceptImage: 'image/jpeg,image/jpg,image/png',
};

export default constants;