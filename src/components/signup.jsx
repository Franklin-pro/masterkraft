import React from 'react';
import { Button, Form, Input} from 'antd';
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
const SignUp = () => (
    <>
    <div className='form-containerx'>
<div className='form'>
<h1>sign up form</h1>
<Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
  className='formx'
  >
    <Form.Item
      label="FirstName"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
   
      label="LastName"
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
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm-Password"
      name="confirm-password"
   
    >
      <Input.Password />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
       SIGN-UP
      </Button>
    </Form.Item>
  </Form>
</div>
    </div>

    </>
 
);
export default SignUp;