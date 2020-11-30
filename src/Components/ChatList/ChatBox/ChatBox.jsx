import React from 'react';
import './ChatBox.css';

const ChatBox = (props) => {
  const { img, name, nameId, chatId, title, details, time, color } = props.data
  return (
    <>
      {
        <div className={
          color === "blue" ? "d-flex box-style box-blue" : "d-flex box-gray box-style"}>
          <div className="col-md-4 m-auto text-center chat__left">
            <img src={img} alt="" />
            <div className="">
              <h6 style={{ color: "#3B3B3B" }} className="font-weight-bold mb-0">{name}</h6>
              <small className="text-muted">{nameId}</small>
            </div>
          </div>
          <div className="col-md-8 position-relative chat__right">
            <div >
              <p className="id-style">Chat ID: {chatId}</p>
            </div>
            <h6 style={{ color: "#4B4747" }} className="mt-4 font-weight-bold ">{title}</h6>
            <p style={{ color: "#5B5B5B", marginBottom:"0px" }}>{details}</p>
            <div className="text-right position-relative">
              {
                color === "blue" ?
                  <>
                    <span style={{ color: "#279F2C" }} className="time font-weight-bold">{time}</span>
                    <span className="count">4</span>
                  </>
                  :
                  <>
                    <span style={{ color: "#C4C4C4" }} className="time font-weight-bold">{time}</span>
                    <span></span>
                  </>
              }
            </div>
          </div>
        </div>
      }
    </>

  );
};

export default ChatBox;