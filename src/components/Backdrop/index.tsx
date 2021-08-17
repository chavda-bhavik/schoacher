import { toggleBodyOverflowHidden } from '@/static/helper';
import React from 'react';
import { useEffect } from 'react';

interface BackdropProps {
    show: boolean;
    onClose: () => void;
    bottomCenter?: boolean;
}

export const Backdrop: React.FC<BackdropProps> = ({
    show,
    onClose,
    children,
    bottomCenter = true,
}) => {
    useEffect(() => {
        toggleBodyOverflowHidden(show);
    }, [show]);

    return (
        <div
            className={`fixed pin h-full z-50 inset-0 ${show ? '' : 'hidden'} overflow-hidden`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className={`flex items-center justify-center min-h-screen h-full`}>
                {/* <IconButton
                        icon={['fas', 'times']}
                        className="z-30 absolute top-4 right-4"
                        variant="narvik"
                        onClick={onClose}
                    /> */}
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                />
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="transform transition-all z-20 w-auto p-1">{children}</div>
            </div>
        </div>
    );
};
