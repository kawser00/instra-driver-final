import React, { useState } from 'react';
import './ChatListBody.css';
import chatData from '../../ChatData/ChatData';
import ChatBox from '../ChatBox/ChatBox';


const ChatListBody = () => {
  const [chatItem] = useState(chatData)

  return (
    <div className="chatListBody shadow mt-4">
      {
        chatItem.map(data => <ChatBox data={data} key={data.key}></ChatBox>)
      }
    </div>
  );
};

export default ChatListBody;