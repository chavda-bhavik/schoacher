import React, { useEffect } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Selection } from '@/components/Selection';
import { Curls, Teaching, School, Teacher } from '@/static/SVGs';
import { useForm } from '@formcarry/react';
import { Icon } from '@/static/Icons';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
    const { state, submit } = useForm({
        id: '9biB8_ixn2-',
    });

    useEffect(() => {
        if (state.submitted) {
            let form = document.getElementById('join-early-form') as HTMLFormElement;
            form.reset();
        }
    }, [state.submitted]);

    return (
        <>
            <nav id="header" className="w-full z-30 text-white bg-primary-green">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a
                            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                            href="#"
                        >
                            <svg
                                className="h-8 fill-current inline"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.005 512.005"
                            >
                                <rect
                                    fill="#2a2a31"
                                    x="16.539"
                                    y="425.626"
                                    width="479.767"
                                    height="50.502"
                                    transform="matrix(1,0,0,1,0,0)"
                                />
                                <path
                                    className="plane-take-off"
                                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                                />
                            </svg>
                            LANDING
                        </a>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <section className="bg-primary-green">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                        <h1 className="my-4 text-white text-4xl md:text-5xl font-bold leading-tight">
                            Connecting Teachers With Schools
                        </h1>
                        <p className="leading-normal text-white text-2xl mb-8">
                            We makes it easy for schools to post and manage requirements and for
                            teachers to apply easily
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 py-2 md:py-6 text-center">
                        <Teaching className="max-w-full" />
                    </div>
                </div>
                <Curls />
            </section>
            <section className="bg-dustWhite">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-4xl font-bold leading-tight pt-16 pb-6 text-black">
                        How <span className="text-primary-green">Schoacher</span> helps Schools
                    </h2>
                    <div className="flex flex-wrap flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 py-2 text-center">
                            <School className="max-w-full" />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 items-start text-left font-normal text-primary-dark pl-0 sm:pl-2 md:pl-4 pt-4 sm:pt-2 md:pt-0">
                            <p className="leading-normal text-2xl mb-3">
                                School can Post and Manage their requirements for teachers in four
                                easy steps:
                            </p>
                            <ul className="list-decimal list-inside text-2xl ml-3">
                                <li>Create an Account</li>
                                <li>Complete Profile Information</li>
                                <li>Post a Requirement</li>
                                <li>Hire a teacher</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dustWhite">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-4xl font-bold leading-tight pt-16 pb-6 text-black">
                        How <span className="text-primary-green">Schoacher</span> helps Teachers
                    </h2>
                    <div className="flex flex-wrap flex-col md:flex-row items-center justify-between">
                        <div className="flex flex-col w-full md:w-1/2 items-start text-left font-normal text-primary-dark">
                            <p className="leading-normal text-2xl mb-3">
                                Teachers can manage their profile online and Apply for jobs that
                                fits their needs in just four easy steps:
                            </p>
                            <ul className="list-decimal list-inside text-2xl ml-3">
                                <li>Create an Account</li>
                                <li>Complete Profile Information</li>
                                <li>Search for jobs that fits you</li>
                                <li>Apply for jobs</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 py-2 text-center">
                            <Teacher className="max-w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary-green">
                <Curls className="transform -rotate-180" />
                <div className={`container px-5 py-24 mx-auto flex flex-wrap items-center`}>
                    <div className="w-full md:w-1/2 md:pr-16 lg:pr-6">
                        <h2 className="font-medium text-3xl text-white">
                            We&apos;re launching soon, but you can join early.
                        </h2>
                        <p className="leading-relaxed text-white text-xl">
                            Please fill this form to get notified when we launch.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 pt-5 md:pt-0">
                        <form
                            id="join-early-form"
                            onSubmit={submit}
                            className="max-w-lg mx-auto bg-dustWhite rounded-lg p-8"
                        >
                            <h2 className="text-2xl mb-3 font-bold">Join Early</h2>
                            <Selection />
                            <Input
                                name="name"
                                type="string"
                                id="name"
                                required={true}
                                label="Full Name"
                                placeholder="Full Name"
                            />
                            <Input
                                required={true}
                                name="number"
                                type="tel"
                                id="number"
                                pattern="\+?\d[\d -]{8,12}\d"
                                title="Please enter valid mobile number"
                                label="Mobile No."
                                placeholder="Mobile No."
                            />
                            {!state.submitted ? (
                                <Button type="submit" variant="primary" disabled={state.submitting}>
                                    Submit
                                </Button>
                            ) : (
                                <Icon
                                    icon="check"
                                    size="md"
                                    className="p-1 mt-5 mb-3 bg-primary-green text-dustWhite rounded-full"
                                />
                            )}
                            {state.submitted && (
                                <h2 className="font-medium text-xl text-primary-green">
                                    You&apos;re in. Thanks for joining early.
                                </h2>
                            )}
                            {state.error && (
                                <p className="text-sm text-red-500 mt-1">
                                    Some error occured. Please try again later.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
            <footer className="bg-primary-dark p-4">
                <p className="text-white text-base font-semibold">
                    &#169; Schoacher. All rights reserved
                </p>
            </footer>
        </>
    );
};

export default Index;
