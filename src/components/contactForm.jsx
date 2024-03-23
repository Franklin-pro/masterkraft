import React from 'react';
import { Button, Form, Input,Select } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};




const onFinish = (values) => {
  console.log(values);
};
const Contacts = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
  
  >
    <Form.Item
    
      label="FullName"
    >
      <Input />
    </Form.Item>
    <Form.Item
      
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    
 
    
    </Form.Item>
    <Form.Item
    
      label="School-Name"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    
 
    
    </Form.Item>
    <Form.Item
      
      label="Phone-Number"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    
 
    
    </Form.Item>

    <Form.Item label="Select your province">
        <Select>
          <Select.Option value="east">Eastern province</Select.Option>
          <Select.Option value="west">Western province</Select.Option>
          <Select.Option value="sourth">Sourthern province</Select.Option>
          <Select.Option value="north">Northern province</Select.Option>
          <Select.Option value="kigali">Kigali city</Select.Option>
        </Select>
      </Form.Item>
  
 

    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Contacts;