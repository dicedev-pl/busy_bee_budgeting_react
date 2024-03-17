import React, {useState} from "react";
import {Button, Form, FormProps, Input, Checkbox} from "antd";

function LoginForm() {
    const [addingUser, setAddingUser] = useState(false)

    type FieldType = {
        username?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        if (addingUser) {
            console.log('Adding User:', values);
            fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
        },
                body: JSON.stringify({
                    "username": values.username,
                    "password": values.password
                })
            })
        } else {
            console.log('Success:', values);
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const addUser = (values: React.MouseEvent<HTMLButtonElement>) => {
        console.log('addUser:', values);
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{required: true, message: 'proszę podaj nazwę użytkownika'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'proszę podaj hasło użytkownika'}]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" disabled={addingUser}>
                    Zaloguj
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" disabled={!addingUser}>
                    Dodaj Użytkownika
                </Button>
            </Form.Item>
            <Checkbox
                checked={addingUser}
                onChange={(e) => setAddingUser(e.target.checked)}
            >Dodaj Użytkownika</Checkbox>
        </Form>
    )

}

export default LoginForm;
