import React from "react";
import "../../sass/chat_sass/chat_main.sass";

import ChatElem from "./chat_elem";

const ChatMain = () => {
    return (
        <div className="ChatMain">
            <div className="above_chats">
                <div className="naming">
                    <h1 className="chats">Chats</h1>
                    <div className="recent_chats">Recent Chats</div>
                </div>
                <button className="create_new_chat">+ Create New Chat</button>
            </div>

            <div className="search">
                <form className="search_chats">
                    <input
                        type="text"
                        id="search_chats_input"
                        placeholder="Search"
                    />
                </form>
                <div className="search_selector">Messages</div>
            </div>

            <ChatElem />
            <ChatElem />
            <ChatElem />
        </div>
    );
};

export default ChatMain;
