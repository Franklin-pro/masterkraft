import React from 'react';
import { Button, Form, Input } from 'antd';
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
const ProductForm = () => (
    <>
 <h1>ADD ITEMS</h1>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
  
  >
    <Form.Item
      
      label="Upload-Image"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input type='file'/>
    </Form.Item>
    <Form.Item
      
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="Quality"
   
    >
      <Input />
    
 
    
    </Form.Item>
    <Form.Item
      label="Price"
   
    >
      <Input />
    
 
    
    </Form.Item>
    <Form.Item
      label="Serial-number"
   
    >
      <Input />
    
 
    
    </Form.Item>
  
 

    <Form.Item>
<div className='btn'>
<Button type="primary" htmlType="submit" >
        ADD-ITEMS
      </Button>
</div>
      
    </Form.Item>
  </Form>
    </>
   
);
export default ProductForm;