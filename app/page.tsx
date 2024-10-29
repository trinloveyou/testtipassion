"use client";

import React, { useState } from 'react';
import {
  CopyOutlined,
  FileDoneOutlined,
  ProductOutlined,
  LogoutOutlined,
  FileMarkdownOutlined,
  ContainerOutlined,
  DashboardOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  FileExclamationOutlined,
  ClusterOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
  DatabaseOutlined,
  UserOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button, Form, Input, Select, Space, Table, Tag } from 'antd';
import { MenuItemType, ItemType } from 'rc-menu/lib/interface';

const { Content, Sider } = Layout;
const { Option } = Select;


const columns = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () =>
      <a>
        <EditOutlined />
      </a>
  },
  {
    title: 'ลำดับ',
    dataIndex: 'number',
    key: 'number',
    render: (text: any, record: any, index: number) => index + 1, // Auto-generate row number
  },
  {
    title: 'ชื่อนามสกุล',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'อีเมล',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'คณะ/หน่วยงาน',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: 'เบอร์โทร',
    dataIndex: 'numberphone',
    key: 'numberphone',
  },
  {
    title: 'สถานะ',
    dataIndex: 'tags',
    key: 'status',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color;
          if (tag === 'ใช้งาน') {
            color = 'green'; // Set green for "ใช้งาน"
          } else if (tag === 'ไม่ใช้งาน') {
            color = 'red'; // Set volcano color for "ไม่ใช้งาน"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'นพดล ศรีสุข',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '123',
    tags: ['ใช้งาน'],
  },
  {
    key: '2',
    name: 'สมชาย สุขใจ',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '989',
    tags: ['ไม่ใช้งาน'],
  },
  {
    key: '3',
    name: 'สุนีย์ จันทร์ฉาย',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '5555',
    tags: ['ไม่ใช้งาน'],
  },
  {
    key: '4',
    name: 'กิตติ พูลผล',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '666',
    tags: ['ใช้งาน'],
  },
  {
    key: '5',
    name: 'พรทิพย์ พัฒนชัย',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '777',
    tags: ['ใช้งาน'],
  },
  {
    key: '6',
    name: 'สุขใจ ขวัญเจริญ',
    email: 'indy@432.com',
    group: 'กองแผนงาน',
    numberphone: '888',
    tags: ['ใช้งาน'],
  },
];

const menuItems = [
  { key: '1', icon: <ProductOutlined />, label: 'Dashboard' },
  { type: 'divider' },
  { key: 'planning', label: 'Planning', disabled: true },
  { key: '2', icon: <CopyOutlined />, label: 'แผนกลยุทธ์' },
  { key: '3', icon: <FileDoneOutlined />, label: 'แผนปฎิบัติการ' },
  { key: '4', icon: <FileExclamationOutlined />, label: 'แผนบริหารความเสี่ยง' },
  { key: '5', icon: <FieldTimeOutlined />, label: 'ประเด็นเร่งด่วน' },
  { key: '6', icon: <ClusterOutlined />, label: 'จุดเน้นคณะวิชา/ส่วนงาน' },
  { type: 'divider' },
  { key: 'Budgeting', label: 'Budgeting', disabled: true },
  { key: '7', icon: <FileMarkdownOutlined />, label: 'ประมาณรายรับ' },
  { key: '8', icon: <DollarOutlined />, label: 'การจัดทำรายจ่าย' },
  { type: 'divider' },
  { key: 'Report', label: 'Report', disabled: true },
  { key: '9', icon: <ContainerOutlined />, label: 'รายงาน' },
  { type: 'divider' },
  { key: 'Tracking', label: 'Tracking', disabled: true },
  { key: '10', icon: <EnvironmentOutlined />, label: 'ติดตามโครงการ' },
  { key: '11', icon: <DashboardOutlined />, label: 'ติดตามตัวชี้วัด' },
  { type: 'divider' },
  { key: 'Management', label: 'Management', disabled: true },
  { key: '12', icon: <DatabaseOutlined />, label: 'ข้อมูลตั้งต้น' },
  { key: '13', icon: <UserOutlined />, label: 'ตัวจัดสิทธิ์และผู้ใช้งาน' },
];

