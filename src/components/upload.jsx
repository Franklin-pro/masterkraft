import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const UploadVideo = () => {
  const [upload, setUpload] = useState({
    videoTitle: '',
    videoDescription: '',
    youtubeLink: '',
  });

  const [file, setFile] = useState(null);

  function handleFile(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  function handleUpload() {
    if (!file) {
      console.error('No file selected for upload');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);
    formData.append('videoTitle', upload.videoTitle);
    formData.append('videoDescription', upload.videoDescription);
    formData.append('youtubeLink', upload.youtubeLink);

    fetch('http://localhost:3030/API/video/post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload video');
        }
        return response.json();
      })
      .then((result) => {
        console.log('Video uploaded successfully:', result);
      })
      .catch((error) => {
        console.error('Error uploading video:', error.message);
      });
  }

  const onFinish = () => {
    handleUpload();
  };

  return (
    <>
      <h1>UPLOAD VIDEO</h1>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        encType='multipart/form-data'
      >
        <Form.Item
          label="Upload Video"
          name="video"
          rules={[{ required: true, message: 'Please select a video file' }]}
        >
          <Input type="file" onChange={handleFile} />
        </Form.Item>
        <Form.Item label="Title" name="videoTitle" rules={[{ required: true, message: 'Please enter a title' }]}>
          <Input onChange={(e) => setUpload({ ...upload, videoTitle: e.target.value })} />
        </Form.Item>
        <Form.Item label="Description" name="videoDescription">
          <Input.TextArea onChange={(e) => setUpload({ ...upload, videoDescription: e.target.value })} />
        </Form.Item>
        <Form.Item label="Youtube Link" name="youtubeLink">
          <Input onChange={(e) => setUpload({ ...upload, youtubeLink: e.target.value })} />
        </Form.Item>
        <Form.Item>
          <div className="btn">
            <Button type="primary" htmlType="submit">
              UPLOAD VIDEO
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadVideo;
