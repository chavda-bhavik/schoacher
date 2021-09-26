import React from 'react';
import { Loader } from '../Loader';

interface WrapperProps {
    loading?: Boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({ loading, children }) => {
    if (loading)
        return (
            <div className="py-5 w-full flex justify-center">
                <Loader />
            </div>
        );
    return <>{children}</>;
};
