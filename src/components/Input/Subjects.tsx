import React, { useState } from 'react';

import { Subject } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';

interface SubjectsProps {
    title?: string;
    subjects: Subject[];
    setSubjects: (subjects: Subject[]) => void;
}

export const Subjects: React.FC<SubjectsProps> = ({ title, subjects, setSubjects }) => {
    const [activeSubjectKey, setActiveSubjectKey] = useState<number>(null);
    const [error, setError] = useState<string>(null);

    const { register, handleSubmit } = useForm<Subject>();

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
                    className="overflow-ellipsis overflow-hidden"
                    id="board"
                    name="board"
                    register={register('board')}
                >
                    <option value="GSEB">(GSEB) Gujarat Secondary Education Board</option>
                    <option value="GHEB">(GHEB) Gujarat Higher Secondary Education Board</option>
                </Input>
                <div className="flex flex-row gap-2">
                    <Input
                        type="select"
                        id="standard"
                        name="standard"
                        className="overflow-ellipsis overflow-hidden"
                        register={register('standard')}
                    >
                        <option value="Nursery">Nursery</option>
                        <option value="SKG">SKG</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Input>
                    <Input
                        type="select"
                        id="subject"
                        name="subject"
                        className="overflow-ellipsis flex-grow overflow-hidden"
                        register={register('subject')}
                    >
                        <option value="Gujarati">Gujarati</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Sanskrit">Sanskrit</option>
                    </Input>
                    <div className="flex flex-row gap-1">
                        <IconButton variant="primary" icon="check" onClick={addSubject} />
                        <IconButton variant="danger" icon="close" onClick={deleteSubject} />
                    </div>
                </div>
            </div>
            {error && <p className="input-error mt-1">{error}</p>}
        </>
    );
    return (
        <div className="mt-3">
            <label className="label">Subjects</label>
            <ul className="list-disc list-inside">
                {Array.isArray(subjects) &&
                    subjects.map((sub, i) =>
                        activeSubjectKey === i ? (
                            <SubjectFormContent key={i} />
                        ) : (
                            <li
                                className="cursor-pointer my-1"
                                key={i}
                                onClick={() => setActiveSubjectKey(i)}
                            >
                                {sub.board} {sub.standard} {sub.subject}
                            </li>
                        )
                    )}
            </ul>

            {(subjects && subjects.length + 1 === activeSubjectKey) ||
            (!subjects && activeSubjectKey === 1) ? (
                <SubjectFormContent />
            ) : (
                <IconButton
                    icon="plus"
                    onClick={() => setActiveSubjectKey(subjects ? subjects.length + 1 : 1)}
                />
            )}
        </div>
    );
};
