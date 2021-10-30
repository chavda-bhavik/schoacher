import React from 'react';
import { render } from '@testing-library/react';
import { Dialog } from '../components/Dialog';

describe('Dialog', () => {
    it('should show message & title by default', () => {
        const onCloseHandler = jest.fn();
        const { getByText } = render(
            <Dialog show={true} title="Test" message="Test Message" onClose={onCloseHandler} />
        );
        const title = getByText('Test');
        const message = getByText('Test Message');

        expect(title).toBeDefined();
        expect(message).toBeDefined();
    });

    it('should show buttons when props passed', () => {
        const cancelButtonHandler = jest.fn();
        const successButtonHandler = jest.fn();
        const dangerButtonHandler = jest.fn();
        const onCloseHandler = jest.fn();
        const { getByText } = render(
            <Dialog
                show={true}
                title="Button Test"
                message="Testing Buttons"
                onClose={onCloseHandler}
                cancelButton={{
                    text: 'Cancel',
                    onClick: cancelButtonHandler,
                }}
                successButton={{
                    text: 'Success',
                    onClick: successButtonHandler,
                }}
                dangerButton={{
                    text: 'Danger',
                    onClick: dangerButtonHandler,
                }}
            />
        );

        const cancleButton = getByText('Cancel');
        const successButton = getByText('Success');
        const dangerButton = getByText('Danger');
        cancleButton.click();
        successButton.click();
        dangerButton.click();

        expect(cancleButton).toBeDefined();
        expect(successButton).toBeDefined();
        expect(dangerButton).toBeDefined();
        expect(cancelButtonHandler).toBeCalled();
        expect(successButtonHandler).toBeCalled();
        expect(dangerButtonHandler).toBeCalled();
    });

    it('should show error-icon for danger variant', () => {
        const onCloseHandler = jest.fn();
        const { getByTestId } = render(
            <Dialog
                show={true}
                title="Error"
                message="Some Error Occurred"
                onClose={onCloseHandler}
                variant="danger"
            />
        );
        let errorIcon = getByTestId('error-icon');
        expect(errorIcon).toBeDefined();
    });
});
