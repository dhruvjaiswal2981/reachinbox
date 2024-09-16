// src/pages/OneboxPage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import EmailList from '../components/EmailList';
import ReplyEditor from '../components/ReplyEditor';
import './OneboxPage.css'; // Import the CSS file

const OneboxPage = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);

  useEffect(() => {
    axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list')
      .then(response => {
        setEmails(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching emails:", error);
      });
  }, []);

  const handleDelete = (threadId) => {
    axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`)
      .then(() => {
        setEmails(prevEmails => prevEmails.filter(email => email.threadId !== threadId));
      })
      .catch(error => console.error("Error deleting email:", error));
  };

  const handleReply = (threadId, body) => {
    axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
      from: "your-email@example.com",
      to: "recipient@example.com",
      subject: "Reply Subject",
      body
    })
    .then(response => {
      console.log("Reply sent:", response);
      setReplyBoxOpen(false);
      // Optionally refetch emails or update state
    })
    .catch(error => console.error("Error sending reply:", error));
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'D' && selectedEmail) {
      handleDelete(selectedEmail.threadId);
    } else if (event.key === 'R' && selectedEmail) {
      setReplyBoxOpen(true);
    }
  }, [selectedEmail]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="onebox-page">
      <h1 className="onebox-title">ReachInbox</h1>
      <div className="email-list-container">
        <EmailList emails={emails} onSelectEmail={setSelectedEmail} />
      </div>
      {replyBoxOpen && selectedEmail && (
        <ReplyEditor 
          threadId={selectedEmail.threadId} 
          onSave={(body) => handleReply(selectedEmail.threadId, body)} 
          className="reply-editor"
        />
      )}
    </div>
  );
};

export default OneboxPage;
