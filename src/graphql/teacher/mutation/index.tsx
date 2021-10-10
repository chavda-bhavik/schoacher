// qualification
export { UPDATE_QUALIFICATION } from './updateQualification';
export { ADD_QUALIFICATION } from './addQualification';
export { DELETE_QUALIFICATION } from './deleteQualification';

// profile
export { UPDATE_TEACHER_INFO } from './updateTeacherInfo';

// experience
export { UPDATE_EXPERIENCE } from './updateExperience';
export { ADD_EXPERIENCE } from './addExperience';
export { DELETE_EXPERIENCE } from './deleteExperience';

// material
export { ADD_MATERIAL } from './addMaterial';
export { UPDATE_MATERIAL } from './updateMaterial';
export { DELETE_MATERIAL } from './deleteMaterial';

export { TOGGLE_APPLICATION } from './toggleApplication';
export { REGISTER_TEACHER } from './registerTeacher';

// ## types
// qualification
export type {
    updateQualification,
    updateQualificationVariables,
} from './__generated__/updateQualification';
export type { addQualification, addQualificationVariables } from './__generated__/addQualification';
export type {
    deleteQualification,
    deleteQualificationVariables,
} from './__generated__/deleteQualification';

// profile
export type { updateTeacherInfo } from './__generated__/updateTeacherInfo';

// experience
export type { addExperience, addExperienceVariables } from './__generated__/addExperience';
export type { updateExperience, updateExperienceVariables } from './__generated__/updateExperience';
export type { deleteExperience, deleteExperienceVariables } from './__generated__/deleteExperience';

// material
export type { addMaterial, addMaterialVariables } from './__generated__/addMaterial';
export type { updateMaterial, updateMaterialVariables } from './__generated__/updateMaterial';
export type { deleteMaterial, deleteMaterialVariables } from './__generated__/deleteMaterial';

export type {
    toggleApplicaiton,
    toggleApplicaitonVariables,
} from './__generated__/toggleApplicaiton';
export type { registerTeacher, registerTeacherVariables } from './__generated__/registerTeacher';
