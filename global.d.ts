interface SubStdBoardState {
    subjects: Record<number, string>;
    boards: Record<number, string>;
    standards: Record<number, string>;
}
interface FieldError {
    field: any;
    message: string;
}
