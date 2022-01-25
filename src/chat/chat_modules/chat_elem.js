import React from "react";
import "../../sass/chat_sass/chat_elem.sass";

const ChatElem = () => {
    return (
        <div className="ChatElem">
            <div className="chat_elem_info">
                <div className="chat_elem_profile">
                    <img
                        src="https://i1.sndcdn.com/artworks-yLb43YcD3dvijU49-tp7T1w-t500x500.jpg"
                        alt="img"
                        className="chat_elem_profile_img"
                    />
                    <div className="chat_elem_profile_info">
                        <div className="chat_elem_profile_info_name">
                            Almaz Balgali
                        </div>
                        <div className="chat_elem_profile_info_status">
                            last online 5 hours ago
                        </div>
                    </div>
                </div>
                <div className="chat_elem_last_message_time">1 minute ago</div>
            </div>
            <div className="chat_elem_last_message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    );
};

export default ChatElem;
