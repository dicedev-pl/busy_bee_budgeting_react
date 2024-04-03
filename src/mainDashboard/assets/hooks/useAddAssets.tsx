import {useState} from "react";
import {FormProps} from "antd";

const useAddAssets = (): {
    error: boolean;
    saved: boolean;
    saveAssets(values: FormProps, userToken: string): void;
} => {
    const [error, setError] = useState(false)
    const [saved, setSaved] = useState(false)

    const saveAssets = (values: FormProps, userToken: string): void => {
        fetch('http://localhost:8080/assets/list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            },
            body: JSON.stringify(values)
        }).then(response => {
            if (response.status !== 200) {
                setError(true);
                return;
            }
            setSaved(true)
        })
            .catch(err => {
                console.error(err);
                setError(true);
            })
    }

    return {error, saved, saveAssets}

}

export default useAddAssets;