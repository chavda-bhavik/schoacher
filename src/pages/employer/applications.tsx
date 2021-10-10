import React, { useEffect, useState } from 'react';
import client from '@/apollo-client';
import { GetServerSidePropsResult } from 'next';

import constants from '@/shared/constants';
import { EmployerTopbar } from '@/components/Topbar';
import { ApplicantCard } from '@/components/employer/applications/ApplicantCard';
import { ApplicationsFilterType, RequirementType, Application } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import { Filter } from '@/components/teacher/Filter';
import { Backdrop } from '@/components/Backdrop';
import { ApplicationFilterForm } from '@/components/employer/applications/ApplicationFilterForm';

import {
    GET_ALL_REQUIREMENTS,
    getAllRequirements,
    GET_APPLICATIONS,
    getApplications,
    getApplicationsVariables,
} from '@/graphql/employer/query';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Wrapper } from '@/components/Wrapper';

interface ApplicationsProps {
    requirements: RequirementType[];
}

const Applications: React.FC<ApplicationsProps> = ({}) => {
    const { loading: requirementsLoading, data: requirementsData } =
        useQuery<getAllRequirements>(GET_ALL_REQUIREMENTS);
    const [getApplications, { loading, data }] = useLazyQuery<
        getApplications,
        getApplicationsVariables
    >(GET_APPLICATIONS);
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const [filters, setFilters] = useState<ApplicationsFilterType>();
    const [applications, setApplications] = useState<Application[]>();
    const [requirements, setRequirements] = useState<RequirementType[]>([]);

    useEffect(() => {
        if (!requirementsLoading && requirementsData) {
            setRequirements(requirementsData.getAllRequirements);
        }
    }, [requirementsData, requirementsLoading]);

    useEffect(() => {
        getApplications();
    }, [getApplications]);

    useEffect(() => {
        if (!loading && data) setApplications(data.applications);
    }, [loading, data]);

    const onFiltersModalShow = () => {
        setShowFiltersModal(true);
    };
    const onFiltersModalClose = () => {
        setShowFiltersModal(false);
    };

    const onFiltersSubmit = (filtersData: ApplicationsFilterType) => {
        getApplications({
            variables: {
                requirementId: Number(filtersData.requirementId),
            },
        });
        setFilters(filtersData);
        setShowFiltersModal(false);
    };

    let filtersContent = [];
    if (filters) {
        if (filters.requirementId)
            filtersContent.push(
                <Filter
                    key="Requiremet"
                    title="Requirement"
                    text={filters.requirementId.toString()}
                />
            );
    }

    return (
        <div className="employer-section">
            <EmployerTopbar />
            <section className="section bg-gray-100">
                <div className="section-header rounded-t-md sticky top-0 z-50 bg-dustWhite">
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
                <div className="border-t border-gray-200">
                    <Wrapper loading={loading}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
                            {applications &&
                                applications.map((application) => (
                                    <ApplicantCard
                                        id={application.id}
                                        key={application.id}
                                        about={application.teacher.about}
                                        headline={application.teacher.headline}
                                        name={`${application.teacher.firstName} ${application.teacher.lastName}`}
                                        photoUrl={application.teacher.photoUrl}
                                    />
                                ))}
                        </div>
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showFiltersModal} onClose={onFiltersModalClose}>
                <ApplicationFilterForm
                    requirements={requirements}
                    onClose={onFiltersModalClose}
                    filters={filters}
                    setFilters={onFiltersSubmit}
                />
            </Backdrop>
        </div>
    );
};

export default Applications;
