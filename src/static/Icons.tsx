import React from 'react';
import classnames from 'classnames';

import { IconsType, IconsSizesType } from '@/interfaces';

const icons = {
    check: {
        viewBox: '-5 -7 24 24',
        path: (
            <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
        ),
    },
    logIn: {
        viewBox: '-5 -3 24 24',
        path: (
            <path d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95l1.121-1.122zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path>
        ),
    },
    logOut: {
        viewBox: '-5 -3 24 24',
        path: (
            <path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path>
        ),
    },
    pencil: {
        viewBox: '-2.5 -2.5 24 24',
        path: (
            <path d="M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"></path>
        ),
    },
    user: {
        viewBox: '-5 -2 24 24',
        path: (
            <path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path>
        ),
    },
    userCircle: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"></path>
        ),
    },
    building: {
        viewBox: '-5.5 -2 24 24',
        path: (
            <path d="M3 0h7a3 3 0 0 1 3 3v17H0V3a3 3 0 0 1 3-3zM2 18h9V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15zM4 4h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm4-9h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm0 3h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm-3 3h3a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1z"></path>
        ),
    },
    buildingF: {
        viewBox: '-5.5 -2 24 24',
        path: (
            <path d="M9 20v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3H0V3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v17H9zM4 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H4zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H4zm4-9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H8zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H8zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H8zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H8z"></path>
        ),
    },
    home: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path>
        ),
    },
    homeF: {
        viewBox: '-2 -1.5 24 24',
        path: (
            <path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path>
        ),
    },
    phone: {
        viewBox: '-6 -2 24 24',
        path: (
            <path d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
        ),
    },
    phoneF: {
        viewBox: '-6 -1.5 24 24',
        path: (
            <path d="M3 .565h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
        ),
    },
    email: {
        viewBox: '0 0 485 485',
        path: (
            <path
                d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
	s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
	C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
	c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
	s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
	c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
	C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
	c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"
            />
        ),
    },
    plusCircle: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"></path>
        ),
    },
    book: {
        viewBox: '-5 -2 24 24',
        path: (
            <path d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5zM3 2H2v14h1V2zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zm1 2h5v2H6V4zm0 3h5v2H6V7z"></path>
        ),
    },
    grid: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M2 2v4h4V2H2zm0-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm12 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v4h4V2h-4zm0 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h4v-4h-4zM2 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h4v-4H2z"></path>
        ),
    },
    page: {
        viewBox: '-4 -2 24 24',
        path: (
            <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path>
        ),
    },
    download: {
        viewBox: '-5 -5 24 24',
        path: (
            <path d="M8 6.641l1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0v5.641zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"></path>
        ),
    },
    envelop: {
        viewBox: '0 0 24 24',
        path: (
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        ),
    },
};

const sizes = {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
};

interface IconProps {
    icon: IconsType;
    size?: IconsSizesType;
    className?: string;
    fill?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size = 'md', className = '', fill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={icons[icon].viewBox}
            width={sizes[size]}
            height={sizes[size]}
            preserveAspectRatio="xMinYMin"
            className={classnames(className, ' text-center')}
            fill="currentColor"
            role="img"
        >
            {icons[icon].path}
        </svg>
    );
};
