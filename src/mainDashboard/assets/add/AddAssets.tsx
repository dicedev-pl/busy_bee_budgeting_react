import {Alert, Button, DatePicker, Form, FormProps, Input, Space} from 'antd';
import React from "react";
import {AssetsCategory} from "../enums";
import dayjs from "dayjs";
import {CaretLeftOutlined, MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import useEnumToOption from "../../../hooks/useEnumToOption";
import useAddAssets from "../hooks/useAddAssets";
import {AssetsDto} from "../AssetsModels";

const AddAssets: React.FC<{ userToken: string, setMainView(): void }> = ({userToken, setMainView}) => {
    const [form] = Form.useForm<AssetsDto>()
    const {formattedAntOption} = useEnumToOption();
    const {saved, error, saveAssets} = useAddAssets();

    const onFinish = (formData: FormProps) => {
        saveAssets(formData, userToken);
        setMainView();
    }

    const goBack = () => {
        setMainView();
    }

    const onOk = (a: FormProps) => {
        form.setFieldValue("incomeDate", a.name);
    }

    return (
        <>
            {error &&
                <div>
                    <Alert message="Wystąpił problem" type="error"/>
                    <Alert message="Sprawdź logi BE" type="error"/>
                </div>
            }
            {saved &&
                <div>
                    <Alert message="Przychodzy zostały zapisane poprawnie" type="success"/>
                </div>
            }
            <Button type="dashed" icon={<CaretLeftOutlined/>} onClick={goBack}
                    style={{
                        position: 'relative',
                        marginLeft: '10px',
                    }}>
                Powrót do przychodów
            </Button>
            <Form onFinish={onFinish} {...form}>
                <Form.List name={"assetsList"}>
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, idx) => {
                                return (
                                    <Space key={field.key} direction="horizontal" size={12} style={{}}>
                                        <Form.Item name={[field.name, "category"]} label={`${idx + 1}`}
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: "Podaj Kategorię"
                                                       }
                                                   ]}>
                                            {formattedAntOption(AssetsCategory)}
                                        </Form.Item>
                                        <Form.Item name={[field.name, "amount"]} rules={[
                                            {
                                                required: true,
                                                message: "Niepoprawna kwota"
                                            },
                                            {
                                                pattern: RegExp("^\\d+(\\.\\d+)?$"),
                                                message: "Poprawny format: 123.34 (cyfry kropka cyfry)"
                                            }
                                        ]}>
                                            <Input placeholder="Kwota przychodu"/>
                                        </Form.Item>
                                        <Form.Item name={[field.name, "incomeDate"]}
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: "Wprowadź kwotę"
                                                       }
                                                   ]}>
                                            <DatePicker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                                                style={{width: 180}}
                                                onOk={onOk}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <MinusCircleOutlined style={{height: 40, color: "red"}}
                                                                 onClick={() => remove(field.name)}/>
                                        </Form.Item>
                                    </Space>
                                )
                            })}
                            <Form.Item>
                                <Button type="primary" icon={<PlusOutlined/>} onClick={() => add()}
                                        style={{
                                            position: 'absolute',
                                        }}>
                                    Dodaj nowy przychód
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Button type="primary" icon={<PlusOutlined/>} htmlType="submit"
                        style={{
                            position: 'relative',
                            left: '10px'
                        }}>
                    Zapisz
                </Button>
            </Form>

        </>
    )
}

export default AddAssets;