import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainBody.css';
import ChatListHeader from '../ChatList/ChatListHeader/ChatListHeader';
import ChatListBody from '../ChatList/ChatListBody/ChatListBody';


const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="row">
        <div className="mainBody__sidebar col-md-2">
          <Sidebar />
        </div>
        <div className="mainBody__chatList col-md-4 px-2 py-4">
          <div className="container-fluid">
            <ChatListHeader />
            <ChatListBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;