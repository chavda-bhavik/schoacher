interface SubStdBoardState {
    subjects: Record<number, string>;
    boards: Record<number, string>;
    standards: Record<number, string>;
}
interface FieldError {
    field: any;
    message: string;
}

interface ToastType {
    type?: 'danger' | 'base' | 'info' | 'error' | 'warning' | 'success',
    message: string,
    duration?: number,
}

interface LoginFormType {
    email: string;
    password: string;
}

interface LocalStorageDecoded {
    loggedIn: boolean;
    type: 'teacher' | 'employer';
}
interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
    requireAuth?: Boolean;
    authFor?: 'teacher' | 'employer';
}

interface TeacherSignupFormProps {

}

interface EmployerSignupFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}