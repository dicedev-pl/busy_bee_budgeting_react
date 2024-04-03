import {useState} from "react";
import {AssetsDto} from "../AssetsModels";

const useGetAssets = (): {
    error: boolean;
    assets: Array<AssetsDto>;
    getAssets(userToken: string): void;
} => {
    const [error, setError] = useState(false)
    const [assets, setAssets] = useState<Array<AssetsDto>>([])

    const getAssets = (userToken: string): void => {
        fetch('http://localhost:8080/assets', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            }
        }).then(response => {
            if (response.status !== 200) {
                setError(true);
                return;
            }
            return response.json()
        })
            .then(data => setAssets(data))
            .catch(err => {
                console.error(err);
                setError(true);
            })
    }

    return {error, assets, getAssets}

}

export default useGetAssets;