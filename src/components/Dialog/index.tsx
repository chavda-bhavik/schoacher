import React from 'react';
import { Icon } from '@/shared/Icons';
import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import Card from '../Card';

interface DialogButton {
    text: string;
    onClick: () => void;
}

interface DialogProps {
    show: boolean;
    onClose: () => void;
    title: string;
    message: string;
    variant?: 'none' | 'danger' | 'success' | 'info';
    cancelButton?: DialogButton;
    successButton?: DialogButton;
    dangerButton?: DialogButton;
}

export const Dialog: React.FC<DialogProps> = ({
    show,
    onClose,
    title,
    message,
    cancelButton,
    successButton,
    dangerButton,
    variant = 'none',
}) => {
    let icon = (
        <div className="py-3">
            {variant === 'danger' && (
                <Icon
                    icon="danger"
                    className="bg-red-500 text-white rounded-full p-1 mx-auto"
                    size="lg"
                    testId="error-icon"
                />
            )}
        </div>
    );
    return (
        <Backdrop bottomCenter show={show} onClose={onClose}>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body className="p-4 flex flex-col justify-center">
                    {variant !== 'none' && icon}
                    <p className="text-lg">{message}</p>
                </Card.Body>
                <Card.Footer className="flex flex-row justify-end space-x-2">
                    {cancelButton && (
                        <Button onClick={cancelButton.onClick} variant="secondary" size="sm">
                            {cancelButton.text}
                        </Button>
                    )}
                    {successButton && (
                        <Button onClick={successButton.onClick} variant="success">
                            {successButton.text}
                        </Button>
                    )}
                    {dangerButton && (
                        <Button onClick={dangerButton.onClick} variant="danger" size="sm">
                            {dangerButton.text}
                        </Button>
                    )}
                </Card.Footer>
            </Card>
        </Backdrop>
    );
};
