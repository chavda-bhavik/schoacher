import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import client from '@/apollo-client';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useMutation } from '@apollo/client';

import { TeacherTopbar } from '@/components/Topbar';
import { arrayValuesCombiner, combineAddress, kFormatter } from '@/shared/helper';
import { RequirementType } from '@/interfaces';
import { Button } from '@/components/Button';
import List from '@/components/List';
import constants from '@/shared/constants';

// graphql
import {
    getRequirementInfo,
    getRequirementInfoVariables,
    GET_REQUIREMENT_INFO,
} from '@/graphql/teacher/query';
import {
    TOGGLE_APPLICATION,
    toggleApplicaiton,
    toggleApplicaitonVariables,
} from '@/graphql/teacher/mutation';
import toast from '@/shared/toast';

interface JobProfileProps {
    requirement: RequirementType;
}

const JobProfile: FunctionComponent<JobProfileProps> = ({ requirement }) => {
    const [toggleApplicationMutation, { data, loading }] = useMutation<
        toggleApplicaiton,
        toggleApplicaitonVariables
    >(TOGGLE_APPLICATION);
    const [applied, setApplied] = useState(false);
    let employer = requirement.employer;

    useEffect(() => {
        setApplied(requirement.applied);
    }, [requirement.applied]);

    useEffect(() => {
        if (!loading && data) setApplied(data.toggleApplication);
    }, [loading, data]);

    const toggleApplication = () => {
        toggleApplicationMutation({
            variables: {
                requirementId: requirement.id,
            },
        });
        if (applied) toast.info('Application discarded');
        else toast.success('Applied to requirement');
    };

    return (
        <section className="teacher-section">
            <TeacherTopbar />

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {requirement.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Job Information</p>
                </div>
                <div className="border-t border-gray-200">
                    <List>
                        <List.Item title="Type">{requirement.type}</List.Item>
                        {requirement.salaryFrom && requirement.salaryUpTo && (
                            <List.Item title="Time">
                                {`${dayjs(requirement.salaryUpTo).format(
                                    constants.timeFormat
                                )} - ${dayjs(requirement.endTime).format(constants.timeFormat)}`}
                            </List.Item>
                        )}

                        {requirement.qualification && (
                            <List.Item title="Minimum Qualification">
                                {requirement.qualification}
                            </List.Item>
                        )}

                        {requirement.salaryFrom && requirement.salaryUpTo && (
                            <List.Item title="Salary Range">
                                {kFormatter(requirement.salaryFrom)} -{' '}
                                {kFormatter(requirement.salaryUpTo)}
                            </List.Item>
                        )}

                        <List.Item title="Subjects To Be Taught">
                            <ul className="list-inside list-disc">
                                {requirement?.subjects &&
                                    requirement?.subjects.map((subject) => (
                                        <li
                                            key={subject.id}
                                        >{`${subject.board.value} ${subject.standard.value} ${subject.subject.value}`}</li>
                                    ))}
                            </ul>
                        </List.Item>

                        {requirement.description && (
                            <List.Item title="Description">
                                <div
                                    className="unreset"
                                    dangerouslySetInnerHTML={{
                                        __html: requirement.description,
                                    }}
                                />
                            </List.Item>
                        )}

                        <List.Item title={'Interested?'}>
                            <Button
                                variant={applied ? 'primary' : 'success'}
                                onClick={toggleApplication}
                                loading={loading}
                            >
                                {applied ? 'Discard Application' : 'Apply'}
                            </Button>
                        </List.Item>
                    </List>
                </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{employer.name}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Employer Information</p>
                </div>
                <div className="border-t border-gray-200">
                    <List>
                        <List.Item title="">
                            <Image
                                src={employer.photoUrl}
                                alt="SchoEol image"
                                width="350"
                                height="250"
                                className="rounded-md p-1 self-center border-2 border-darker cursor-pointer max-h-full"
                            />
                        </List.Item>

                        {employer.address && (
                            <List.Item title="Address">
                                {combineAddress(employer.address)}
                            </List.Item>
                        )}

                        <List.Item title="Contact Information">
                            {employer.mobile1 && employer.mobile2 && (
                                <p>{arrayValuesCombiner(employer.mobile1, employer.mobile2)}</p>
                            )}
                            {employer.email && <p>{employer.email}</p>}
                        </List.Item>

                        {employer.about && (
                            <List.Item title="About School">
                                <div
                                    className="unreset"
                                    dangerouslySetInnerHTML={{ __html: employer.about }}
                                />
                            </List.Item>
                        )}
                    </List>
                </div>
            </div>
        </section>
    );
};

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<JobProfileProps>> {
    try {
        let { data, error } = await client.query<getRequirementInfo, getRequirementInfoVariables>({
            query: GET_REQUIREMENT_INFO,
            variables: {
                // @ts-ignore
                requirementId: Number(context.query.id),
            },
        });
        if (!data || error)
            return {
                notFound: true,
            };
        return {
            props: {
                requirement: data.getRequirement,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            notFound: true,
        };
    }
}

JobProfile.requireAuth = true;
JobProfile.authFor = 'teacher';

export default JobProfile;
