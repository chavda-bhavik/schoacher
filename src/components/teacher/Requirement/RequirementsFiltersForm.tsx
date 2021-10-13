import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TeacherRequirementFilterType } from '@/interfaces';
import { removeEmptyUndefiendValues } from '@/shared/helper';
import { IconButton } from '@/components/IconButton';
import constants from '@/shared/constants';

interface RequirementsFiltersFormProps {
    filters: TeacherRequirementFilterType;
    onClose: () => void;
    setFilters: (data: TeacherRequirementFilterType) => void;
}

export const RequirementsFiltersForm: React.FC<RequirementsFiltersFormProps> = ({
    filters,
    setFilters,
    onClose,
}) => {
    const { register, reset, handleSubmit } = useForm<TeacherRequirementFilterType>({
        defaultValues: {},
    });

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
    };

    const applyFilters = (filtersData) => {
        let finalData: TeacherRequirementFilterType = removeEmptyUndefiendValues(filtersData);
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
                        id="city"
                        name="city"
                        type="select"
                        row
                        label="City"
                        register={register('city')}
                    >
                        <option value={null}></option>
                        {constants.cities.map((city, i) => (
                            <option value={city} key={i}>
                                {city}
                            </option>
                        ))}
                    </Input>
                    <Input
                        id="state"
                        name="state"
                        type="select"
                        row
                        label="State"
                        register={register('state')}
                    >
                        <option value={null}></option>
                        {constants.states.map((state, i) => (
                            <option value={state} key={i}>
                                {state}
                            </option>
                        ))}
                    </Input>
                    <Input
                        id="pincode"
                        name="pincode"
                        type="number"
                        row
                        label="Pincode"
                        register={register('pincode')}
                    />
                    <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        type="number"
                        label={`Expected Salary`}
                        register={register('expectedSalary')}
                    />
                    <Input
                        type="select"
                        id="type"
                        name="type"
                        register={register('type')}
                        label="Requirement Type"
                    >
                        <option value={null}></option>
                        {constants.requirementTypes.map((type, i) => (
                            <option key={i} value={type.value}>
                                {type.label}
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
