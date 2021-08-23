export const regularExpressions = {
    email: /\S+@\S+\.\S+/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

export const passwordErrMessage = 'Password must be 8 or more characters long and combination of number and characters';

export const uniqueEmailMsg = 'Please Enter Unique Email';

export const invalidEmail = 'Email is not valid';