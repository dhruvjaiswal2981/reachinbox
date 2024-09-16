// src/components/ReplyEditor.js
import React, { useState } from 'react';
import './ReplyEditor.css'; 

const ReplyEditor = ({ threadId, onSave }) => {
  const [body, setBody] = useState("<p>Reply here...</p>");

  const handleSave = () => {
    onSave(body);
  };

  return (
    <div className="reply-editor">
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        rows="10"
        className="reply-editor-textarea"
      />
      <button onClick={handleSave} className="reply-editor-button">Send Reply</button>
    </div>
  );
};

export default ReplyEditor;
