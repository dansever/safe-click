import React from "react";
import { Form, InputNumber, Select, Input, Button} from 'antd';
import "../style/Login.css";

const { Option } = Select;

const formLayout = {
    layout: "vertical",
    initialValues: { gender: "" },
  };

export default function Login() {  
    const handleFinish = (values) => {
        console.log("Form submitted:", values);
      };

    return (
        <main id="root" dir="rtl">
            <div className="form-container">
                <h1>ברוכים הבאים</h1>
                <Form {...formLayout} onFinish={handleFinish}>

                    <Form.Item
                        name='firstName'
                        label="שם פרטי"
                        rules={[{required: true, message: 'שדה חובה'},]}>
                        <Input placeholder="הזן את שמך הפרטי"/>
                    </Form.Item>

                    <Form.Item
                        name='lastName'
                        label="שם משפחה"
                        rules={[{required: true, message: 'שדה חובה'},]}>
                        <Input placeholder="הזן את שם המשפחה שלך"/>

                    </Form.Item>
                                
                    <Form.Item
                        name="age"
                        label="גיל"
                        rules={[
                            {required: true, message: 'שדה חובה'},
                            {type: 'number', min: 0, max: 120, message: "גיל לא תקין"},
                        ]}>
                        </>
                    </Form.Item>
                    
                    <Form.Item
                    name="gender"
                    label="מגדר"
                    rules={[{required: true, message: 'שדה חובה'},
                            ]}>
                        <Select placeholder="הזן את המגדר המועדף עליך" >
                            <Option style={{direction: "rtl"}} value="male">בן</Option>
                            <Option style={{direction: "rtl"}} value="female">בת</Option>
                            <Option style={{direction: "rtl"}} value="other">אחר/מעדיף לא לומר</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                    שלח
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </main>
    );
};