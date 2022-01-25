import React from "react";

import "../../sass/login_sass/login_main.sass";

import google_img from "../../img/login_page/google.png";
import facebook_img from "../../img/login_page/facebook.png";
import apple_img from "../../img/login_page/apple.png";

const LoginMain = ({ sign, setSign }) => {
    return (
        <div className="LoginMain">
            <div className="login-main_upper">
                <div className="login-main_header">
                    <div className="login-main_welcome">
                        Welcome to <span className="website_name">Lorem</span>
                    </div>
                    {sign == false && (
                        <div className="login-main_sign_text">Sign In</div>
                    )}
                    {sign == true && (
                        <div className="login-main_sign_text">Sign Up</div>
                    )}
                </div>

                {sign == false && (
                    <div className="login-main_sign_up">
                        <div className="login-main_no_account">No Account?</div>
                        <a
                            href="#"
                            className="login-main_sign_up_link"
                            onClick={() => setSign(true)}
                        >
                            Sign Up
                        </a>
                    </div>
                )}

                {sign == true && (
                    <div className="login-main_sign_up">
                        <div className="login-main_no_account">
                            Have an Account?
                        </div>
                        <a
                            href="#"
                            className="login-main_sign_up_link"
                            onClick={() => setSign(false)}
                        >
                            Sign In
                        </a>
                    </div>
                )}
            </div>

            {sign == false && (
                <section>
                    <div className="login-main_sign_in_other">
                        <div className="login-main_sign_in_google">
                            <img
                                src={google_img}
                                alt="google"
                                className="google_img"
                            />
                            <div className="sign_in_google">
                                Sign in with google
                            </div>
                        </div>
                        <div className="login-main_sign_in_facebook">
                            <img
                                src={facebook_img}
                                alt="facebook"
                                className="facebook_img"
                            />
                        </div>
                        <div className="login-main_sign_in_apple">
                            <img
                                src={apple_img}
                                alt="apple"
                                className="apple_img"
                            />
                        </div>
                    </div>

                    <div className="login-main_sign_in">
                        <div className="login-main_username_enter">
                            <div className="login-main_username_enter_description">
                                Enter your username or email address
                            </div>
                            <form className="login-main_username_enter_form">
                                <input
                                    type="text"
                                    className="login-main_username_enter_form_input"
                                    placeholder="Username or email address"
                                />
                            </form>
                        </div>
                        <div className="login-main_password_enter">
                            <div className="login-main_password_enter_description">
                                Enter your Password
                            </div>
                            <form className="login-main_password_enter_form">
                                <input
                                    type="text"
                                    className="login-main_password_enter_form_input"
                                    placeholder="Password"
                                />
                            </form>
                        </div>
                        <a href="" className="login-main_forgot_password">
                            Forgot Password
                        </a>
                        <button className="login-main_sign_in_button">
                            Sign in
                        </button>
                    </div>
                </section>
            )}

            {sign == true && (
                <section>
                    <div className="login-main_sign_in">
                        <div className="login-main_username_enter">
                            <div className="login-main_username_enter_description">
                                Enter your username or email address
                            </div>
                            <form className="login-main_username_enter_form">
                                <input
                                    type="text"
                                    className="login-main_username_enter_form_input"
                                    placeholder="Username or email address"
                                />
                            </form>
                        </div>

                        <div className="login-main_username_enter">
                            <div className="login-main_username_enter_description">
                                Enter your username or email address
                            </div>
                            <form className="login-main_username_enter_form">
                                <input
                                    type="text"
                                    className="login-main_username_enter_form_input"
                                    placeholder="Username or email address"
                                />
                            </form>
                        </div>

                        <div className="login-main_username_enter">
                            <div className="login-main_username_enter_description">
                                Enter your username or email address
                            </div>
                            <form className="login-main_username_enter_form">
                                <input
                                    type="text"
                                    className="login-main_username_enter_form_input"
                                    placeholder="Username or email address"
                                />
                            </form>
                        </div>

                        <div className="login-main_password_enter">
                            <div className="login-main_password_enter_description">
                                Enter your Password
                            </div>
                            <form className="login-main_password_enter_form">
                                <input
                                    type="text"
                                    className="login-main_password_enter_form_input"
                                    placeholder="Password"
                                />
                            </form>
                        </div>
                        <button className="login-main_sign_in_button">
                            Sign Up
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default LoginMain;
