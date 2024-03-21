import {Layout, Menu} from 'antd';
import React from "react";

const {Header, Content, Sider} = Layout;

const MainDashboard = () => {

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

    return (
        <Layout>
            <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['assets']} items={items}/>
            </Sider>
            <Layout>
                <Header style={{padding: 0}}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainDashboard;