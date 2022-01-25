import React from "react";
import "../../sass/chat_sass/chat_nav.sass";
import {
    faHome,
    faCommentDots,
    faUser,
    faBell,
    faCog,
    faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const ChatNav = ({ FontAwesomeIcon }) => {
    return (
        <div className="ChatNav">
            <div className="profile">
                <img
                    src="https://i1.sndcdn.com/artworks-yLb43YcD3dvijU49-tp7T1w-t500x500.jpg"
                    alt="img"
                    className="profile_img"
                />
                <div className="profile_name">Almaz Balgali</div>
            </div>
            <ul className="chat_navigation">
                <li className="chat_navigation_elem">
                    <FontAwesomeIcon
                        icon={faHome}
                        className="chat_navigation_elem_icon"
                    />
                    Home
                </li>
                <li className="chat_navigation_elem">
                    <FontAwesomeIcon
                        icon={faCommentDots}
                        className="chat_navigation_elem_icon"
                    />
                    Chat
                </li>
                <li className="chat_navigation_elem">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="chat_navigation_elem_icon"
                    />
                    Contact
                </li>
                <li className="chat_navigation_elem">
                    <FontAwesomeIcon
                        icon={faBell}
                        className="chat_navigation_elem_icon"
                    />
                    Notification
                </li>
                <li className="chat_navigation_elem">
                    <FontAwesomeIcon
                        icon={faCog}
                        className="chat_navigation_elem_icon"
                    />
                    Settings
                </li>
            </ul>
            <button className="logout">
                <FontAwesomeIcon
                    icon={faPowerOff}
                    className="chat_navigation_elem_icon"
                />
                log out
            </button>
        </div>
    );
};

export default ChatNav;
