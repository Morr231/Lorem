import React from "react";
import "../sass/chat_sass/chat.sass";
import ChatNav from "./chat_modules/chat_nav";
import ChatMain from "./chat_modules/chat_main";
import ChatMsg from "./chat_modules/chat_msg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chat = () => {
    return (
        <div className="Chat">
            <ChatNav FontAwesomeIcon={FontAwesomeIcon} />
            <ChatMain />
            <ChatMsg FontAwesomeIcon={FontAwesomeIcon} />
        </div>
    );
};

export default Chat;
