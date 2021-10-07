import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TeacherRequirementFilterType } from '@/interfaces';
import { removeEmptyUndefiendValues } from '@/shared/helper';
import constants from '@/shared/constants';

interface RequirementsFiltersFormProps {
    filters: TeacherRequirementFilterType;
    setFilters: (data: TeacherRequirementFilterType) => void;
}

export const RequirementsFiltersForm: React.FC<RequirementsFiltersFormProps> = ({
    filters,
    setFilters,
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
                <p className="title">Apply Filters</p>
            </Card.Header>
            <form onSubmit={handleSubmit(applyFilters)}>
                <Card.Body>
                    <Input
                        id="city"
                        name="city"
                        type="text"
                        row
                        label="City"
                        register={register('city')}
                    />
                    <Input
                        id="state"
                        name="state"
                        type="text"
                        row
                        label="State"
                        register={register('state')}
                    />
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
