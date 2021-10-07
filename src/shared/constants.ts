export const regularExpressions = {
    email: /\S+@\S+\.\S+/,
    // prettier-ignore
    mobile: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
};

const constants = {
    teacherProfile: {
        dateFormat: 'MMMM YYYY',
    },
    employerId: 2,
    requirementTimeFormat: 'hh:mm A',
    timeFormat: 'hh:mm A',
    acceptPDF: 'application/pdf',
    acceptImage: 'image/jpeg,image/jpg,image/png',
    requirementTypes: [
        { label: 'Part Time', value: 'PART_TIME' },
        { label: 'Full Time', value: 'FULL_TIME' },
    ],
    experienceRequirementType: [
        { label: 'School', value: 'School' },
        { label: 'Tution', value: 'Tution' },
        { label: 'Home Batch', value: 'HomeBatch' },
    ],
};

export default constants;
