import {DatePicker, Input, Select, Space} from 'antd';
import React from "react";
import {AssetsCategory} from "../enums";
import dayjs from "dayjs";

const {Option} = Select;

const selectBefore = (
    <Select defaultValue="" style={{width: 180}}>
        {Object.keys(AssetsCategory).filter(key => isNaN(Number(key))).map((key) => (
            <Option value={key}>{key}</Option>
        ))}
    </Select>
);


const AddAssets = () => {
    return (
        <Space direction="vertical">
            <Input addonBefore={selectBefore}
                   addonAfter={<DatePicker
                       format="YYYY-MM-DD HH:mm:ss"
                       showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                       style={{ width: 180 }}
                   />}
                   defaultValue="0.00"
                   style={{ width: '100%' }}/>

        </Space>
    )
}

export default AddAssets;