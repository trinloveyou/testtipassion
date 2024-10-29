"use client"; // Ensure this is the first line

import React, { useState } from 'react';
import { CopyOutlined, FileDoneOutlined, ProductOutlined, LogoutOutlined, FileMarkdownOutlined, ContainerOutlined, DashboardOutlined } from '@ant-design/icons';
import { LeftSquareOutlined, RightSquareOutlined, FileExclamationOutlined, ClusterOutlined, DollarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { EnvironmentOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key: '1',
    icon: React.cloneElement(<ProductOutlined />, { style: { color: 'gray', fontSize: '15px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>Dashboard</span>
  },
  {
    type: 'divider',
  },
  {
    key: 'planning',
    label: (
      <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>
        Planning
      </span>
    ),
    disabled: true,
  },
  {
    key: '2',
    icon: React.cloneElement(<CopyOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนกลยุทธ์</span>
  },
  {
    key: '3',
    icon: React.cloneElement(<FileDoneOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนปฎิบัติการ</span>
  },
  {
    key: '4',
    icon: React.cloneElement(<FileExclamationOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนบริหารความเสี่ยง</span>
  },
  {
    key: '5',
    icon: React.cloneElement(<FieldTimeOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประเด็นเร่งด่วน</span>
  },
  {
    key: '6',
    icon: React.cloneElement(<ClusterOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>จุดเน้นคณะวิชา/ส่วนงาน</span>
  },
  {
    type: 'divider',
  },
  {
    key: 'Budgeting',
    label: (
      <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>
        Budgeting
      </span>
    ),
    disabled: true,
  },
  {
    key: '7',
    icon: React.cloneElement(<FileMarkdownOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประมาณร่ายรับ</span>
  },
  {
    key: '8',
    icon: React.cloneElement(<DollarOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>การจัดทำรายจ่าย</span>
  },
  {
    type: 'divider',
  },
  {
    key: 'Report',
    label: (
      <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>
        Report
      </span>
    ),
    disabled: true,
  },
  {
    key: '9',
    icon: React.cloneElement(<ContainerOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>รายงาน</span>
  },
  {
    type: 'divider',
  },
  {
    key: 'Tracking',
    label: (
      <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>
        Tracking
      </span>
    ),
    disabled: true,
  },
  {
    key: '10',
    icon: React.cloneElement(<EnvironmentOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ติดตามโครงการ</span>
  },
  {
    key: '11',
    icon: React.cloneElement(<DashboardOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ติดตามตัวชี้วัด</span>
  },
  {
    type: 'divider',
  },
  {
    key: 'Management',
    label: (
      <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>
        Management
      </span>
    ),
    disabled: true,
  },
  {
    key: '12',
    icon: React.cloneElement(<DatabaseOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ข้อมูลตั้งต้น</span>
  },
  {
    key: '13',
    icon: React.cloneElement(<UserOutlined />, { style: { color: 'gray', fontSize: '17px' } }),
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ตัวจัดสิทธิ์และผู้ใช้งาน</span>
  },
];

const FirstLayout: React.FC<{ collapsed: boolean; onCollapse: (value: boolean) => void }> = ({ collapsed, onCollapse }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
      style={{ background: colorBgContainer }}
    >
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {!collapsed && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/88/Silpakorn_University_Logo_02.png"
              alt="Silpakorn University"
              style={{ width: '130px', borderRadius: '8px', marginBottom: '10px' }}
            />
            <div style={{ alignSelf: 'flex-end' }}>
              <LeftSquareOutlined onClick={() => onCollapse(true)} style={{ color: 'black', fontSize: '24px', cursor: 'pointer' }} />
            </div>
          </div>
        )}
        {collapsed && (
          <RightSquareOutlined onClick={() => onCollapse(false)} style={{ color: 'black', fontSize: '24px', cursor: 'pointer' }} />
        )}
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']} items={items2} />
    </Sider>
  );
};

// Second Layout component
const SecondLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          backgroundColor: 'black',
        }}
      >
        Content
      </Content>
    </Layout>
  );
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* First layout with menu sidebar */}
      <FirstLayout collapsed={collapsed} onCollapse={setCollapsed} />

      <Layout>
        <div style={{ maxWidth: '100%', backgroundColor: 'white' }}>
          <div className="breadcrumb-container" style={{ display: 'flex', justifyContent: 'flex-end', margin: '14px 0', padding: '0 16px' }}>
            <Breadcrumb
              items={[
                { title: 'สมรัก ภักดี' },
                { title: <LogoutOutlined /> },
              ]}
            />
          </div>
        </div>

        <br />
        <h1 style={{ fontSize: '25px', color: 'black', marginLeft: '40px' }}>จัดการผู้ใช้งาน (User Management)</h1>
        <br />

        {/* Second layout for content */}
        <SecondLayout />
      </Layout>
    </Layout>
  );
};

export default App;