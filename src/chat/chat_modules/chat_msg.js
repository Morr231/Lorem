import React from "react";
import "../../sass/chat_sass/chat_msg.sass";
import {
    faPaperclip,
    faPaperPlane,
    faEllipsisV,
    faSmile,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

import ChatSender from "./chat_msg_comp/chat_sender";
import ChatReceiver from "./chat_msg_comp/chat_receiver";

const ChatMsg = ({ FontAwesomeIcon }) => {
    return (
        <div className="ChatMsg">
            <div className="chat_msg_header">
                <div className="chat_msg_profile">
                    <img
                        src="https://i1.sndcdn.com/artworks-yLb43YcD3dvijU49-tp7T1w-t500x500.jpg"
                        alt="img"
                        className="chat_msg_profile_img"
                    />
                    <div className="chat_msg_profile_info">
                        <div className="chat_msg_profile_info_name">
                            Almaz Balgali
                        </div>
                        <div className="chat_msg_profile_info_status">
                            last online 5 hours ago
                        </div>
                    </div>
                </div>

                <div className="chat_msg_header_buttons">
                    <div className="chat_msg_header_buttons_el">
                        <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                    <div className="chat_msg_header_buttons_el">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
            </div>

            <div className="chat_msg_main">
                <ChatSender
                    message={
                        "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application."
                    }
                    FontAwesomeIcon={FontAwesomeIcon}
                />
                <ChatSender
                    message={"Can I send you files?"}
                    FontAwesomeIcon={FontAwesomeIcon}
                />
                <ChatReceiver
                    message={"Hey! Okay, send out."}
                    FontAwesomeIcon={FontAwesomeIcon}
                />
                <ChatSender
                    message={"Here it is!"}
                    FontAwesomeIcon={FontAwesomeIcon}
                />
                <ChatReceiver
                    message={
                        "Hello! I tweaked everything you asked. I am sending the finished file."
                    }
                    FontAwesomeIcon={FontAwesomeIcon}
                />
            </div>

            <div className="chat_msg_type">
                <div className="chat_msg_type_buttons">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <form className="chat_msg_type_form">
                    <input
                        type="text"
                        className="chat_msg_type_input"
                        placeholder="Type a message here"
                    />
                </form>
                <div className="chat_msg_type_emoji">
                    <FontAwesomeIcon icon={faSmile} />
                </div>
                <div className="chat_msg_type_send">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
};

export default ChatMsg;
