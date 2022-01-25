import React from "react";
import "../../../sass/chat_sass/char_msg_comp/char_sender.sass";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ChatSender = ({ message, FontAwesomeIcon }) => {
    return (
        <div className="ChatSender">
            <img
                src="https://i1.sndcdn.com/artworks-yLb43YcD3dvijU49-tp7T1w-t500x500.jpg"
                alt="img"
                className="chat_sender_img"
            />
            <div className="chat_sender_message">{message}</div>
            <div className="chat_sender_more">
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
        </div>
    );
};

export default ChatSender;
