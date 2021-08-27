export const regularExpressions = {
    email: /\S+@\S+\.\S+/,
    // prettier-ignore
    mobile: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
};

const constants = {
    teacherProfile: {
        dateFormat: 'MMM-YYYY',
    },
    acceptPDF: 'application/pdf',
    acceptImage: 'image/jpeg,image/jpg,image/png',
};

export default constants;
