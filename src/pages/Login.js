import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, InputNumber, Select, Button } from "antd";
import { motion } from 'framer-motion';
import "../style/Login.css";

const { Option } = Select;

export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Form submitted:",);
        try {
            navigate("/home"); // Navigate to home after the last screen
        } catch (error) {
            setError('Invalid credentials. Try again.');
        }
    };
    return (
        <motion.div 
        initial={{ opacity: 0 }} // Fade-in effect
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Fade-out effect
        transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
        
        className="login-container"
        dir="rtl"
        id="root"
        >
            
            <div className="form-container">
                <h1>ברוכים הבאים</h1>

                <Form
                layout="vertical"
                onSubmit={handleSubmit} // Handles form submission
                onFinishFailed={(errorInfo) => {
                    console.log("Validation failed:", errorInfo);
                }}
                >
                    <Form.Item 
                    name="firstName" 
                    label="שם פרטי" 
                    rules={[{ required: true, message: "שדה חובה" }]}
                    >
                        <Input placeholder="הזן את שמך הפרטי" />
                    </Form.Item>

                    <Form.Item 
                    name="lastName" 
                    label="שם משפחה"
                    rules={[{ required: true, message: "שדה חובה" }]}
                    >
                        <Input placeholder="הזן את שם המשפחה שלך" />
                    </Form.Item>

                    <Form.Item 
                    name="age" 
                    label="גיל" 
                    rules={[
                        { required: true, message: "שדה חובה" },
                        { type: "number", min: 0, max: 120, message: "גיל לא תקין" },
                    ]}
                    >
                        <InputNumber placeholder="הזן את גילך" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item 
                    name="gender" 
                    label="מגדר" 
                    rules={[{ required: true, message: "שדה חובה" }]}
                    >
                        <Select placeholder="הזן את המגדר המועדף עליך">
                        <Option value="male">בן</Option>
                        <Option value="female">בת</Option>
                        <Option value="other">אחר/מעדיף לא לומר</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </div>       
            
            <button className='login-btn' onClick={handleSubmit}> 
                בואו נתחיל!
            </button> 

        </motion.div >
    );
}