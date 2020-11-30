import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainBody.css';
import ChatListHeader from '../ChatList/ChatListHeader/ChatListHeader';
import ChatListBody from '../ChatList/ChatListBody/ChatListBody';
import Chat from '../Chat/Chat/Chat';


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
        <div className="mainBody__chat col-md-6 px-2 py-4">
          <div className="container-fluid">
            <div className="mainBody__chatTop text-right">
              <button className="btn chat__btn">+ Start a new chat</button>
            </div>
            <div className="mainBody__chatBody">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;