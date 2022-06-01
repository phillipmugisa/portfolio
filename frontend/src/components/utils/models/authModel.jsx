// react
import React, {useRef, useState, useEffect, useContext, useReducer} from 'react';

// icons
import { 
    FaGithub, FaGoogle, FaLinkedinIn
} from "react-icons/fa";

// context
import { AppContext } from '../../../hooks/AppContext';

import useAuth from '../../../hooks/useAuth';

const LoginModel = () => {

    const formElem = useRef(null);
    const {loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen, setMobileMenuOpen, setSettingIsOpen} = useContext(AppContext);

    const {signIn} = useAuth('token/');

    const [userState, setUserState] = useState({username: '', password: ''})

    const closeModel = () => {
        formElem.current.reset();
        setLoginModalIsOpen(false);
    }

    const openSignUpModal = () => {
        closeModel();
        setSignupModalIsOpen(true);
    }

    const HandleUserLogIn = (e) => {
        e.preventDefault()
        signIn(userState)
        if (!loginModalIsOpen)
        {
            formElem.current.reset();
        }
    }

    useEffect(() => {
        setMobileMenuOpen(false);
        setSettingIsOpen(false);
        // fadeBackground();
        // toggleBodyScrollability();

        // return () => {
        //     fadeBackground();
        //     toggleBodyScrollability();
        // };

    }, [])

    return (
        <div className="auth-model model in-view gap-1">
            <div className="model-header flex">
                <h4>Sign In</h4>
                <button onClick={closeModel}>x</button>
            </div>
            <div className="divider"></div>
            <div className="form-area">
                <form className='contact grid gap-1' ref={formElem} onSubmit={HandleUserLogIn}>
                    <fieldset className='grid'>
                        <div className="form-group grid">
                            <label htmlFor="username">Usename *</label>
                            <input type="text" id="username" required onChange={(e) => setUserState(state => {return {...state, "username" : e.target.value}})}/>
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="password">Password *</label>
                            <input type="password" id="password" required  onChange={(e) => setUserState(state => {return {...state, "password" : e.target.value}})}/>
                        </div>
                    </fieldset>              
                    <fieldset className="flex">
                        <div className="form-group form-submit-area grid">
                            <input className="form-submit bg-primary txt-white" type="submit" value="Login"/>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="divider"></div>
            <div className="modal-footer grid gap-sm">
                <div className="social-auth flex gap-1">
                    <span>Sign In With: </span>
                    <a href="/" className="social-auth-btn"><FaGithub/></a>
                    <a href="/" className="social-auth-btn"><FaLinkedinIn/></a>
                    <a href="/" className="social-auth-btn"><FaGoogle/></a>
                </div>
                <span className="create-account" onClick={openSignUpModal}>Create New Account</span>
            </div>
        </div>
    )
}

const reducer = (state, action) => {
    switch (action.type)
    {
        case "SET_UNAME":
            return {...state, username: action.payload};
        case "SET_FNAME":
            return {...state, first_name: action.payload};
        case "SET_SNAME":
            return {...state, last_name: action.payload};
        case "SET_EMAIL":
            return {...state, email: action.payload};
        case "SET_IMG":
            return {...state, img_url: action.payload};
        case "SET_PWD":
            return {...state, password: action.payload};
        case "SET_CPWD":
            return {...state, confirm_password: action.payload};
        default:
            return state;
    }
}

const SignUpModel = () => {

    const formElem = useRef(null);
    const {setLoginModalIsOpen, setSignupModalIsOpen, setMobileMenuOpen, setSettingIsOpen, signupModalIsOpen,postResponse} = useContext(AppContext);
    const [pwdError, setPwdError] = useState(false);
    const [pwdMatchError, setPwdMatchError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    const [state, dispatch] = useReducer(reducer, {})

    const {signUp} = useAuth('user_register/');

    const closeModel = () => {
        formElem.current.reset();
        setSignupModalIsOpen(false);
    }

    const openLoginModal = () => {
        closeModel();
        setLoginModalIsOpen(true);
    }

    const handleUserSignUp = (e) => {
        e.preventDefault();
        setPwdError(false);
        setPwdMatchError(false);
        setUsernameError(false);

        if (!(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]*)(?=.{8,})/.test(state.password))){
            setPwdError(true);
            return;
        }

        if (state.password !== state.confirm_password){
            setPwdMatchError(true);
            return;
        }

        signUp(state);
        if (postResponse && postResponse.data.hasOwnProperty('username'))
        {
            setUsernameError(true);
            return;
        }
        else
        {
            if (!signupModalIsOpen)
            {
                // formElem.current.reset();
            }
        }
    }

    useEffect(() => {
        setMobileMenuOpen(false);
        setSettingIsOpen(false);
        // fadeBackground();
        // toggleBodyScrollability();

        // return () => {
        //     fadeBackground();
        //     toggleBodyScrollability();
        // };
    }, [])

    return (
        <div className="auth-model siguup model in-view gap-1">
            <div className="model-header flex">
                <h4>Create New Account</h4>
                <button onClick={closeModel}>x</button>
            </div>
            <div className="divider"></div>
            <div className="form-area">
                <form className='contact grid gap-1' ref={formElem} onSubmit={handleUserSignUp} encType='multipart/form-data'>
                    <fieldset className='grid'>
                        <div className="form-group flex">
                            <div className="form-group grid">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" id="first_name" onChange={(e) => dispatch({type : "SET_FNAME", payload: e.target.value})}/>
                            </div>
                            <div className="form-group grid">
                                <label htmlFor="second_name">Second Name</label>
                                <input type="text" id="second_name" onChange={(e) => dispatch({type : "SET_SNAME", payload: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group flex">
                            <div className="form-group grid">
                                <label htmlFor="username">Usename *</label>
                                <input type="text" id="username" required onChange={(e) => dispatch({type : "SET_UNAME", payload: e.target.value})}/>
                                {usernameError && <span  className="form-error">Username not aviable.</span>}
                            </div>
                            <div className="form-group grid">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" required onChange={(e) => dispatch({type : "SET_EMAIL", payload: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="profile_pic">Profile Picture</label>
                            <input type="file" id="profile_pic" onChange={(e) => dispatch({type : "SET_IMG", payload: e.target.value})}/>
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="password">Password *</label>
                            <input type="password" id="password" required onChange={(e) => dispatch({type : "SET_PWD", payload: e.target.value})}/>
                            { pwdError && <span className="form-error">Password must contain lowercase and uppercase letters, numbers and special characters.</span> }
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="confirm_password">Confirm Password *</label>
                            <input type="password" id="confirm_password" required onChange={(e) => dispatch({type : "SET_CPWD", payload: e.target.value})}/>

                            { pwdMatchError && <span className="form-error">Passwords donot match</span> }
                        </div>
                    </fieldset>              
                    <fieldset className="flex">
                        <div className="form-group form-submit-area grid">
                            <input className="form-submit bg-primary txt-white" type="submit" value="Create Account"/>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="divider"></div>
            <div className="modal-footer grid gap-sm">
                <div className="social-auth flex gap-1">
                    <span>Sign In With: </span>
                    <a href="/" className="social-auth-btn"><FaGithub/></a>
                    <a href="/" className="social-auth-btn"><FaLinkedinIn/></a>
                    <a href="/" className="social-auth-btn"><FaGoogle/></a>
                </div>
                <span className="create-account" onClick={openLoginModal}>Already Have An Account.</span>
            </div>
        </div>
    )
}

export {LoginModel, SignUpModel};