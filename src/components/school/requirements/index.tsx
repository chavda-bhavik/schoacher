import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { RequirementForm } from './RequirementForm';
import { Requirement } from './RequirementItem';

interface RequirementsProps {}

export const Requirements: React.FC<RequirementsProps> = ({}) => {
    const [showRequirementForm, setShowRequirementForm] = useState<boolean>();

    const onRequirementClose = () => {
        setShowRequirementForm(false);
    };
    const onRequirementClick = () => {
        setShowRequirementForm(true);
    };
    const onNewRequirementClick = () => {
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
                    <Requirement onClick={onRequirementClick} />
                </div>
            </div>
            <Backdrop show={showRequirementForm} onClose={onRequirementClose}>
                <RequirementForm onClose={onRequirementClose} />
            </Backdrop>
        </>
    );
};
