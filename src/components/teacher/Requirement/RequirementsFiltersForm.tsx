import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { TeacherRequirementFilterType, Subject } from '@/interfaces';
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
        defaultValues: {
            type: '',
        },
    });
    const [filterSubjects, setFilterSubjects] = useState<Subject[]>();

    useEffect(() => {
        if (filters) {
            let filterData = {
                ...filters,
            };
            delete filterData.subjects;
            reset(filterData);
            if (filters.subjects && filters.subjects.length > 0)
                setFilterSubjects(filters.subjects);
        }
    }, [filters, reset]);

    const clearFilters = () => {
        reset({
            type: '',
        });
        setFilterSubjects([]);
    };

    const applyFilters = (filtersData) => {
        let finalData: TeacherRequirementFilterType = removeEmptyUndefiendValues(filtersData);
        if (filterSubjects && filterSubjects.length > 0) finalData.subjects = filterSubjects;
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
                        id="type"
                        name="type"
                        type="select"
                        label="Type"
                        register={register('type')}
                    >
                        <option value=""></option>
                        {constants.experienceRequirementType.map((type, i) => (
                            <option key={i} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </Input>
                    <Subjects
                        limit={1}
                        subjects={filterSubjects}
                        setSubjects={setFilterSubjects}
                        title="Subject"
                    />
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
