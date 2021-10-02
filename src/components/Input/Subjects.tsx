import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { SubjectFormType } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Icon } from '@/shared/Icons';
import { Button } from '../Button';

// graphql
import { getSubStdBoards } from '@/graphql/shared/query/__generated__/getSubStdBoards';
import { GET_SUB_STD_BOARDS } from '@/graphql/shared/query/SubStdBoards';
import { convertArrayToObj } from '@/shared/helper';

interface SubjectsProps {
    title?: string;
    subjects: SubjectFormType[];
    setSubjects: (subjects: SubjectFormType[]) => void;
    limit?: number;
    setSubjectsModified?: (status: boolean) => void;
}

export const Subjects: React.FC<SubjectsProps> = ({
    title = 'Subjects',
    subjects,
    setSubjects,
    limit,
    setSubjectsModified,
}) => {
    const { loading, data } = useQuery<getSubStdBoards>(GET_SUB_STD_BOARDS);
    const [activeSubjectKey, setActiveSubjectKey] = useState<number>(null);
    const [error, setError] = useState<string>(null);
    const [subStdBoardObj, setSubStdBoardObj] = useState<SubStdBoardState>({
        boards: [],
        standards: [],
        subjects: [],
    });

    useEffect(() => {
        if (!loading && data) {
            let newSubStdBoards: SubStdBoardState = {
                subjects: {},
                boards: {},
                standards: {},
            };
            newSubStdBoards.subjects = convertArrayToObj(data.subjects, 'id', 'value');
            newSubStdBoards.boards = convertArrayToObj(data.boards, 'id', 'value');
            newSubStdBoards.standards = convertArrayToObj(data.standards, 'id', 'value');
            setSubStdBoardObj(newSubStdBoards);
        }
    }, [data, loading]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubjectFormType>({
        defaultValues: {
            boardId: '',
            subjectId: '',
            standardId: '',
        },
    });

    const addSubject = () => {
        handleSubmit((data) => {
            let newSubjects = subjects ? [...subjects] : [];
            let subject = newSubjects.find(
                (sub, i) => JSON.stringify(sub) === JSON.stringify(data) && i !== activeSubjectKey
            );
            if (subject) setError('Subject of same type is already added.');
            else {
                if (setSubjectsModified) setSubjectsModified(true);
                if (newSubjects.length + 1 === activeSubjectKey)
                    newSubjects.push({
                        boardId: Number(data.boardId),
                        subjectId: Number(data.subjectId),
                        standardId: Number(data.standardId),
                    });
                else
                    newSubjects[activeSubjectKey] = {
                        boardId: Number(data.boardId),
                        subjectId: Number(data.subjectId),
                        standardId: Number(data.standardId),
                    };
                setSubjects(newSubjects);
                setActiveSubjectKey(null);
                setError(null);
            }
        })();
    };

    const deleteSubject = () => {
        if (!subjects) {
            setActiveSubjectKey(null);
            setError(null);
            return;
        }
        if (setSubjectsModified) setSubjectsModified(true);
        let newSubjects = [...subjects];
        newSubjects = newSubjects.filter((_, i) => i !== activeSubjectKey);
        setSubjects(newSubjects);
        setActiveSubjectKey(null);
        setError(null);
    };

    let SubjectFormContent = () => (
        <>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <Input
                    type="select"
                    row={true}
                    className="overflow-ellipsis overflow-hidden"
                    id="boardId"
                    name="boardId"
                    register={register('boardId', {
                        required: 'Please select Board',
                    })}
                    isInvalid={!!errors.boardId}
                    error={errors.boardId?.message}
                >
                    <option disabled value=""></option>
                    {!loading &&
                        data.boards.map((board, i) => (
                            <option key={i} value={board.id}>
                                {board.label}
                            </option>
                        ))}
                </Input>
                <div className="flex flex-row space-x-2">
                    <Input
                        row={true}
                        type="select"
                        id="standardId"
                        name="standardId"
                        className="overflow-ellipsis overflow-hidden"
                        register={register('standardId', {
                            required: 'Please select standardd',
                        })}
                        isInvalid={!!errors.standardId}
                        error={errors.standardId?.message}
                    >
                        <option disabled value=""></option>
                        {!loading &&
                            data.standards.map((standard, i) => (
                                <option key={i} value={standard.id}>
                                    {standard.label}
                                </option>
                            ))}
                    </Input>
                    <Input
                        row={true}
                        type="select"
                        id="subjectId"
                        name="subjectId"
                        className="overflow-ellipsis flex-grow overflow-hidden"
                        register={register('subjectId', {
                            required: 'Please select subject',
                        })}
                        isInvalid={!!errors.subjectId}
                        error={errors.subjectId?.message}
                    >
                        <option disabled value=""></option>
                        {!loading &&
                            data.subjects.map((subject, i) => (
                                <option key={i} value={subject.id}>
                                    {subject.label}
                                </option>
                            ))}
                    </Input>
                    <div className="flex flex-row space-x-1 items-center">
                        <IconButton variant="primary" icon="check" onClick={addSubject} />
                        <IconButton variant="danger" icon="trash" onClick={deleteSubject} />
                    </div>
                </div>
            </div>
            {error && <p className="input-error mt-1">{error}</p>}
        </>
    );

    let button = (
        <Button
            variant="secondary"
            onClick={() => setActiveSubjectKey(subjects ? subjects.length + 1 : 1)}
            size="sm"
            className="mt-1"
        >
            Add
        </Button>
    );
    if (limit && subjects && limit <= subjects.length) button = null;

    return (
        <div className="mt-3">
            <label className="label">{title}</label>
            <ul className="divide-y-2 divide-gray-400">
                {Array.isArray(subjects) &&
                    subjects.map((sub, i) =>
                        activeSubjectKey === i ? (
                            <SubjectFormContent key={i} />
                        ) : (
                            <li
                                className="flex justify-between p-2 hover:bg-gray-300 transition-colors rounded-sm cursor-pointer"
                                key={i}
                                onClick={() => setActiveSubjectKey(i)}
                            >
                                <span>
                                    {subStdBoardObj.boards[Number(sub.boardId)]}{' '}
                                    {subStdBoardObj.standards[Number(sub.standardId)]}{' '}
                                    {subStdBoardObj.subjects[Number(sub.subjectId)]}
                                </span>
                                <Icon icon="pencil" size="xs" />
                            </li>
                        )
                    )}
            </ul>

            {(subjects && subjects.length + 1 === activeSubjectKey) ||
            (!subjects && activeSubjectKey === 1) ? (
                <SubjectFormContent />
            ) : (
                button
            )}
        </div>
    );
};
