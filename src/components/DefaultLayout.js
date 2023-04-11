import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    FileImageOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

function DefaultLayout(props) {

    const user = JSON.parse(localStorage.getItem("Pdfedit-user"))
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = "/login"
    }

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}>
                        <Menu.Item key="/" icon={<HomeOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <hr style={{ margin: '5px' }} />
                        <Menu.Item key="/mypapers" icon={<FileImageOutlined />}>
                            <Link to='/mypapers'>My papers</Link>
                        </Menu.Item>
                        <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                            <Link onClick={logout}>Logout</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <div className="flex justify-content-between">
                            <div>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => setCollapsed(!collapsed),
                                })}
                            </div>
                            <div style={{ display: collapsed ? "none" : "inline" }}>
                                {user && (<h5 className="me-2"><b>{user.username}</b></h5>)}
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default DefaultLayout
