import React from 'react';
import { render } from '@testing-library/react';
import { Wrapper } from '../components/Wrapper';

let spyError, spyLog;
beforeAll(() => {
    // removes unwanted error boundry logs and error
    spyError = jest.spyOn(console, 'error');
    spyError.mockImplementation(() => {});
    spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(() => {});
});
afterAll(() => {
    // restore logs and errors
    spyError.mockRestore();
    spyLog.mockRestore();
});

describe('Wrapper', () => {
    it('should show loader when loading prop passed', () => {
        const { getByTestId } = render(<Wrapper loading={true}></Wrapper>);
        const loader = getByTestId('loader');
        expect(loader).toBeTruthy();
    });

    it('should handle error, and show error illustration with error text, and reset to be available', () => {
        const Cmp = () => {
            throw new Error();
        };
        const onReset = jest.fn();

        const { getByText, getByRole } = render(
            <Wrapper onReset={onReset}>
                <Cmp />
            </Wrapper>
        );
        const resetButton = getByRole('button');
        resetButton.click();

        let errorIllustration = getByRole('img');
        expect(errorIllustration).toBeDefined();
        expect(onReset).toBeCalled();
        getByText('Something went wrong! Please try again later');
    });

    it('should handle error, and show fallBack component', () => {
        const spyError = jest.spyOn(console, 'error');
        spyError.mockImplementation(() => {});
        const spyLog = jest.spyOn(console, 'log');
        spyLog.mockImplementation(() => {});

        const Cmp = () => {
            throw new Error();
        };
        const fallbackComponent = <p>error</p>;

        const { getByText } = render(
            <Wrapper fallbackComponent={fallbackComponent}>
                <Cmp />
            </Wrapper>
        );
        getByText('error');
    });
});
