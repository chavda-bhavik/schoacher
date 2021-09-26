import React from 'react';
import classes from './style.module.css';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
    return (
        <div className={`${classes.spinner}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
