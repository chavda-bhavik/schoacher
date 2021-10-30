import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../components/Input';
import { Simulate } from 'react-dom/test-utils';

describe('Input', () => {
    it('should show label, errorMessage, required and note', () => {
        const { getByText, getByTestId } = render(
            <Input
                id="testInput"
                name="testInput"
                type="text"
                required
                label="Test Input"
                error="Test Input Error"
                isInvalid={true}
                register={{
                    'data-testid': 'testInput',
                }}
                note="Note for Test Input"
            />
        );
        const label = getByText('Test Input');
        const error = getByText('Test Input Error');
        const note = getByText('Note for Test Input');
        const input = getByTestId('testInput');
        const requiredSpan = getByText('*');

        expect(label).toBeDefined();
        expect(error).toBeDefined();
        expect(note).toBeDefined();
        expect(requiredSpan).toBeDefined();
        expect(label.getAttribute('for')).toBe('testInput');
        expect(input.classList.contains('input-invalid')).toBeTruthy();
        expect(requiredSpan.classList.contains('text-red-500')).toBeTruthy();
    });

    it('should not show label, errorMessage, required and note', () => {
        const { queryByTestId } = render(
            <Input
                id="testInput"
                name="testInput"
                type="text"
                register={{
                    'data-testid': 'testInput',
                }}
            />
        );
        const label = queryByTestId('input-label');
        const error = queryByTestId('input-error');
        const note = queryByTestId('input-note');
        const input = queryByTestId('testInput');
        const requiredSpan = queryByTestId('input-label-span');

        expect(label).toBeNull();
        expect(error).toBeNull();
        expect(note).toBeNull();
        expect(requiredSpan).toBeNull();
        expect(input.classList.contains('input-invalid')).toBeFalsy();
    });

    it('should render input types text, number, tel, email, password with valid placeholder, disabled and register props', () => {
        const { getByTestId } = render(
            <Input
                id="testInput"
                name="testInput"
                type="text"
                disabled={true}
                isInvalid={true}
                placeholder="Test Input"
                register={{
                    key: 'registerKey',
                    'data-testid': 'textInput',
                }}
            />
        );
        const input = getByTestId('textInput');

        expect(input).toBeDefined();
        expect(input).toBeDisabled();
        expect(input.getAttribute('type')).toBe('text');
        expect(input.getAttribute('name')).toBe('testInput');
        expect(input.getAttribute('placeholder')).toBe('Test Input');
        expect(input.classList.contains('input')).toBeTruthy();
        expect(input.classList.contains('form-input')).toBeTruthy();
        expect(input.classList.contains('cursor-not-allowed')).toBeTruthy();
    });

    it('should render input type file', () => {
        const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
        const changeHandler = jest.fn();

        const { container } = render(
            <Input
                id="fileInput"
                name="fileInput"
                type="file"
                onChange={changeHandler}
                isInvalid={true}
                accept="application/png"
            />
        );
        const input = container.querySelector('#fileInput');
        // @ts-ignore
        Simulate.change(input, { target: { files: [file] } });

        expect(input).toBeDefined();
        expect(changeHandler).toBeCalled();
        expect(input.getAttribute('type')).toBe('file');
        expect(input.getAttribute('name')).toBe('fileInput');
        expect(input.getAttribute('accept')).toBe('application/png');
        expect(input.classList.contains('input')).toBeTruthy();
        expect(input.classList.contains('form-input')).toBeTruthy();
    });

    it('should render input type select', () => {
        const { getByTestId, getByText } = render(
            <Input
                id="selectInput"
                name="selectInput"
                type="select"
                disabled
                isInvalid={true}
                register={{
                    'data-testid': 'select-input',
                }}
            >
                <option>Option 1</option>
            </Input>
        );
        const input = getByTestId('select-input');
        const option1 = getByText('Option 1');

        expect(input).toBeDefined();
        expect(input).toBeDisabled();
        expect(option1).toBeDefined();
        expect(input.getAttribute('name')).toBe('selectInput');
        expect(input.classList.contains('input')).toBeTruthy();
        expect(input.classList.contains('form-select')).toBeTruthy();
        expect(input.classList.contains('cursor-not-allowed')).toBeTruthy();
    });

    it('should render input type textarea', () => {
        const { getByTestId } = render(
            <Input
                id="description"
                name="description"
                type="textarea"
                disabled
                rows={3}
                isInvalid={true}
                register={{
                    'data-testid': 'description',
                }}
            />
        );
        const input = getByTestId('description');

        expect(input).toBeDefined();
        expect(input).toBeDisabled();
        expect(input.getAttribute('rows')).toBe('3');
        expect(input.getAttribute('name')).toBe('description');
        expect(input.classList.contains('input')).toBeTruthy();
        expect(input.classList.contains('form-textarea')).toBeTruthy();
        expect(input.classList.contains('cursor-not-allowed')).toBeTruthy();
    });
});
