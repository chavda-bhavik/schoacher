import React from 'react';

import { Button } from '@/components/Button';
import { Filter } from '@/components/teacher/Filter';
import { TeacherTopbar } from '@/components/Topbar';
import { Requirement } from '@/components/teacher/Requirement/index';
import { IconButton } from '@/components/IconButton';

interface JobsProps {}

const Jobs: React.FC<JobsProps> = ({}) => {
    return (
        <section className="teacher-section">
            <TeacherTopbar />
            <section className="section">
                <div className="section-header sticky top-0 z-50 bg-dustWhite">
                    <div className="flex flex-row w-full space-x-2">
                        <IconButton
                            icon="filter"
                            size="sm"
                            variant="secondary"
                            className="flex-shrink-0 self-center p-2"
                        />
                        <div className="overflow-x-auto flex-grow flex flex-row space-x-2">
                            <Filter title="Std" text="NCERT Nursery" />
                            <Filter title="City" text="Surat, Gujarat, India" />
                            <Filter title="City" text="Surat, Gujarat, India" />
                            <Filter title="Salary" text="15000-30000" />
                        </div>
                        <Button
                            variant="primary"
                            size="sm"
                            className="whitespace-nowrap flex-shrink-0 self-center"
                        >
                            Clear Filters
                        </Button>
                    </div>
                </div>
                <div className="section-body divide-y-2">
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                    <Requirement
                        imageUrl="https://source.unsplash.com/umhyDLYKfLM/350x250"
                        location="Surat, Gujarat, India"
                        schoolName="Mauni Ankur School of Science"
                        title="English Teacher Needed for standard 11 &amp; 12"
                        type="Full Time"
                    />
                </div>
            </section>
        </section>
    );
};

export default Jobs;
