// PictureBlock.js
import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css'; // Import CSS file

const PictureBlock = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = info => {
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.url);
    }
  };

  return (
    <div className="picture-block">
      <Upload
        className="upload-btn"
        name="image"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={handleUpload}
      >
        <Button icon={<UploadOutlined />}>Upload Image</Button>
      </Upload>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default PictureBlock;
