import React, { useState } from 'react';
import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Subject } from '@/interfaces';

interface ExperienceFormProps {
    onClose: () => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ onClose }) => {
    const [date, setDate] = useState<Date>();
    const [experienceSubjects, setExperienceSubjects] = useState<Subject[]>(null);

    return (
        <Backdrop show={true} onClose={onClose}>
            <div className="bg-white rounded-md max-h-screen">
                <div className="bg-dustWhite rounded-t-md p-3 border-b-2 sticky top-0 border-gray-900">
                    <p className="text-xl font-medium">Add/Edit Expeience</p>
                    {/* <Icon icon="close" /> */}
                </div>
                <div className="p-3 overflow-y-scroll modal-body">
                    <form>
                        <Input id="title" name="title" type="text" label="Title" />
                        <Input type="select" id="type" name="type" label="Type">
                            <option value="school">School</option>
                            <option value="tution">Tution</option>
                            <option value="home-batch">Home Batch</option>
                        </Input>
                        <Input
                            id="schoolName"
                            name="schoolName"
                            type="text"
                            label="School/Tution Name"
                        />
                        <Input id="location" name="location" type="text" label="Location" />
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <div>
                                <label className="label" htmlFor="estart">
                                    Start
                                </label>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => !Array.isArray(date) && setDate(date)}
                                    dateFormat="MM/yyyy"
                                    className="input"
                                    showMonthYearPicker
                                    id="estart"
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="end">
                                    End
                                </label>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => !Array.isArray(date) && setDate(date)}
                                    dateFormat="MM/yyyy"
                                    className="input"
                                    showMonthYearPicker
                                    id="end"
                                />
                            </div>
                        </div>
                        <Input
                            type="checkbox"
                            id="currentlyWorking"
                            name="currentlyWorking"
                            label="Currently Working?"
                        />
                        <Input
                            type="textarea"
                            label="Description"
                            id="edescription"
                            name="edescription"
                            rows={3}
                        />
                        <Subjects
                            title="Subjects"
                            subjects={experienceSubjects}
                            setSubjects={(subjects) => setExperienceSubjects(subjects)}
                        />
                        <Button block className="mt-5">
                            Update
                        </Button>
                    </form>
                </div>
                {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
            </div>
        </Backdrop>
    );
};
