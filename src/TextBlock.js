// TextBlock.js
import React, { useState } from 'react';
import { Input } from 'antd';
import './App.css'; // Import CSS file

const { TextArea } = Input;

const TextBlock = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="text-block">
      <TextArea
        className="text-area"
        rows={4}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextBlock;
