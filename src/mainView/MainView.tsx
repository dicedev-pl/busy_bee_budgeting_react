import logo from "../bbb_logo.svg";
import LoginForm from "../loginForm/LoginForm";
import React, {useState} from "react";

const MainView = () => {
    const [userToken, setUserToken] = useState("");

    return (
        <header className="App-header">
            {
                (!userToken &&
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <LoginForm setUserToken={setUserToken}/>
                    </div>
                ) || (
                    <div>Ala</div>
                )
            }
        </header>
    );
}

export default MainView;
