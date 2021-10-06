import React, { useState } from 'react';

import { Filter } from '@/components/teacher/Filter';
import { TeacherTopbar } from '@/components/Topbar';
import { Requirement } from '@/components/teacher/Requirement/index';
import { IconButton } from '@/components/IconButton';
import { Backdrop } from '@/components/Backdrop';
import { TeacherRequirementFilterType } from '@/interfaces';
import { RequirementsFiltersForm } from '@/components/teacher/Requirement/RequirementsFiltersForm';
import { arrayValuesCombiner } from '@/shared/helper';

interface JobsProps {}

const Jobs: React.FC<JobsProps> = ({}) => {
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const [filters, setFilters] = useState<TeacherRequirementFilterType>();

    const onFiltersModalClose = () => {
        setShowFiltersModal(false);
    };

    const onFiltersModalShow = () => {
        setShowFiltersModal(true);
    };

    const onFiltersSubmit = (filtersData: TeacherRequirementFilterType) => {
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
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
                        <Requirement
                            imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            location="Surat, Gujarat, India"
                            employerName="Mauni Ankur School of Science"
                            title="English Teacher Needed for standard 11 &amp; 12"
                            type="Full Time"
                        />
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
