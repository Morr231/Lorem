import React from "react";
import "../../sass/login_sass/login_as_person.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const LoginAsPerson = ({ personImage, personName, personActive }) => {
    return (
        <div className="LoginAsPerson">
            <div className="loginAs-person_icon">
                <FontAwesomeIcon icon={faTimesCircle} className="timesCircle" />
            </div>
            <img
                src={personImage}
                alt="person"
                className="loginAs-person_img"
            />
            <div className="loginAs-person_name">{personName}</div>
            <div className="loginAs-person_active">{personActive}</div>
        </div>
    );
};

export default LoginAsPerson;
