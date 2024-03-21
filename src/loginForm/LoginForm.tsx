import React, {useState} from "react";
import {Alert, Button, Checkbox, Form, FormProps, Input, Space} from "antd";
import useTokenApi from "./hooks/useTokenApi";

interface ILoginForm {
    setUserToken(value: string): void;
}

const LoginForm = (props: ILoginForm) => {
    const [addingUser, setAddingUser] = useState(false)
    const {error, saved, saveNewUser, getTokenForUser} = useTokenApi();

    type FieldType = {
        username?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        if (addingUser) {
            saveNewUser(values);
        } else {
            getTokenForUser(values, props.setUserToken);
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Space direction="vertical" style={{width: '100%'}}>
                {error &&
                    <div>
                        <Alert message="Wystąpił problem z użytkownikiem" type="error"/>
                        <Alert message="Może już istnieje - sprawdź logi BE" type="error"/>
                    </div>
                }
                {saved &&
                    <div>
                        <Alert message="Użytkownik dodany" type="success"/>
                    </div>
                }
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
            </Space>
        </div>
    )
}

export default LoginForm;
