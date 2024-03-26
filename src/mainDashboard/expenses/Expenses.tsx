import {Table, Tag} from 'antd';
import React from 'react';
import {ExpensesCategory} from "./enums";

const {Column} = Table;

interface DataType {
    key: React.Key;
    id: string;
    amount: number;
    purchaseDate: string;
    category: ExpensesCategory;
}

const Expenses = () => {

    const data: DataType[] = [
        {
            "key": "4c158b34-4368-4310-a71c-4c9197054a72",
            "id": "4c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 300,
            "purchaseDate": "2010-02-03T15:00:00.001Z",
            "category": ExpensesCategory.FUN
        },
        {
            "key": "5c158b34-4368-4310-a71c-4c9197054a72",
            "id": "5c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 3000,
            "purchaseDate": "2010-02-03T15:10:00.001Z",
            "category": ExpensesCategory.FOR_LIFE
        },
        {
            "key": "6c158b34-4368-4310-a71c-4c9197054a72",
            "id": "6c158b34-4368-4310-a71c-4c9197054a72",
            "amount": 3000,
            "purchaseDate": "2010-02-23T17:00:00.001Z",
            "category": ExpensesCategory.OTHERS
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
                            return (
                                <Tag color={color} key={category}>
                                    {ExpensesCategory[category]}
                                </Tag>
                            );
                        }}
                />
                <Column title="Kwota" dataIndex="amount" key="amount"/>
                <Column title="Data" dataIndex="purchaseDate" key="date"/>
            </Table>
        </div>
    )
}

export default Expenses;