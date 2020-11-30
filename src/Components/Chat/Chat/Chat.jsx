import React from 'react';
import './Chat.css';
import img1 from '../../../Assets/images/img1.png';
import contactImg from '../../../Assets/icons/i.png';
import dots from '../../../Assets/icons/dots.png';
import ChatBody from '../ChatBody/ChatBody';
import ChatFooter from '../ChatFooter/ChatFooter';


const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header d-flex align-items-center justify-content-between mt-4 p-2">
        <div className="chat__headerLeft">
          <img className="" src={img1} alt="" />
          <div>
            <h6 style={{ color: "#3B3B3B", fontSize: "12px" }} className="font-weight-bold mb-0">Shirly Cook</h6>
            <small className="text-muted">@JohntheD</small>
          </div>
        </div>
        <div className="chat__headerInfo container-fluid">
          <h6 style={{ color: "#4B4747", fontSize: "15px", }} className="font-weight-bold">Inquiry relocation from Nairobi</h6>
        </div>
        <div className="chat__headerRight d-flex justify-content-between">
          <button className="btn contact-btn">
            <img className="mr-1 mb-1" src={contactImg} alt="" />Contact Info
          </button>
          <button className="btn">
            <img src={dots} alt="" />
          </button>
        </div>
      </div>
      <div className="chat__body">
        <ChatBody />
      </div>
      <div className="chat__footer bg-white p-4">
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;