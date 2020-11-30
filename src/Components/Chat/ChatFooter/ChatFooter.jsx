import React from 'react';
import './ChatFooter.css';
import attachment from '../../../Assets/icons/Attachment.png';
import emoji from '../../../Assets/icons/emoji.png';
import mic from '../../../Assets/icons/mic.png';
import send from '../../../Assets/icons/send.png';


const ChatFooter = () => {
  return (
    <div className="chatFooter mt-4">
      <div className="chatFooter__input p-2 w-100">
        <form action="">
          <input className="form-control input__style " placeholder="Type a message" type="text" />
        </form>
      </div>
      <div className="chatFoot__bottom d-flex justify-content-between align-items-center">
        <div className="chatFooter__left d-flex justify-content-between align-items-center">
          <span className="btn"><img className="mr-3" src={attachment} alt="" /></span>
          <span className="btn"><img className="mr-3" src={emoji} alt="" /></span>
          <span className="btn"><img className="mr-3" src={mic} alt="" /></span>
        </div>
        <div className="chatFooter__right ">
        <button className="sendIcon btn" type="submit"><img className="" src={send} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;