import React, { useState } from 'react';

import { Subject } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Icon } from '@/static/Icons';
import { Button } from '../Button';
import constants from '@/static/constants';
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
    const [activeSubjectKey, setActiveSubjectKey] = useState<number>(null);
    const [error, setError] = useState<string>(null);

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
            <div className="flex flex-col md:flex-row gap-2">
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
                    {constants.boards.map((board, i) => (
                        <option key={i} value={board.value}>
                            {board.label}
                        </option>
                    ))}
                </Input>
                <div className="flex flex-row gap-2 py-1">
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
                        {constants.standards.map((std, i) => (
                            <option key={i} value={std.value}>
                                {std.label}
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
                        {constants.subjets.map((sbj, i) => (
                            <option key={i} value={sbj.value}>
                                {sbj.label}
                            </option>
                        ))}
                    </Input>
                    <div className="flex flex-row gap-1 items-center">
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
                                    {sub.board} {sub.standard} {sub.subject}
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
