import {Button, DatePicker, Input, Layout, Table} from 'antd';
import React, {useState} from "react";
import {AssetsCategory} from "../enums";
import dayjs from "dayjs";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import useEnumToOption from "../../../hooks/useEnumToOption";

const {Header, Content, Footer} = Layout;

type AssetsTableSource = {
    key: string
}

const AddAssets = () => {
    const [rowNumber, setRowNumber] = useState<number>(0);
    const [assetsSourceAdd, setAssetsSourceAdd] = useState<AssetsTableSource[]>([{
        key: `0`
    }])
    const {formattedAntOption} = useEnumToOption();

    const onClickAddRow = () => {
        setRowNumber(rowNumber + 1);
        setAssetsSourceAdd([...assetsSourceAdd, {key: `${rowNumber + 1}`}]);
    }

    const onClickDeleteRow = (key: string) => {
        setAssetsSourceAdd(oldAssetsSourceAdd => {
            return oldAssetsSourceAdd.filter(a => a.key !== key)
        });
    }

    const assetsColumns = [
        {
            title: "Kategoria",
            dataIndex: "category",
            render: (_, row) => {
                return (formattedAntOption(AssetsCategory))
            }
        }, {
            title: "Kwota",
            dataIndex: "amount",
            render: (_, row) => {
                return (<>
                    <Input defaultValue="0.00" style={{width: '100%'}}/>
                </>)
            }
        }, {
            title: "Data",
            dataIndex: "assetsDate",
            render: (_, row) => {
                return (<>
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                        style={{width: 180}}
                        onOk={(e) => console.log(e)}
                    />
                </>)
            }
        }, {
            title: "Akcje",
            dataIndex: "actions",
            render: (_, row) => {
                return (<>
                    <Button danger icon={<MinusCircleOutlined/>} onClick={() => onClickDeleteRow(row.key)}/>
                </>)
            }
        }
    ];

    return (
        <Layout>
            <Header>
                <Button type="primary" icon={<PlusOutlined/>} onClick={onClickAddRow}>
                    Dodaj nowy przychód
                </Button>
            </Header>
            <Content style={{margin: '10px'}}>
                <Table columns={assetsColumns} dataSource={assetsSourceAdd}/>
            </Content>
            <Footer>
                <Button type="primary" icon={<PlusOutlined/>} onClick={onClickAddRow}>
                    Zapisz
                </Button>
            </Footer>
        </Layout>
    )
}

export default AddAssets;