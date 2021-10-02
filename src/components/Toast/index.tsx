import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';

import { IconButton } from '@/components/IconButton';
import { generateUniqueString } from '@/shared/helper';
import { ToastVariantType } from '@/interfaces';

const VARIANTS: Record<string, ToastVariantType> = {
    info: {
        base: 'bg-white border-blue-500',
        iconstyle: 'text-blue-500 ',
        icon: 'info',
        name: 'Info',
    },
    error: {
        base: 'bg-white border-red-500 ',
        iconstyle: 'text-red-500 ',
        icon: 'trash',
        name: 'Error',
    },
    warning: {
        base: 'bg-white border-yellow-500',
        iconstyle: 'text-yellow-500 ',
        icon: 'trash',
        name: 'Warning',
    },
    success: {
        base: 'bg-white border-green-500',
        iconstyle: 'text-green-500 ',
        icon: 'check',
        name: 'Success',
    },
    base: {
        base: 'bg-white border-gray-600',
        iconstyle: '',
        icon: 'check',
        name: 'base',
    },
};

const Toast = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const addToast = ({ type = 'success', title, message, duration = 500 }) => {
            const id = generateUniqueString();
            const variant = VARIANTS[type] ? VARIANTS[type] : VARIANTS.base;

            setToasts((currentToasts) => [
                ...currentToasts,
                { id, type, title, message, base: variant.base },
            ]);

            if (duration) {
                setTimeout(() => removeToast(id), duration * 1000);
            }
        };

        pubsub.on('toast', addToast);

        return () => {
            pubsub.off('toast', addToast);
        };
    }, []);

    const removeToast = (id) => {
        setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    };

    return (
        <div className="z-50 fixed top-0">
            <div className="top-0 right-0 fixed z-50 w-full md:max-w-sm p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none">
                <div className="flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none">
                    <TransitionGroup>
                        {toasts.map((toast) => (
                            <CSSTransition key={toast.id} classNames="toast" timeout={100}>
                                <div
                                    key={toast.id}
                                    className={
                                        'flex py-1 w-full transform transition-all duration-300 pointer-events-auto'
                                    }
                                >
                                    <div
                                        className={`flex w-full visible flex-row shadow-lg border-l-4 rounded-md duration-100 cursor-pointer transform transition-all hover:scale-102 ${toast.base} max-h-40`}
                                    >
                                        <div className="flex flex-row p-2 flex-no-wrap w-full">
                                            <div className="flex flex-col flex-no-wrap px-1 w-full">
                                                <div className="flex my-auto font-bold select-none">
                                                    {toast.title}
                                                </div>
                                                <p className="-mt-0.5 my-auto break-all flex text-gray-600 text-sm">
                                                    {toast.message}
                                                </p>
                                            </div>
                                            <IconButton
                                                className="mx-auto my-auto h-full text-center text-gray-600 cursor-pointer hover:scale-105 transform"
                                                icon="close"
                                                onClick={() => removeToast(toast.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    );
};

export default Toast;
