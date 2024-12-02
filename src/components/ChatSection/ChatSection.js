import React from "react";
import "./ChatSection.css";

function ChatSection() {
  return (
    <section className="chat-section">
      <div className="chat-header">
        <button className="tab-active">Conversation</button>
        <button className="tab">Address</button>
        <button className="tab">Fee Reversal</button>
        <button className="tab-escalate">Escalate</button>
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="avatar">CB</div>
          <p className="para">Rachel Adams: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message sent">
          <div className="avatar-you">HK</div>
          <p className="para">You: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <img src='https://res.cloudinary.com/drqwanejb/image/upload/v1733104233/tree_ra5puy.png' alt='profile' className="icon"/>
        <button className="btn-send">Send</button>
      </div>
    </section>
  );
}

export default ChatSection;
