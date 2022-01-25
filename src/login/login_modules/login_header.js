import React from "react";
import "../../sass/login_sass/login_header.sass";
import login_hero from "../../img/login_page/login_hero.png";

const LoginHeader = ({ sign }) => {
    return (
        <div className="LoginHeader">
            <div className="login-header_logo">Your Logo</div>
            <div className="login-header_description">
                {sign == false && <div className="sign_in">Sign in to</div>}
                {sign == true && <div className="sign_in">Sign up to</div>}
                <div className="under_sign">Lorem Ipsum is simply</div>
                <div className="sign_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, doloremque, inventore reiciendis, expedita tempora
                    non quaerat ullam nisi numquam voluptates omnis dolorum
                    maxime.
                </div>
            </div>
            <img src={login_hero} alt="logo" className="login-header_img" />
        </div>
    );
};

export default LoginHeader;
