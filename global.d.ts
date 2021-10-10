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