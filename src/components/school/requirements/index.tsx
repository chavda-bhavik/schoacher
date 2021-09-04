import React, { useEffect, useState } from 'react';

import SchoolData from '../../../static/school-profile-data.json';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { RequirementForm } from './RequirementForm';
import { Requirement } from './RequirementItem';
import { RequirementType } from '@/interfaces';

interface RequirementsProps {}

export const Requirements: React.FC<RequirementsProps> = ({}) => {
    const [showRequirementForm, setShowRequirementForm] = useState<boolean>();
    const [selectedRequirement, setSelectedRequirement] = useState<RequirementType>(null);
    const [requirements, setRequirements] = useState<RequirementType[]>([]);

    useEffect(() => {
        // @ts-ignore
        setRequirements(SchoolData?.requirements);
    }, []);

    const onRequirementClose = () => {
        setShowRequirementForm(false);
        setSelectedRequirement(null);
    };
    const onRequirementClick = (data: RequirementType) => {
        setSelectedRequirement(data);
        setShowRequirementForm(true);
    };
    const onNewRequirementClick = () => {
        setSelectedRequirement(null);
        setShowRequirementForm(true);
    };
    const onRequirementSubmit = (data: RequirementType) => {
        let newRequirements = [...requirements];
        if (selectedRequirement) {
            // edit
            newRequirements = newRequirements.map((requirement) => {
                if (requirement.id === requirement.id) return { ...data };
                else return { ...requirement };
            });
        } else {
            newRequirements.push({ ...data, id: newRequirements.length + 5 });
        }
        setRequirements(newRequirements);
        setShowRequirementForm(false);
        setSelectedRequirement(null);
    };

    return (
        <>
            <div className="section">
                <div className="section-header">
                    <p className="title">Requirements</p>
                    <IconButton icon="plus" onClick={onNewRequirementClick} />
                </div>
                <div className="section-body">
                    {requirements.map((requirement) => (
                        <Requirement
                            requirement={requirement}
                            onClick={onRequirementClick}
                            key={requirement.id}
                        />
                    ))}
                </div>
            </div>
            <Backdrop show={showRequirementForm} onClose={onRequirementClose}>
                <RequirementForm
                    selectedRequirement={selectedRequirement}
                    onClose={onRequirementClose}
                    onSubmit={onRequirementSubmit}
                />
            </Backdrop>
        </>
    );
};
