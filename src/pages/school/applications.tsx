import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/Input';
import { SchoolTopbar } from '@/components/Topbar';
import { ApplicantCard } from '@/components/school/applications/ApplicantCard';

interface ApplicationsProps {}

const Applications: React.FC<ApplicationsProps> = ({}) => {
    return (
        <div className="school-section">
            <SchoolTopbar />
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 grid grid-cols-2">
                    <Input id="application" name="application" type="select" className="w-max">
                        <option>English Teacher for Standard 11 &amp; 12</option>
                        <option>Nursery Teacher</option>
                    </Input>
                    <Input id="status" name="status" type="select" className="w-max ml-auto">
                        <option>Applied</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </Input>
                </div>
                <div className="border-t border-gray-200">
                    <div className="grid grid-cols-4 gap-2">
                        <ApplicantCard />
                        <ApplicantCard />
                        <ApplicantCard />
                        <ApplicantCard />
                        <ApplicantCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applications;
