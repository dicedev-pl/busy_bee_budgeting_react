import { useState } from "react";

type ValuesType = {
    username?: string;
    password?: string;
};

const useTokenApi = (): {
    error: boolean;
    saved: boolean;
    getTokenForUser(values: ValuesType, setUserToken: (value: string) => void): void;
    saveNewUser(values: ValuesType): void;
} => {
    const [error, setError] = useState(false)
    const [saved, setSaved] = useState(false)

    const getTokenForUser = (values: ValuesType, setUserToken: (value: string) => void) => {
        fetch('http://localhost:8080/auth/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": values.username,
                "password": values.password
            })
        }).then(response => {
            if (response.status !== 200) {
                setError(true);
                return;
            }
            return response.json()
        })
            .then(data => setUserToken("Bearer " + data.jwtToken))
            .catch(err => {
                console.error(err);
                setError(true);
            })
    }

    const saveNewUser = (values: ValuesType) => {
        fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": values.username,
                "password": values.password
            })
        }).then(response => {
            if (response.status !== 200) {
                setError(true);
                return;
            }
            setSaved(true);
            return response.json()
        })
            .catch(err => {
                console.error(err)
                setError(true)
            })
    }

    return {error, saved, getTokenForUser, saveNewUser}

}

export default useTokenApi;