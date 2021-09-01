import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DefaultEditor } from 'react-simple-wysiwyg';
import DatePicker from 'react-datepicker';

import { Button } from '@/components/Button';
import Card from '@/components/Card';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { Subject } from '@/interfaces';
import { RequirementType } from '@/interfaces/teacher';

interface RequirementFormProps {
    onClose: () => void;
}

export const RequirementForm: React.FC<RequirementFormProps> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RequirementType>({
        defaultValues: {
            description: null,
        },
    });
    const [subjects, setSubjects] = useState<Subject[]>([]);

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">Edit/Add Requirement</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <Card.Body>
                <Input
                    register={register('title', {
                        required: 'Title is required',
                    })}
                    id="title"
                    name="title"
                    type="text"
                    isInvalid={!!errors.title}
                    error={errors.title?.message}
                    label="Title"
                    placeholder="Title"
                    row={true}
                />
                <Input
                    type="select"
                    id="type"
                    name="type"
                    register={register('type')}
                    label="Requirement Type"
                >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </Input>
                <Input
                    type="text"
                    id="qualification"
                    name="qualification"
                    register={register('qualification')}
                    label="Qualification"
                    placeholder="Qualification"
                />
                <div className="grid grid-cols-2 space-x-2">
                    <div>
                        <label className="label">Start Time</label>
                        <Controller
                            name="time.startTime"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <DatePicker
                                    selected={value}
                                    onChange={(d) => onChange(d)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Start Time"
                                    dateFormat="h:mm aa"
                                    className="input"
                                    placeholderText="Start Time"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <label className="label">End Time</label>
                        <Controller
                            name="time.endTime"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <DatePicker
                                    selected={value}
                                    onChange={(d) => onChange(d)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="End Time"
                                    dateFormat="h:mm aa"
                                    className="input"
                                    placeholderText="End Time"
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 space-x-2">
                    <Input
                        type="number"
                        id="start"
                        name="start"
                        register={register('salaryRange.start')}
                        label="From"
                        placeholder="XXX,XXX"
                    />
                    <Input
                        type="number"
                        id="end"
                        name="end"
                        register={register('salaryRange.end')}
                        label="Upto"
                        placeholder="XXX,XXX"
                    />
                </div>

                <Subjects subjects={subjects} setSubjects={setSubjects} />

                <label className="label">Description</label>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <DefaultEditor
                            value={field.value}
                            placeholder="Write about requirement here..."
                            onChange={field.onChange}
                            className="unreset"
                        />
                    )}
                />
            </Card.Body>
            <Card.Footer className="flex flex-row justify-end space-x-2">
                <Button type="button" variant="secondary">
                    Cancel
                </Button>
                <Button type="submit" variant="success">
                    Submit
                </Button>
            </Card.Footer>
        </Card>
    );
};
