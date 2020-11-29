import React from 'react';
import './ChatListHeader.css'
import filterImg from '../../../Assets/icons/filterImg.png';


const ChatListHeader = () => {
  return (
    <div className="mainBody__chatListHeader d-flex justify-content-center align-items-center">
      <div className="input-group w-75">
        <input className="submit__btn" type="submit" />
        <input className="form-control text-muted search__input" placeholder="Search users,messages or chat id's" type="text" />
      </div>
      <div>
        <a className="filterStyle" href="/#"><img className="ml-3" src={filterImg} alt="" /></a>
      </div>
    </div>
  );
};

export default ChatListHeader;