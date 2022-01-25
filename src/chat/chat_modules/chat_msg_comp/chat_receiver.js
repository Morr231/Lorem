import React from "react";
import "../../../sass/chat_sass/char_msg_comp/chat_receiver.sass";
import { faEllipsisH, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const ChatReceiver = ({ message, FontAwesomeIcon }) => {
    return (
        <div className="ChatReceiver">
            <div className="chat_receiver_more">
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
            <div className="chat_receiver_message">{message}</div>
            <div className="chat_receiver_read">
                <FontAwesomeIcon icon={faCheckDouble} />
            </div>
        </div>
    );
};

export default ChatReceiver;
