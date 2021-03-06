import React, { FC } from 'react';
import logo from '../assets/styles/logo.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../assets/styles/App.scss';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
//import { Header } from 'antd/lib/layout/layout';
const { Header, Sider, Content, Footer} = Layout;
const { SubMenu } = Menu;

const App: FC = () => (
  <div>
      <Layout className="layout" style={{ minHeight: '100vh'}}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">主页</Menu.Item>
            <Menu.Item key="2">归档</Menu.Item>
            <Menu.Item key="3">工具箱</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{minHeight: '72vh' }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by Furo</Footer>
      </Layout>
    </div>
);

export default App;
