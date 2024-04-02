import logo from "../images/bbb_logo.svg";
import LoginForm from "../loginForm/LoginForm";
import React, {useState} from "react";
import MainDashboard from "../mainDashboard/mainDashboard";

const MainView = () => {
    const [userToken, setUserToken] = useState("");

    return (
        (!userToken &&
            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LoginForm setUserToken={setUserToken}/>
                </div>
            </header>
        ) || (
            <div>
                <MainDashboard userToken={userToken}/>
            </div>
        )
    );
}

export default MainView;
