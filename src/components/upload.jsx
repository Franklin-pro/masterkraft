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
    videoTitle: '',
    videoDescription: '',
    youtubeLink: '',
  });

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    setUpload({
      ...upload,
      video: event.target.files[0],
    });
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('videoTitle', upload.videoTitle);
    formData.append('videoDescription', upload.videoDescription);
    formData.append('youtubeLink', upload.youtubeLink);

    fetch('https://localhost:2000/API/video/post', {
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
      <h1>UPLOAD VIDEO</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item
          label="Upload-video"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="file" name="video" onChange={handleFile} />
        </Form.Item>
        <Form.Item label="Title" rules={[{ required: true }]}>
          <Input name="videoTitle" onChange={(e) => setUpload({ ...upload, videoTitle: e.target.value })} />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="videoDescription" onChange={(e) => setUpload({ ...upload, videoDescription: e.target.value })} />
        </Form.Item>
        <Form.Item label="Youtube-Link">
          <Input name="youtubeLink" onChange={(e) => setUpload({ ...upload, youtubeLink: e.target.value })} />
        </Form.Item>
        <Form.Item>
          <div className="btn">
            <Button type="primary" htmlType="submit">
              UPLOAD-VIDEO
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadVideo;
