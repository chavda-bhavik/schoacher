import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { RequirementForm } from './RequirementForm';
import { Requirements } from './Requirements';

interface RequirementsProps {}

export const Requirement: React.FC<RequirementsProps> = ({}) => {
    const [showRequirementForm, setShowRequirementForm] = useState<boolean>();
    const [requirementId, setRequirementId] = useState<number>();

    const onRequirementClose = () => {
        setRequirementId(null);
        setShowRequirementForm(false);
    };
    const onNewRequirementClick = () => {
        setRequirementId(null);
        setShowRequirementForm(true);
    };
    const onRequirementClick = (id: number) => {
        setRequirementId(id);
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
                    <Requirements onClick={onRequirementClick} />
                </div>
            </div>
            <Backdrop show={showRequirementForm} onClose={onRequirementClose}>
                <RequirementForm onClose={onRequirementClose} requirementId={requirementId} />
            </Backdrop>
        </>
    );
};
