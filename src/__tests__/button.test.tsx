import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button', () => {
    it('should initially show primary variation', () => {
        const { getByTestId } = render(<Button>Test</Button>);
        const btn = getByTestId('button');
        expect(btn.classList.contains('btn')).toBeTruthy();
        expect(btn.classList.contains('btn-primary')).toBeTruthy();
    });
    it('should render different variations based on props', () => {
        // bodered button
        let rendered = render(<Button variant="bordered">Bodered Button</Button>);
        let btn = rendered.getByTestId('button');
        expect(btn.classList.contains('btn-bordered')).toBeTruthy();
        rendered.unmount();
        // danger button
        rendered = render(<Button variant="danger">Danger Button</Button>);
        btn = rendered.getByTestId('button');
        expect(btn.classList.contains('btn-danger')).toBeTruthy();
        rendered.unmount();
        // success button
        rendered = render(<Button variant="success">Success Button</Button>);
        btn = rendered.getByTestId('button');
        expect(btn.classList.contains('btn-success')).toBeTruthy();
        rendered.unmount();
        // secondary button
        rendered = render(<Button variant="secondary">Secondary</Button>);
        btn = rendered.getByTestId('button');
        expect(btn.classList.contains('btn-secondary')).toBeTruthy();
    });
    it('should disabled while disabled prop passed', () => {
        let { getByTestId } = render(<Button disabled>Medium Button</Button>);
        let btn = getByTestId('button');
        expect(btn).toBeDisabled();
        expect(btn.classList.contains('cursor-not-allowed')).toBeTruthy();
    });
    it('should disabled while loading and loader should show', () => {
        let { getByTestId, getByRole } = render(<Button loading>Submitting</Button>);
        let btn = getByTestId('button');
        let loader = getByRole('img');
        expect(btn).toBeDisabled();
        expect(loader).toBeDefined();
    });
});
