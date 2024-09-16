// src/components/EmailList.js
import React from 'react';
import './EmailList.css'; 

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <ul className="email-list">
      {emails.map(email => (
        <li key={email.id} className="email-list-item" onClick={() => onSelectEmail(email)}>
          <div className="email-item-content">
            <div><strong>Subject:</strong> {email.subject}</div>
            <div><strong>From:</strong> {email.fromName} ({email.fromEmail})</div>
            <div><strong>To:</strong> {email.toName} ({email.toEmail})</div>
            <div><strong>Sent At:</strong> {new Date(email.sentAt).toLocaleString()}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmailList;
