export const regularExpressions = {
    email: /\S+@\S+\.\S+/,
    // prettier-ignore
    mobile: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
};

const constants = {
    teacherProfile: {
        dateFormat: 'MMMM YYYY',
    },
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
    boards: [
        { label: '(GSEB) Gujarat Secondary & Higher Secondary Education Board', value: 'GSEB' },
        { label: '(NCERT) National Council of Educational Research and Training', value: 'NCERT' },
    ],
    standards: [
        { label: 'Nursery', value: 'Nursery' },
        { label: 'Junior Kinder Garden', value: 'JKG' },
        { label: 'Senior Kinder Garden', value: 'SKG' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
    ],
    subjets: [
        { label: 'Gujarati', value: 'Gujarati' },
        { label: 'English', value: 'English' },
        { label: 'Sanskrit', value: 'Sanskrit' },
        { label: 'Drawing', value: 'Drawing' },
        { label: 'Science', value: 'Science' },
        { label: 'Maths', value: 'Maths' },
        { label: 'Computer', value: 'Computer' },
        { label: 'Accounting', value: 'Accounting' },
        { label: 'Statistics', value: 'Statistics' },
        { label: 'Business Administration', value: 'BA' },
        { label: 'Economics', value: 'Eco' },
        { label: 'Physical Traning', value: 'PT' },
        { label: 'Extra Ciricular', value: 'EC' },
        { label: 'All', value: 'All' },
    ],
};

export default constants;
