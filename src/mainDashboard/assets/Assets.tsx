import {Alert, Button, Table, Tag} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import {AssetsCategory, AssetsCategoryMessage} from "./enums";
import './Assets.css'
import AddAssets from "./add/AddAssets";
import useGetAssets from "./hooks/useGetAssets";


const {Column} = Table;

const Assets: React.FC<{ userToken: string }> = ({userToken}) => {
    const [addView, setAddView] = useState(false)
    const { error, assets, getAssets} = useGetAssets();

    useEffect(() => {
        getAssets(userToken);
    }, [])

    const gotoAddView = () => {
        setAddView(true);
    }

    const gotoMainView = () => {
        setAddView(false);
    }

    return (
        (!addView &&
            <>
                <Button type="primary" onClick={gotoAddView} icon={<PlusOutlined/>}>
                    Dodaj
                </Button>
                {error &&
                    <div>
                        <Alert message="Wystąpił problem" type="error"/>
                        <Alert message="Sprawdź logi BE" type="error"/>
                    </div>
                }
                <Table dataSource={assets}>
                    <Column title="Kategoria" dataIndex="category" key="category"
                            render={(category) => {
                                let color = 'green';
                                if (category === AssetsCategory.RENT) color = 'blue';
                                if (category === AssetsCategory.BONUS) color = 'grey';
                                if (category === AssetsCategory.LOAN_RETURNED) color = 'lightblue';
                                if (category === AssetsCategory.OTHER) color = 'red';
                                return (
                                    <Tag color={color} key={category}>
                                        {AssetsCategoryMessage[category]}
                                    </Tag>
                                );
                            }}
                    />
                    <Column title="Kwota" dataIndex="amount" key="amount"/>
                    <Column title="Data" dataIndex="incomeDate" key="date"/>
                </Table>
            </>) || (
            <>
                <AddAssets userToken={userToken} setMainView={gotoMainView} />
            </>
        )
    )
}

export default Assets;