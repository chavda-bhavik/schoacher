import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import constants from '@/shared/constants';

import List from '@/components/List';
import { EmployerTopbar } from '@/components/Topbar';
import { arrayValuesCombiner } from '@/shared/helper';
import TeacherProfileData from '../../../static/teacher-profile-data.json';

interface JobProfileProps {}

const JobProfile: React.FC<JobProfileProps> = ({}) => {
    return (
        <section className="employer-section">
            <EmployerTopbar />

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {TeacherProfileData.profile.firstName +
                            ' ' +
                            TeacherProfileData.profile.lastName}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">About Teacher</p>
                </div>
                <List>
                    <List.Item title="">
                        <Image
                            src={TeacherProfileData.profile.photoUrl}
                            width={200}
                            height={200}
                            alt="Teacher"
                            className="rounded-2xl"
                        />
                    </List.Item>
                    <List.Item title="Contact No">
                        {arrayValuesCombiner(
                            TeacherProfileData.profile.mobile1,
                            TeacherProfileData.profile.mobile2
                        )}
                    </List.Item>
                    <List.Item title="Email ID">{TeacherProfileData.profile.email}</List.Item>
                    <List.Item title="Education">
                        <div className="divide-y-2 divide-gray-200">
                            {TeacherProfileData.qualification.map((qualification, i) => (
                                <div key={i} className="pb-1">
                                    <p className="mb-0 text-lg font-medium">
                                        {qualification.degree}
                                    </p>
                                    <p className="mb-0">{qualification.college}</p>
                                    <span className="text-sm font-normal text-primary-dark">
                                        {dayjs(qualification.start).format(
                                            constants.teacherProfile.dateFormat
                                        )}
                                        {' - '}
                                        {dayjs(qualification.end).format(
                                            constants.teacherProfile.dateFormat
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </List.Item>
                    <List.Item title="Experience">
                        <div className="divide-y-2 divide-gray-200">
                            {TeacherProfileData.experience.map((experience, i) => (
                                <div key={i} className="pb-1">
                                    <p className="mb-0 text-lg font-medium">{experience.title}</p>
                                    <div className="divide-x-2 divide-primary-dark">
                                        <span className="pr-1">{experience.type}</span>
                                        <span className="pl-1">
                                            {dayjs(experience.start).format(
                                                constants.teacherProfile.dateFormat
                                            )}
                                            {' - '}
                                            {experience.currentlyWorking
                                                ? 'Present'
                                                : dayjs(experience.end).format(
                                                      constants.teacherProfile.dateFormat
                                                  )}
                                        </span>
                                    </div>
                                    <ul className="list-disc list-inside">
                                        {experience.subjects.map((subject) => (
                                            <li className="leading-tight" key={subject.id}>
                                                {subject.board} {subject.standard} {subject.subject}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </List.Item>
                    <List.Item title="Materials">
                        <div className="divide-y-2 divide-gray-200">
                            {TeacherProfileData.material.map((material, i) => (
                                <div key={i} className="pb-1">
                                    <p className="text-lg font-medium">{material.title}</p>
                                    <ul className="list-disc list-inside">
                                        {material.subjects &&
                                            material.subjects.map((subject) => (
                                                <li className="leading-tight" key={subject.id}>
                                                    {subject.board} {subject.standard}{' '}
                                                    {subject.subject}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </List.Item>
                </List>
            </div>
        </section>
    );
};

export default JobProfile;
