import React, { useState } from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';
import { Qualification } from '@/components/teacher/Qualification';
import { Experience } from '@/components/teacher/Experience';
import { Material } from '@/components/teacher/Material';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Subjects } from '@/components/Input/Subjects';
import { Subject } from '@/interfaces';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    const [date, setDate] = useState<Date>();
    const [showQualification, setShowQualification] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);
    const [experienceSubjects, setExperienceSubjects] = useState<Subject[]>(null);
    const [materialSubjects, setMaterialSubjects] = useState<Subject[]>(null);

    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            {/* Header */}
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="logIn" size="md" className="self-center" />
            </section>

            {/* Profile */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Personal Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="flex flex-col-reverse md:flex-row  items-center">
                    <div className="w-full md:w-8/12 lg:w-9/12 h-full space-y-2 py-2">
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon
                                    icon="userCircle"
                                    size="sm"
                                    className="mx-auto cursor-pointer"
                                />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                Chavda Bhavik Vajubhai
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon icon="home" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 text-xl md:w-1/12">
                                <Icon icon="phone" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">+91 9638837399</p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon icon="envelop" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                bhavik.chvda@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <div className="h-2/3 bg-shades-1 inset-0 z-10">
                            <img
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                alt="image"
                                className="rounded-full border-4 md:border-2 border-primary-dark p-1 my-2 mx-auto z-20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualification */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Qualification</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowQualification(true)}
                    />
                </div>
                <div className="divide-y-2 py-2">
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                </div>
            </section>

            {/* Experience */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Experience</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowExperience(true)}
                    />
                </div>
                <div className="divide-y-2 py-2">
                    <Experience />
                    <Experience />
                    <Experience />
                </div>
            </section>

            {/* Material */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Material</p>
                    <IconButton onClick={() => setShowMaterial(true)} icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 py-2">
                    <Material />
                    <Material />
                    <Material />
                </div>
            </section>

            {/* Profile */}
            <Backdrop show={showEditProfile} onClose={() => setShowEditProfile(false)}>
                <div className="bg-white rounded-md">
                    <div className="bg-dustWhite p-3 border-b-2 border-gray-900">
                        <p className="text-xl font-medium">Edit Profile</p>
                        {/* <Icon icon="close" /> */}
                    </div>
                    <div className="p-3">
                        <form>
                            <div className="grid grid-cols-2 gap-2">
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                />
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                />
                            </div>
                            <Input id="address" name="address" type="text" label="Address" />
                            <Input id="email" name="email" type="email" label="Email" />
                            <Input id="mobile" name="mobile" type="tel" label="Mobile No." />
                            <Button className="mt-5">Update</Button>
                        </form>
                    </div>
                    {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
                </div>
            </Backdrop>

            {/* Qualification */}
            <Backdrop show={showQualification} onClose={() => setShowQualification(false)}>
                <div className="bg-white rounded-md overflow-auto max-h-screen">
                    <div className="bg-dustWhite rounded-t-md p-3 border-b-2 border-gray-900 sticky top-0">
                        <p className="text-xl font-medium">Manage Qualification</p>
                        {/* <Icon icon="close" /> */}
                    </div>
                    <div className="p-3">
                        <form>
                            <Input id="degree" name="college" type="text" label="Degree Name" />
                            <Input
                                id="college"
                                name="college"
                                type="text"
                                label="College/University Name"
                            />
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <div>
                                    <label className="label" htmlFor="start">
                                        Start
                                    </label>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => !Array.isArray(date) && setDate(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="start"
                                    />
                                </div>
                                <div>
                                    <label className="label" htmlFor="end">
                                        End
                                    </label>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => !Array.isArray(date) && setDate(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="end"
                                    />
                                </div>
                            </div>
                            <Input
                                type="textarea"
                                label="Description"
                                id="description"
                                name="description"
                                rows={3}
                            />
                            <Button className="mt-5">Update</Button>
                        </form>
                    </div>
                    {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
                </div>
            </Backdrop>

            {/* Experience */}
            <Backdrop show={showExperience} onClose={() => setShowExperience(false)}>
                <div className="bg-white rounded-md max-h-screen">
                    <div className="bg-dustWhite rounded-t-md p-3 border-b-2 sticky top-0 border-gray-900">
                        <p className="text-xl font-medium">Add/Edit Expeience</p>
                        {/* <Icon icon="close" /> */}
                    </div>
                    <div className="p-3 overflow-y-scroll modal-body">
                        <form>
                            <Input id="title" name="title" type="text" label="Title" />
                            <Input type="select" id="type" name="type" label="Type">
                                <option value="school">School</option>
                                <option value="tution">Tution</option>
                                <option value="home-batch">Home Batch</option>
                            </Input>
                            <Input
                                id="schoolName"
                                name="schoolName"
                                type="text"
                                label="School/Tution Name"
                            />
                            <Input id="location" name="location" type="text" label="Location" />
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <div>
                                    <label className="label" htmlFor="estart">
                                        Start
                                    </label>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => !Array.isArray(date) && setDate(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="estart"
                                    />
                                </div>
                                <div>
                                    <label className="label" htmlFor="end">
                                        End
                                    </label>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => !Array.isArray(date) && setDate(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="end"
                                    />
                                </div>
                            </div>
                            <Input
                                type="checkbox"
                                id="currentlyWorking"
                                name="currentlyWorking"
                                label="Currently Working?"
                            />
                            <Input
                                type="textarea"
                                label="Description"
                                id="edescription"
                                name="edescription"
                                rows={3}
                            />
                            <Subjects
                                title="Subjects"
                                subjects={experienceSubjects}
                                setSubjects={(subjects) => setExperienceSubjects(subjects)}
                            />
                            <Button block className="mt-5">
                                Update
                            </Button>
                        </form>
                    </div>
                    {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
                </div>
            </Backdrop>

            {/* Material */}
            <Backdrop show={showMaterial} onClose={() => setShowMaterial(false)}>
                <div className="bg-white rounded-md max-h-screen">
                    <div className="bg-dustWhite rounded-t-md p-3 border-b-2 sticky top-0 border-gray-900">
                        <p className="text-xl font-medium">Add/Edit Material</p>
                        {/* <Icon icon="close" /> */}
                    </div>
                    <div className="p-3 overflow-y-scroll modal-body">
                        <form>
                            <Input id="title" name="title" type="text" label="Title" />
                            <Input
                                type="textarea"
                                label="Description"
                                id="edescription"
                                name="edescription"
                                rows={3}
                            />
                            <Subjects
                                title="Subjects"
                                subjects={materialSubjects}
                                setSubjects={(subjects) => setMaterialSubjects(subjects)}
                            />
                            <Button block className="mt-5">
                                Add / Update
                            </Button>
                        </form>
                    </div>
                    {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
                </div>
            </Backdrop>
        </div>
    );
};

export default TeacherProfile;
