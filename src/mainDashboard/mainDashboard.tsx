import './mainDashboard.css';
import {Layout, Menu} from 'antd';
import React, {useState} from "react";
import mini_logo from "../images/bbb_mini_logo.svg";
import Assets from "./assets/Assets";
import Expenses from "./expenses/Expenses";


const {Header, Content, Sider, Footer} = Layout;

const MainDashboard: React.FC<{ userToken: string }> = ({userToken}) => {
    const [currentView, setCurrentView] = useState("assets");

    const items = [{
        key: "assets",
        label: "Przychody",
    }, {
        key: "expenses",
        label: "Wydatki",
    }, {
        key: "properties",
        label: "Nieruchomości",
    }];

    const menuChoose = (e: any) => {
        setCurrentView(e.key)
    }

    return (
        <Layout>
            <Header style={{padding: 10}}/>
            <Layout>
                <Sider>
                    <Menu
                        onClick={e => menuChoose(e)}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['assets']}
                        items={items}/>
                </Sider>
                <Content>
                    <div style={{
                        padding: 24,
                        minHeight: 360,
                    }}>
                        {currentView === 'assets' && <Assets userToken={userToken}/>}
                        {currentView === 'expenses' && <Expenses/>}
                    </div>
                </Content>
            </Layout>
            <Footer>
                <img src={mini_logo} className="Mini-logo" alt="mini_logo"/>
                <div style={{
                    padding: 0
                }}>
                    BusyBeeBudgeting
                </div>
            </Footer>
        </Layout>
    )
}

export default MainDashboard;