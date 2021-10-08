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
    getAllRequirementsVariables,
    GET_APPLICATIONS,
    getApplications,
    getApplicationsVariables,
} from '@/graphql/employer/query';
import { useLazyQuery } from '@apollo/client';
import { Wrapper } from '@/components/Wrapper';

interface ApplicationsProps {
    requirements: RequirementType[];
}

const Applications: React.FC<ApplicationsProps> = ({ requirements }) => {
    const [getApplications, { loading, data }] = useLazyQuery<
        getApplications,
        getApplicationsVariables
    >(GET_APPLICATIONS);
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const [filters, setFilters] = useState<ApplicationsFilterType>();
    const [applications, setApplications] = useState<Application[]>();

    useEffect(() => {
        getApplications({
            variables: {
                employerId: constants.employerId,
            },
        });
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
                employerId: Number(constants.employerId),
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
                <div className="border-t border-gray-200">
                    <div className="grid grid-cols-4 gap-2 p-4">
                        <Wrapper loading={loading}>
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
                        </Wrapper>
                    </div>
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

export async function getServerSideProps(): Promise<GetServerSidePropsResult<ApplicationsProps>> {
    let requirements = [];
    try {
        let { data, error } = await client.query<getAllRequirements, getAllRequirementsVariables>({
            query: GET_ALL_REQUIREMENTS,
            variables: {
                employerId: constants.employerId,
            },
        });
        if (data && !error) requirements = data.getAllRequirements;
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            requirements,
        },
    };
}

export default Applications;
