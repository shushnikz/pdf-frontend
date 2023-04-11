import React, { useState } from 'react';
import { Button, Col, Form, Input, message, Row, Spin } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {

    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        setLoading(true)
        try {
            await axios.post("https://pdf-edit-backend.onrender.com/register", values)
            setLoading(false)
            message.success("registration successfull")
        } catch (error) {
            setLoading(false)
            message.error("registration failed")
        }
    }


    return (
        <div className="register">
            {loading && (<Spin size='large' />)}

            <Row justify='center' className="flex align-items-center">

                <Col lg={10} sm={24} className="bs p-5 m-5 register-form">
                    <h3>User Registration Page</h3>
                    <hr />
                    <Form layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item label="name" name="name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input type='password' />
                        </Form.Item>
                        <Form.Item label="email" name="email" rules={[{ required: true }]}>
                            <Input type='email' />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Register</Button>
                        <br></br>
                        <Link to="/login">Already registered? Click here to Login</Link>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}
