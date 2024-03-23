import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const onFinish = (values) => {
    console.log('Received values:', values);
    fetch(`http://127.0.0.1:3030/API/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (response.ok) {
          console.log(response.status)
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
       alert('Response:', data.response.message);
        
      })
      .catch(error => {
        console.error('Error during fetch:', error);
        // Handle error here
      });
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <div className='form-containerx'>
      <div className='form'>
        <h1>sign up form</h1>
        <Form
          {...layout}
          name="nest-messages"
          initialValues={formData}
          onFinish={onFinish}
          onValuesChange={onFormChange}
          style={{
            maxWidth: 600,
          }}
          className='formx'
        >
          <Form.Item
            name="firstname"
            label="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="LastName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Please input a valid email!',
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Confirm-Password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
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
  );
};

export default SignUp;
