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
        const token = (value: string): void => {
        }

        render(<LoginForm setUserToken={token}/>);
        const loginInput = screen.getByLabelText('Username')
        const passwordInput = screen.getByLabelText('Password')

        expect(loginInput).not.toBeNull();
        expect(passwordInput).not.toBeNull();
    });
});