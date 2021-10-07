import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { Filter } from '@/components/teacher/Filter';
import { TeacherTopbar } from '@/components/Topbar';
import { Requirement } from '@/components/teacher/Requirement/index';
import { IconButton } from '@/components/IconButton';
import { Backdrop } from '@/components/Backdrop';
import { RequirementType, TeacherRequirementFilterType } from '@/interfaces';
import { RequirementsFiltersForm } from '@/components/teacher/Requirement/RequirementsFiltersForm';
import { arrayValuesCombiner, kFormatter } from '@/shared/helper';
import { Wrapper } from '@/components/Wrapper';

import {
    SEARCH_REQUIREMENTS,
    searchRequirements,
    searchRequirementsVariables,
} from '@/graphql/teacher/query';

interface JobsProps {}

const Jobs: React.FC<JobsProps> = ({}) => {
    const [searchRequirements, { loading, data }] = useLazyQuery<
        searchRequirements,
        searchRequirementsVariables
    >(SEARCH_REQUIREMENTS);
    const [requirements, setRequirements] = useState<RequirementType[]>();
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const [filters, setFilters] = useState<TeacherRequirementFilterType>();

    useEffect(() => {
        searchRequirements();
    }, [searchRequirements]);

    useEffect(() => {
        if (!loading && data) {
            setRequirements(data.search);
        }
    }, [loading, data]);

    const onFiltersModalClose = () => {
        setShowFiltersModal(false);
    };

    const onFiltersModalShow = () => {
        setShowFiltersModal(true);
    };

    const onFiltersSubmit = (filtersData: TeacherRequirementFilterType) => {
        searchRequirements({
            variables: filtersData,
        });
        setFilters(filtersData);
        setShowFiltersModal(false);
    };

    let filtersContent = [];
    if (filters) {
        if (filters.city || filters.pincode || filters.state)
            filtersContent.push(
                <Filter
                    key="location"
                    title="Location"
                    text={arrayValuesCombiner(filters.city, filters.state, filters.pincode)}
                />
            );
        if (filters.type)
            filtersContent.push(<Filter key="type" title="Type" text={filters.type} />);
        if (filters.expectedSalary)
            filtersContent.push(
                <Filter key="salary" title="Salary" text={filters.expectedSalary.toString()} />
            );
    }

    return (
        <>
            <section className="teacher-section">
                <TeacherTopbar />
                <section className="section">
                    <div className="section-header sticky top-0 z-50 bg-dustWhite">
                        <div className="flex flex-row w-full space-x-2">
                            <IconButton
                                icon="filter"
                                size="sm"
                                variant="bordered"
                                className="flex-shrink-0 self-center"
                                onClick={onFiltersModalShow}
                            />
                            <div className="overflow-x-auto flex-grow flex flex-row space-x-2">
                                {filtersContent}
                            </div>
                        </div>
                    </div>
                    <div className="section-body divide-y-2">
                        <Wrapper loading={loading}>
                            {requirements &&
                                requirements.map((req) => (
                                    <Requirement
                                        id={req.id}
                                        key={req.id}
                                        imageUrl={req.employer?.photoUrl}
                                        location={arrayValuesCombiner(
                                            req.employer?.address?.city,
                                            req.employer?.address?.state
                                        )}
                                        employerName={req.employer.name}
                                        title={req.title}
                                        type={req.type}
                                        salaryRange={
                                            req.salaryFrom && req.salaryUpTo
                                                ? `${kFormatter(req.salaryFrom)}-${kFormatter(
                                                      req.salaryUpTo
                                                  )}`
                                                : null
                                        }
                                    />
                                ))}
                        </Wrapper>
                    </div>
                </section>
            </section>
            <Backdrop show={showFiltersModal} onClose={onFiltersModalClose}>
                <RequirementsFiltersForm filters={filters} setFilters={onFiltersSubmit} />
            </Backdrop>
        </>
    );
};

export default Jobs;
