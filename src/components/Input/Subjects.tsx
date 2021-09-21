import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { Subject } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Icon } from '@/static/Icons';
import { Button } from '../Button';

// graphql
import { getSubStdBoards } from '@/graphql/shared/query/__generated__/getSubStdBoards';
import { GET_SUB_STD_BOARDS } from '@/graphql/shared/query/SubStdBoards';
import { convertArrayToObj } from '@/static/helper';

interface SubjectsProps {
    title?: string;
    subjects: Subject[];
    setSubjects: (subjects: Subject[]) => void;
    limit?: number;
}

export const Subjects: React.FC<SubjectsProps> = ({
    title = 'Subjects',
    subjects,
    setSubjects,
    limit,
}) => {
    const { loading, data } = useQuery<getSubStdBoards>(GET_SUB_STD_BOARDS);
    const [activeSubjectKey, setActiveSubjectKey] = useState<number>(null);
    const [error, setError] = useState<string>(null);
    const [subStdBoardObj, setSubStdBoardObj] = useState<SubStdBoardState>();

    useEffect(() => {
        let newSubStdBoards: SubStdBoardState = {
            subjects: {},
            boards: {},
            standards: {},
        };
        newSubStdBoards.subjects = convertArrayToObj(data.subjects, 'id', 'value');
        newSubStdBoards.boards = convertArrayToObj(data.boards, 'id', 'value');
        newSubStdBoards.standards = convertArrayToObj(data.standards, 'id', 'value');
        setSubStdBoardObj(newSubStdBoards);
    }, [data]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Subject>({
        defaultValues: {
            board: '',
            subject: '',
            standard: '',
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
                if (newSubjects.length + 1 === activeSubjectKey) newSubjects.push(data);
                else newSubjects[activeSubjectKey] = data;
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
                    id="board"
                    name="board"
                    register={register('board', {
                        required: 'Please select Board',
                    })}
                    isInvalid={!!errors.board}
                    error={errors.board?.message}
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
                        id="standard"
                        name="standard"
                        className="overflow-ellipsis overflow-hidden"
                        register={register('standard', {
                            required: 'Please select standardd',
                        })}
                        isInvalid={!!errors.standard}
                        error={errors.standard?.message}
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
                        id="subject"
                        name="subject"
                        className="overflow-ellipsis flex-grow overflow-hidden"
                        register={register('subject', {
                            required: 'Please select subject',
                        })}
                        isInvalid={!!errors.subject}
                        error={errors.subject?.message}
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
                                    {subStdBoardObj.boards[Number(sub.board)]}{' '}
                                    {subStdBoardObj.standards[Number(sub.standard)]}{' '}
                                    {subStdBoardObj.subjects[Number(sub.subject)]}
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
