"use client";

import React, { useState, useRef } from 'react';
import { CopyOutlined, FileDoneOutlined, ProductOutlined, LogoutOutlined, FileMarkdownOutlined, ContainerOutlined, DashboardOutlined } from '@ant-design/icons';
import { LeftSquareOutlined, RightSquareOutlined, FileExclamationOutlined, ClusterOutlined, DollarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { EnvironmentOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Button, Form, Input, Select, Space } from 'antd';

const { Content, Sider } = Layout;
const { Option } = Select;

// Updated menu items with proper icon handling
const items2: MenuProps['items'] = [
  {
    key: '1',
    icon: <ProductOutlined style={{ color: 'gray', fontSize: '15px' }} />,
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
    icon: <CopyOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนกลยุทธ์</span>
  },
  {
    key: '3',
    icon: <FileDoneOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนปฎิบัติการ</span>
  },
  {
    key: '4',
    icon: <FileExclamationOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนบริหารความเสี่ยง</span>
  },
  {
    key: '5',
    icon: <FieldTimeOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประเด็นเร่งด่วน</span>
  },
  {
    key: '6',
    icon: <ClusterOutlined style={{ color: 'gray', fontSize: '17px' }} />,
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
    icon: <FileMarkdownOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประมาณร่ายรับ</span>
  },
  {
    key: '8',
    icon: <DollarOutlined style={{ color: 'gray', fontSize: '17px' }} />,
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
    icon: <ContainerOutlined style={{ color: 'gray', fontSize: '17px' }} />,
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
    icon: <EnvironmentOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ติดตามโครงการ</span>
  },
  {
    key: '11',
    icon: <DashboardOutlined style={{ color: 'gray', fontSize: '17px' }} />,
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
    icon: <DatabaseOutlined style={{ color: 'gray', fontSize: '17px' }} />,
    label: <span style={{ fontSize: '14px', color: '#adadad' }}>ข้อมูลตั้งต้น</span>
  },
  {
    key: '13',
    icon: <UserOutlined style={{ color: 'gray', fontSize: '17px' }} />,
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

const SecondLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    form.setFieldsValue({ note: '' });
  };
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout style={{ padding: '0 6px 6px' }}>
      <Content
        style={{
          padding: 6,
          margin: 0,
          minHeight: 60,
          background: 'white',
          borderRadius: 6,
        }}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Form.Item
            name="note"
            label="ชื่อ/นามสกุล/อีเมล"
            rules={[{ required: true }]}
            style={{ flex: 1, marginBottom: 0 }}
          >
            <Input size="middle" />
          </Form.Item>

          <Form.Item
            name="faculty"
            label="คณะ/หน่วยงาน"
            rules={[{ required: true }]}
            style={{ flex: 1, marginBottom: 0 }}
          >
            <Select
              size="middle"
              placeholder="ทั้งหมด"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="BCA">BCA</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="สถานะ"
            rules={[{ required: true }]}
            style={{ flex: 1, marginBottom: 0 }}
          >
            <Select
              size="middle"
              placeholder="ใช้งาน"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="ดำเนินการ">ดำเนินการ</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginLeft: 4 }}>
            <Space size="small">
              <Button size="middle" type="primary" htmlType="submit">
                ค้นหา
              </Button>
              <Button size="middle" htmlType="button" onClick={onReset}>
                ล้างข้อมูล
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
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

        <SecondLayout />
      </Layout>
    </Layout>
  );
};

export default App;