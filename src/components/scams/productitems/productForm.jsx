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

const UploadVideo = () => {
  const [upload, setUpload] = useState({
    productName: '',
    quantityAvailable: '',
    serialNumber: '',
    productPrice:'',
  });

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    setUpload({
      ...upload,
      productImage: event.target.files[0],
    });
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productName', upload.productName);
    formData.append('quantityAvailable', upload.quantityAvailable);
    formData.append('serialNumber', upload.serialNumber);
    formData.append('productPrice', upload.productPrice);

    fetch('https://localhost:2000/API/product/post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('success', result);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  const onFinish = () => {
    console.log(upload);
    handleUpload();
  };

  return (
    <>
      <h1>UPLOAD PRODUCT</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item
          label="Upload-Image"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="file" name="productImage" onChange={handleFile} />
        </Form.Item>
        <Form.Item label="productName" rules={[{ required: true }]}>
          <Input name="productName" onChange={(e) => setUpload({ ...upload, productName: e.target.value })} />
        </Form.Item>
        <Form.Item label="quantityAvailable">
          <Input name="quantityAvailable" onChange={(e) => setUpload({ ...upload, quantityAvailable: e.target.value })} />
        </Form.Item>
        <Form.Item label="serialNumber">
          <Input name="serialNumber" onChange={(e) => setUpload({ ...upload, serialNumber: e.target.value })} />
        </Form.Item>
        <Form.Item label="productPrice">
          <Input name="productPrice" onChange={(e) => setUpload({ ...upload, productPrice: e.target.value })} />
        </Form.Item>
        <Form.Item>
          <div className="btn">
            <Button type="primary" htmlType="submit">
              UPLOAD-PRODUCT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadVideo;
