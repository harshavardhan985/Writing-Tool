// BlockManager.js
import React, { useState } from 'react';
import TextBlock from './TextBlock';
import PictureBlock from './PictureBlock';

const BlockManager = () => {
  const [blocks, setBlocks] = useState([]);

  const addTextBlock = () => {
    setBlocks([...blocks, <TextBlock key={blocks.length} />]);
  };

  const addPictureBlock = () => {
    setBlocks([...blocks, <PictureBlock key={blocks.length} />]);
  };

  return (
    <div className="block-manager">
      <button onClick={addTextBlock}>Add Text Block</button>
      <button onClick={addPictureBlock}>Add Picture Block</button>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <div key={index}>{block}</div>
        ))}
      </div>
    </div>
  );
};

export default BlockManager;
