import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ApplicationsFilterType, RequirementType } from '@/interfaces';
import { removeEmptyUndefiendValues } from '@/shared/helper';
import constants from '@/shared/constants';
import { IconButton } from '@/components/IconButton';

interface RequirementsFiltersFormProps {
    filters: ApplicationsFilterType;
    setFilters: (data: ApplicationsFilterType) => void;
    requirements?: Partial<RequirementType>[];
    onClose: () => void;
}

export const ApplicationFilterForm: React.FC<RequirementsFiltersFormProps> = ({
    filters,
    setFilters,
    onClose,
    requirements,
}) => {
    const { register, reset, handleSubmit } = useForm<ApplicationsFilterType>();

    useEffect(() => {
        if (filters) {
            let filterData = {
                ...filters,
            };
            reset(filterData);
        }
    }, [filters, reset]);

    const clearFilters = () => {
        reset();
        setFilters({});
    };

    const applyFilters = (filtersData) => {
        let finalData: ApplicationsFilterType = removeEmptyUndefiendValues(filtersData);
        setFilters(finalData);
    };

    return (
        <Card asModal>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">Apply Filters</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(applyFilters)}>
                <Card.Body>
                    <Input
                        row={true}
                        type="select"
                        id="type"
                        name="type"
                        register={register('requirementId')}
                        label="Requirement"
                    >
                        <option value={null}></option>
                        {requirements &&
                            requirements.map((req, i) => (
                                <option key={req.id} value={req.id}>
                                    {req.title}
                                </option>
                            ))}
                    </Input>
                </Card.Body>
                <Card.Footer className="flex flex-row items-end space-x-2">
                    <Button variant="primary" size="sm" type="reset" onClick={clearFilters}>
                        Clear Filters
                    </Button>
                    <Button variant="success" size="sm" type="submit">
                        Apply Filters
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
