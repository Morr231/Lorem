import React, { useState } from "react";

import "../sass/login_sass/login.sass";

import LoginHeader from "./login_modules/login_header";
import LoginMain from "./login_modules/login_main";
import LoginAs from "./login_modules/login_as";

const Login = () => {
    const [sign, setSign] = useState(false);

    return (
        <div className="Login">
            <LoginHeader sign={sign} />
            <LoginMain sign={sign} setSign={setSign} />
            <LoginAs />
        </div>
    );
};

export default Login;
