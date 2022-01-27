import React from "react";

import "../../sass/login_sass/login_main.sass";

import google_img from "../../img/login_page/google.png";
import facebook_img from "../../img/login_page/facebook.png";
import apple_img from "../../img/login_page/apple.png";

const LoginMain = ({ sign, setSign }) => {
    const handleLogin = (event) => {
        event.preventDefault();

        const user = {
            username: event.target.credential.value,
            password: event.target.password.value,
        };

        addUserHandler(user);
    };

    async function addUserHandler(user) {
        const response = await fetch("", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    }

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

                    <div className="login-main_sign">
                        <form
                            className="login-main_enter_form"
                            onSubmit={(e) => handleLogin(e)}
                        >
                            <label
                                htmlFor="credential"
                                className="login-main_enter_form_description"
                            >
                                Enter your username or email address
                            </label>
                            <input
                                type="text"
                                className="login-main_enter_form_input"
                                placeholder="Username or email address"
                                name="credential"
                            />

                            <label
                                htmlFor="password"
                                className="login-main_enter_form_description"
                            >
                                Enter your Password
                            </label>
                            <input
                                type="text"
                                className="login-main_enter_form_input"
                                placeholder="Password"
                                name="password"
                            />
                            <input
                                type="submit"
                                className="login-main_sign_button"
                            />
                        </form>

                        <a href="" className="login-main_forgot_password">
                            Forgot Password
                        </a>
                    </div>
                </section>
            )}

            {sign == true && (
                <section>
                    <div className="login-main_sign">
                        <form
                            className="login-main_enter_form"
                            // onSubmit={(e) => handleLogin(e)}
                        >
                            {/* email */}

                            <label
                                htmlFor="email"
                                className="login-main_enter_form_description"
                            >
                                Enter your email address
                            </label>
                            <input
                                type="text"
                                className="login-main_enter_form_input"
                                placeholder="Email address"
                                name="email"
                            />

                            {/* username */}

                            <label
                                htmlFor="username"
                                className="login-main_enter_form_description"
                            >
                                Enter your username
                            </label>
                            <input
                                type="text"
                                className="login-main_enter_form_input"
                                placeholder="Username"
                                name="username"
                            />

                            <div className="small_form_container">
                                {/* name */}

                                <div className="small_form_container_item">
                                    <label
                                        htmlFor="name"
                                        className="login-main_enter_form_description"
                                    >
                                        Enter your name
                                    </label>
                                    <input
                                        type="text"
                                        className="login-main_enter_form_input"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                {/* surname */}
                                <div className="small_form_container_name_item">
                                    <label
                                        htmlFor="surname"
                                        className="login-main_enter_form_description"
                                    >
                                        Enter your surname
                                    </label>
                                    <input
                                        type="text"
                                        className="login-main_enter_form_input
                                    width: 40%"
                                        placeholder="Surname"
                                        name="surname"
                                    />
                                </div>
                            </div>

                            {/* password */}

                            <label
                                htmlFor="password"
                                className="login-main_enter_form_description"
                            >
                                Enter your Password
                            </label>
                            <input
                                type="text"
                                className="login-main_enter_form_input"
                                placeholder="Password"
                                name="password"
                            />

                            {/* submit */}

                            <input
                                type="submit"
                                className="login-main_sign_button"
                            />
                        </form>
                    </div>
                </section>
            )}
        </div>
    );
};

export default LoginMain;
