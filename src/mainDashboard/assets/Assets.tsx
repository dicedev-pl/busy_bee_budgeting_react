import {Table, Tag} from 'antd';
import React from 'react';


enum AssetsCategory {
    SALARY,
    BONUS,
    LOAN_RETURNED,
    RENT,
    OTHER,
}

interface DataType {
    key: React.Key;
    id: string;
    amount: number;
    incomeDate: string;
    category: AssetsCategory;
}

const {Column, ColumnGroup} = Table;

const Assets = () => {

    const data: DataType[] = [
        {
            "key": "4c158b34-4368-4310-a71c-4c9197054a72",
            "id": "4c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 300,
            "incomeDate": "2010-02-03T15:00:00.001Z",
            "category": AssetsCategory.SALARY
        },
        {
            "key": "5c158b34-4368-4310-a71c-4c9197054a72",
            "id": "5c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 3000,
            "incomeDate": "2010-02-03T15:10:00.001Z",
            "category": AssetsCategory.RENT
        },
        {
            "key": "6c158b34-4368-4310-a71c-4c9197054a72",
            "id": "6c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 3000,
            "incomeDate": "2010-02-23T17:00:00.001Z",
            "category": AssetsCategory.BONUS
        },
    ];


    return (
        <div>
            <Table dataSource={data}>
                <Column title="Kategoria" dataIndex="category" key="category"
                        render={(category) => {
                            let color = 'green';
                            if (category === 1) color = 'blue';
                            if (category === 2) color = 'grey';
                            if (category === 3) color = 'lightblue';
                            if (category === 4) color = 'red';
                            return (
                                <Tag color={color} key={category}>
                                    {AssetsCategory[category]}
                                </Tag>
                            );
                        }}
                />
                <Column title="Kwota" dataIndex="amount" key="amount"/>
                <Column title="Data" dataIndex="incomeDate" key="date"/>
            </Table>
        </div>
    )
}

export default Assets;