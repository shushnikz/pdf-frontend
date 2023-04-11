import React, { useState } from 'react'
import { Button, Col, Form, Input, message, Row, Spin } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export const Login = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const user = await axios.post("https://pdf-edit-backend.onrender.com/login", values)
            message.success("Login successfully")
            localStorage.setItem("Pdfedit-user", JSON.stringify(user.data))
            setLoading(false)
            navigate("/")
        } catch (error) {
            setLoading(false)
            message.error("Login failed")
        }
    }


    return (
        <div className='login'>
            {loading && (<Spin size='large' />)}
            <Row justify='center' className="flex align-items-center">
                <Col lg={10} sm={24} className="bs p-5 m-5 login-form">
                    <h3>Login Page</h3>
                    <hr />
                    <Form layout="vertical"

                        onFinish={onFinish}
                    >
                        <Form.Item label="email" name="email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Login</Button>
                        <br></br>
                        <Link to="/register">Not registered? Click here to register</Link>
                        <br></br>
                        <p className='mt-2'>Email : john@gmail.com</p>
                        <p>Password : john123</p>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}