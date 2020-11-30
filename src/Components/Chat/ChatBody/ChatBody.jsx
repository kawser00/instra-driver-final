import React from 'react';
import './ChatBody.css';
import tickMark from '../../../Assets/icons/tick-mark.png';
import tickBlack from '../../../Assets/icons/tick-black.png';
import deleteIcon from '../../../Assets/icons/delete.png';
import singleTick from '../../../Assets/icons/single-tick.png';


const ChatBody = () => {
  return (
    <div className="chatBody chatBox-style row p-4">
        <div className="col-md-12">
          <p className="id ml-auto pr-0">Chat ID: 3362Gd2</p>
          <div>
            <div className="text-box bg-blue w-75 p-4"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio corrupti laudantium quisquam id nam sit ullam repudiandae placeat illo. Eligendi enim facere, hic odit mollitia est aut tenetur earum officia officiis quasi deleniti minus fugit? Culpa dolorum fugiat pariatur dolor et natus repellendus itaque illo sit tempora provident cumque voluptatem eligendi, aspernatur deleniti magnam laboriosam modi quae beatae excepturi accusamus ducimus! Amet assumend</small></div>
            <span style={{ color: "#C4C4C4" }} className="font-weight-bold">11 a.m</span>
          </div>
          <div className="mb-5">
            <div className="text-box bg-pink w-75 p-4 mt-5 ml-auto"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio corrupti laudantium quisquam id nam sit ullam repudiandae placeat illo. Eligendi enim facere</small></div>
            <div className="text-right"><span style={{ color: "#C4C4C4" }} className=" font-weight-bold">11.30 a.m <img src={tickMark} alt="" /></span></div>
          </div>
          <div>
            <div className="text-box bg-blue w-50 p-4"><small>Lorem ipsum dolor</small></div>
            <span style={{ color: "#C4C4C4" }} className="font-weight-bold">11.33 a.m</span>
          </div>
          <div className="mb-5">
            <div className=" d-flex align-items-center">
              <small className="text-box bg-pink w-75 p-4 mt-5 ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio corrupti laudantium quisquam id nam sit ullam repudiandae placeat illo. Eligendi enim facere</small>
              <img className="mt-5 ml-2" src={deleteIcon} alt="" />
            </div>
            <div className="text-right"><span style={{ color: "#C4C4C4" }} className=" font-weight-bold">11.40 a.m <img src={tickBlack} alt="" /></span></div>
          </div>
          <div className="">
            <div className=" d-flex align-items-center">
              <small className="text-box bg-pink w-50 p-4 mt-5 ml-auto">Lorem ipsum dolor</small>
              <img className="mt-5 ml-2" src={deleteIcon} alt="" />
            </div>
            <div className="text-right mt-5"><span style={{ color: "#C4C4C4" }} className=" font-weight-bold">12.50 p.m<img src={singleTick} alt="" /></span></div>
          </div>
        </div>
      </div>
  );
};

export default ChatBody;