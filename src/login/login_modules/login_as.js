import React from "react";
import "../../sass/login_sass/login_as.sass";

import LoginAsPerson from "./login_as_person";
import personImage from "../../img/keep_going.jpg";

const LoginAs = () => {
    return (
        <div className="LoginAs">
            <div className="loginAs-header">Login as</div>

            <div className="loginAs-people">
                <LoginAsPerson
                    personImage={personImage}
                    personName={"John Peter"}
                    personActive={"Active 1 days ago"}
                />
                <LoginAsPerson
                    personImage={personImage}
                    personName={"Alina Shmen"}
                    personActive={"Active 4 days ago"}
                />
            </div>
        </div>
    );
};

export default LoginAs;