const FirstLayout = ({ collapsed, onCollapse }: { collapsed: boolean, onCollapse: (collapsed: boolean) => void }) => (
  <Sider collapsed={collapsed} onCollapse={onCollapse} width={250}>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      {!collapsed ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Silpakorn_University_Logo_02.png"
            alt="Silpakorn University"
            style={{ width: '130px', borderRadius: '8px', marginBottom: '10px', backgroundColor: 'white' }}
          />
          <LeftSquareOutlined onClick={() => onCollapse(true)} style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>
      ) : (
        <RightSquareOutlined onClick={() => onCollapse(false)} style={{ fontSize: '24px', cursor: 'pointer' }} />
      )}
    </div>
    <Menu mode="inline" defaultSelectedKeys={['1']} items={menuItems as ItemType<MenuItemType>[]} />
  </Sider>
);

const SecondLayout = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout style={{ padding: '0 6px 6px' }}>
      <Content style={{ padding: 6, background: 'white', borderRadius: 6 }}>
        <p>ค้นหา</p>
        <br></br>
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          layout="inline"
          style={{ display: 'flex', gap: '12px' }}
        >
          <Form.Item name="note" rules={[{ required: true }]}>
            <span>ชื่อ/นามสกุล/อีเมล</span>
            <Input size="middle" />
          </Form.Item>
          <Form.Item name="faculty" rules={[{ required: true }]} style={{ marginBottom: '10px' }} >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '4px' }}>คณะ/หน่วยงาน</label>
              <Select
                size="middle"
                placeholder="ทั้งหมด"
                allowClear
                style={{ width: '250px', marginTop: '-4px' }} // ปรับความกว้างตามต้องการ
              >
                <Option value="BCA">BCA</Option>
              </Select>
            </div>
          </Form.Item>
          <Form.Item name="status" rules={[{ required: true }]} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '4px' }}>สถานะ</label>
              <Select
                size="middle"
                placeholder="ใช้งาน"
                allowClear
                style={{ width: '250px', marginTop: '-4px' }} // ปรับ marginTop ที่นี่
              >
                <Option value="ดำเนินการ">ดำเนินการ</Option>
              </Select>
            </div>
          </Form.Item>


          <Space>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}> {/* ปรับค่า marginTop ตามต้องการ */}
              <Button
                size="middle"
                type="primary"
                htmlType="submit"
                style={{ flex: 1, width: '120px' }}
              >
                ค้นหา
              </Button>
              <Button
                size="middle"
                htmlType="button"
                onClick={onReset}
                style={{ flex: 1, width: '120px' }}
              >
                ล้างข้อมูล
              </Button>
            </div>





          </Space>
        </Form>
      </Content>
    </Layout >
  );
};

const ThirdLayout = () => (
  <Layout style={{ padding: '0 6px 6px' }}>
    <Content style={{ padding: 6, background: 'white', borderRadius: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px', margin: '20px 0' }}>รายการจัดการผู้ใช้งาน</h2>
        <Button type="primary" style={{ backgroundColor: 'green', borderColor: 'green' }}>+ เพิ่มผู้ใช้งาน</Button>
      </div>
      <div style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </Content>
  </Layout>
);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <FirstLayout collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '14px 0', padding: '0 16px' }}>
            <Breadcrumb
              items={[
                { title: 'สมรัก ภักดี' },
                { title: <LogoutOutlined /> },
              ]}
            />
          </div>
        </div>
        <br></br>
        <h1 style={{ fontSize: '24px', color: 'black', marginLeft: '14px' }}>จัดการผู้ใช้งาน (User Management)</h1>
        <br></br>
        <SecondLayout />
        <ThirdLayout />
      </Layout>
    </Layout>
  );
};

export default App;
