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
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-918.000000, -1220.000000)">
                    <g transform="translate(100.000000, 1162.000000)">
                        <g transform="translate(816.000000, 54.000000)">
                            <g>
                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                <path
                                    d="M22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 Z M20,6 L12,11 L4,6 L20,6 Z M20,18 L4,18 L4,8 L12,13 L20,8 L20,18 Z"
                                    fill="#1D1D1D"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        ),
    },
    envelopFilled: {
        viewBox: '0 0 20 20',
        path: (
            <>
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </>
        ),
    },
    close: {
        viewBox: '-6 -6 24 24',
        path: (
            <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path>
        ),
    },
    plus: {
        viewBox: '-4.5 -4.5 24 24',
        path: (
            <path d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"></path>
        ),
    },
    pinAlt: {
        viewBox: '-7 -2 24 24',
        path: (
            <path d="M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0V9.9zM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        ),
    },
    orderedList: {
        viewBox: '-5 -6 24 24',
        path: (
            <path d="M4 1h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 8h9a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM.438.845h.72L1.111 3H.65L.7 1.28H.224L.438.845zM.523 5.59l-.45-.053c.011-.244.09-.439.234-.582a.76.76 0 0 1 .556-.214c.139 0 .263.03.37.089a.67.67 0 0 1 .26.258.677.677 0 0 1 .097.342.988.988 0 0 1-.115.435c-.075.153-.211.33-.407.535l-.158.17h.647V7H.014l.015-.231.666-.68c.158-.16.263-.288.313-.382a.531.531 0 0 0 .074-.245.227.227 0 0 0-.067-.17.242.242 0 0 0-.179-.067.233.233 0 0 0-.182.081c-.034.038-.077.132-.131.284zm.982 4.398c.08.106.121.23.121.373a.7.7 0 0 1-.23.528.813.813 0 0 1-.579.215.758.758 0 0 1-.545-.203c-.142-.136-.22-.32-.183-.603l.456.042c.015.101.05.174.1.22.05.045.115.068.194.068.083 0 .15-.026.203-.078a.253.253 0 0 0 .08-.19.256.256 0 0 0-.109-.209c-.075-.06-.187-.09-.386-.143l.046-.401a.622.622 0 0 0 .203-.042.223.223 0 0 0 .092-.077.175.175 0 0 0 .032-.1.142.142 0 0 0-.045-.109.176.176 0 0 0-.127-.044.211.211 0 0 0-.13.044.217.217 0 0 0-.08.113l-.048.035-.444-.056a.703.703 0 0 1 .185-.413.71.71 0 0 1 .53-.217c.189 0 .35.06.479.182a.58.58 0 0 1 .195.436.516.516 0 0 1-.087.29c-.056.085-.136.153-.246.12a.626.626 0 0 1 .323.219z"></path>
        ),
    },
    unOrderedList: {
        viewBox: '-5 -7 24 24',
        path: (
            <path d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM1 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        ),
    },
    text: {
        viewBox: '-6 -6 24 24',
        path: (
            <path d="M12,1 L12,3 C12,3.55228475 11.5522847,4 11,4 C10.4477153,4 10,3.55228475 10,3 L10,2 L7,2 L7,10 L8,10 C8.55228475,10 9,10.4477153 9,11 C9,11.5522847 8.55228475,12 8,12 L4,12 C3.44771525,12 3,11.5522847 3,11 C3,10.4477153 3.44771525,10 4,10 L5,10 L5,2 L2,2 L2,3 C2,3.55228475 1.55228475,4 1,4 C0.44771525,4 0,3.55228475 0,3 L0,1 C0,0.44771525 0.44771525,0 1,0 L11,0 C11.5522847,0 12,0.44771525 12,1 Z"></path>
        ),
    },
    document: {
        viewBox: '-4 -2 24 24',
        path: (
            <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path>
        ),
    },
    inbox: {
        viewBox: '-2 -5 24 24',
        path: (
            <path d="M2 5.702V12h16V5.702L15.039 2H4.96L2 5.702zM0 5l4-5h12l4 5v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm13.874 2a4.002 4.002 0 0 1-7.748 0H2V5h16v2h-4.126zm-2.142 0H8.268a2 2 0 0 0 3.464 0z"></path>
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
