import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { Subject } from '@/interfaces';

interface MaterialFormProps {
    onClose: () => void;
}

export const MaterialForm: React.FC<MaterialFormProps> = ({ onClose }) => {
    const [materialSubjects, setMaterialSubjects] = useState<Subject[]>(null);
    return (
        <Backdrop show={true} onClose={onClose}>
            <div className="bg-white rounded-md max-h-screen">
                <div className="bg-dustWhite rounded-t-md p-3 border-b-2 sticky top-0 border-gray-900">
                    <p className="text-xl font-medium">Add/Edit Material</p>
                    {/* <Icon icon="close" /> */}
                </div>
                <div className="p-3 overflow-y-scroll modal-body">
                    <form>
                        <Input id="title" name="title" type="text" label="Title" />
                        <Input
                            type="textarea"
                            label="Description"
                            id="edescription"
                            name="edescription"
                            rows={3}
                        />
                        <Subjects
                            title="Subjects"
                            subjects={materialSubjects}
                            setSubjects={(subjects) => setMaterialSubjects(subjects)}
                        />
                        <Button block className="mt-5">
                            Add / Update
                        </Button>
                    </form>
                </div>
                {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
            </div>
        </Backdrop>
    );
};
