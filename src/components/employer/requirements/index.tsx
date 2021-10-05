import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { RequirementForm } from './RequirementForm';
import { Requirements } from './Requirements';
import { RequirementType } from '@/interfaces';

interface RequirementsProps {}

export const Requirement: React.FC<RequirementsProps> = ({}) => {
    const [showRequirementForm, setShowRequirementForm] = useState<boolean>();
    const [selectedRequirement, setSelectedRequirement] = useState<RequirementType>(null);

    const onRequirementClose = () => {
        setShowRequirementForm(false);
        setSelectedRequirement(null);
    };
    const onNewRequirementClick = () => {
        setSelectedRequirement(null);
        setShowRequirementForm(true);
    };

    return (
        <>
            <div className="section">
                <div className="section-header">
                    <p className="title">Requirements</p>
                    <IconButton icon="plus" onClick={onNewRequirementClick} />
                </div>
                <div className="section-body">
                    <Requirements />
                </div>
            </div>
            <Backdrop show={showRequirementForm} onClose={onRequirementClose}>
                <RequirementForm
                    selectedRequirement={selectedRequirement}
                    onClose={onRequirementClose}
                    onSubmit={() => {}}
                />
            </Backdrop>
        </>
    );
};
