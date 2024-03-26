import {ScheduleOutlined} from '@ant-design/icons';
import {Input, Select, Space} from 'antd';
import React from "react";
import {AssetsCategory} from "../enums";

const {Option} = Select;

const selectBefore = (
    <Select defaultValue="" style={{ width: 180 }}>
        {Object.keys(AssetsCategory).filter(key => isNaN(Number(key))).map((key) => (
            <Option value={key}>{key}</Option>
        ))}
    </Select>
);

const AddAssets = () => {
    return (
        <Space direction="vertical">
            <Input addonBefore={selectBefore} addonAfter={<ScheduleOutlined/>} defaultValue="0.00"/>
        </Space>
    )
}

export default AddAssets;