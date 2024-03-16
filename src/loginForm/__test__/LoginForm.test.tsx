import React from 'react';
import {render, screen} from '@testing-library/react';
import LoginForm from "../LoginForm";

describe("login form", () => {
    test("validate function should pass on correct input", () => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }));

        render(<LoginForm/>);
        const loginInput = screen.getByLabelText('Username')
        const passwordInput = screen.getByLabelText('Password')

        expect(loginInput).not.toBeNull();
        expect(passwordInput).not.toBeNull();
    });
});