import React from 'react';
import Image from 'next/image';

import { TeacherTopbar } from '@/components/Topbar';
import { arrayValuesCombiner, combineAddress } from '@/shared/helper';
import dayjs from 'dayjs';
import constants from '@/shared/constants';

interface JobProfileProps {}

const profileData = {
    id: 1,
    name: 'Saraswati Vidhyalaya',
    address: {
        street1: 'B-501, Hari Om Complex',
        street2: 'Modi Mohallo, A.K.road',
        city: 'surat',
        state: 'Gujarat',
        pincode: 395008,
    },
    mobile1: 9638837399,
    mobile2: 9099704951,
    email: 'saraswatividhyalya@gmail.com',
    since: 1999,
    profileImageUrl: 'https://source.unsplash.com/umhyDLYKfLM/350x250',
    subjects: [
        {
            id: 1,
            board: 'GSEB',
            standard: '1',
            subject: 'all',
        },
        {
            id: 2,
            board: 'GSEB',
            standard: '2',
            subject: 'all',
        },
        {
            id: 3,
            board: 'GSEB',
            standard: '3',
            subject: 'all',
        },
        {
            id: 4,
            board: 'GSEB',
            standard: '4',
            subject: 'all',
        },
    ],
    about: '<b>Saraswati Vidhyalya</b> is a well known school located in Ashwanikumar area of Surat. We teach students from standard 1 to 12, Science and Commerce. Also we teach students in English Medium.<div></div><div><b><u>Highlights</u></b></div><div><ul><li>Two Big Playground</li><li>Every Year Picnic</li><li>Parking Plot</li></ul></div><div><br></div>',
};
const requirementData = {
    id: 1,
    title: 'English Teacher for Standard 10 NCERT Board',
    description:
        "<b>Saraswati Vidhyalya</b> is very well known school located in Surat Area. We need Teacher who can <u>teach English in Standard 8, 9 &amp; 10</u>.<br style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><br style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><b><u>Facilities:</u></b><div style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><ul style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Salary based on expectations and qualification</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Every year salary increment and on-time salary</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Sick Leaves</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Supportive Staff members</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Pick up facility if applied</li></ul><br style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><b><u>Job Responsibilities:</u></b><div style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><ul style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Should be fluent in English Speaking, Writing and Reading<br style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'></li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Should be having&nbsp;<u style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>experience of more than two years</u></li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Should behave properly with students</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Make and check papers for exams that school arrange every semester</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Attend school meetings and functions</li><li style='border-color: rgba(229, 231, 235, var(--tw-border-opacity)); --tw-border-opacity: 1; --tw-shadow: 0 0 #0000; --tw-ring-inset: var(--tw-empty, ); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59, 130, 246, 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000;'>Resolve Parents and students queries if needed</li></ul></div></div>",
    type: 'Full Time',
    qualification: 'B. Ed Pass',
    time: {
        startTime: '2012-04-23T18:25:43.511Z',
        endTime: '2012-04-23T18:25:43.511Z',
    },
    salaryRange: {
        start: 15000,
        end: 50000,
    },
    subjects: [
        {
            id: 1,
            board: 'NCERT',
            standard: '10',
            subject: 'English',
        },
        {
            id: 2,
            board: 'NCERT',
            standard: '9',
            subject: 'English',
        },
        {
            id: 3,
            board: 'NCERT',
            standard: '8',
            subject: 'English',
        },
    ],
};

const JobProfile: React.FC<JobProfileProps> = ({}) => {
    return (
        <section className="teacher-section">
            <TeacherTopbar />

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {requirementData.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Job Information</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Full Time
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Time</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {`${dayjs(requirementData.time.startTime).format(
                                    constants.timeFormat
                                )} - ${dayjs(requirementData.time.endTime).format(
                                    constants.timeFormat
                                )}`}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Minimum Qualification
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {requirementData.qualification}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Salary Range</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                15000 - 50000
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Subjects To Be Taught
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul className="list-inside list-disc">
                                    {profileData?.subjects &&
                                        profileData?.subjects.map((subject) => (
                                            <li
                                                key={subject.id}
                                            >{`${subject.board} ${subject.standard} ${subject.subject}`}</li>
                                        ))}
                                </ul>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div
                                    className="unreset"
                                    dangerouslySetInnerHTML={{
                                        __html: requirementData?.description,
                                    }}
                                />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Saraswati Vidhyalaya
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">School Information</p>
                </div>
                <div className="border-t border-gray-200">
                    <div className="flex items-center justify-center py-3">
                        <Image
                            src={profileData.profileImageUrl}
                            alt="SchoEol image"
                            width="350"
                            height="250"
                            className="rounded-md p-1 self-center border-2 border-darker cursor-pointer max-h-full"
                        />
                    </div>
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Active Since</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {profileData.since}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {combineAddress(profileData.address)}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Contact Information
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <p>
                                    {arrayValuesCombiner(profileData.mobile1, profileData.mobile2)}
                                </p>
                                <p>{profileData.email}</p>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About School</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div
                                    className="unreset"
                                    dangerouslySetInnerHTML={{ __html: profileData?.about }}
                                />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* <section className="section">
                <div className="section-header">
                    <p className="title">School Information</p>
                </div>
                <div className="section-body">
                    <figure className="flex flex-col-reverse md:flex-row justify-between p-2">
                        <div className="flex flex-col justify-center">
                            <p className="text-xl font-medium mb-2 underline">
                                Saraswati Vidhyalaya
                            </p>
                            <IconItem icon="pinAlt">
                                Established in <b>{profileData.since}</b>
                            </IconItem>
                            <IconItem icon="home">{combineAddress(profileData.address)}</IconItem>
                            <IconItem icon="phone">
                                {arrayValuesCombiner(profileData.mobile1, profileData.mobile2)}
                            </IconItem>
                            <IconItem icon="inbox">
                                <p className="mb-0 text-blue-400">{profileData.email}</p>
                            </IconItem>
                            <div className="icon-item">
                                <Icon icon="unOrderedList" size="sm" className="mx-2" />
                                <ul>
                                    {profileData?.subjects &&
                                        profileData?.subjects.map((subject) => (
                                            <li
                                                key={subject.id}
                                            >{`${subject.board} ${subject.standard} ${subject.subject}`}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={profileData.profileImageUrl}
                                alt="School image"
                                width="350"
                                height="250"
                                className="rounded-md p-1 self-center border-2 border-darker cursor-pointer max-h-full"
                            />
                        </div>
                    </figure>
                    <div className="border-t border-gray-300 p-2">
                        <p
                            className="unreset"
                            dangerouslySetInnerHTML={{ __html: profileData?.about }}
                        />
                    </div>
                </div>
            </section> */}
        </section>
    );
};

export default JobProfile;
