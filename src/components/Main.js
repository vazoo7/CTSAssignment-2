import React from 'react';
import './style.css'

import MainStudentlogo from './MainStudentlogo'
import LoginForm from './LoginForm'
import SocialMediaButtons from './SocialMediaButtons'

const Main = () => {
    return (
             <div className="contentContainer container_body">
                   <MainStudentlogo src={require('../images/studentLogo.png')} alt="Student Logo"/>


                    <div className="formContainer__2">
                        <div className="formContents">
                            <h2 className="formHeader">
                                 Get Started For Free
                            </h2>
                            <div className="formContainer__1">
                                <div className="registrationContainer">
                                   
                                   <LoginForm email="Email" password="Password" button="Start coding now"/>
    

                       
                        <div>
                            <h2 className="heading">
                                Or, use another account:
                            </h2>


                            <SocialMediaButtons />
                            

                            {/* <div class="btnContainer">
                                <div class="btnContainerItem">
                                    <a className="basicBtn btn btn-brand-red socialAuthButton"  >
                                        <img alt="Log in with LinkedIn" src={require('../images/linkedin.svg')} className="icon"/>
                                    </a>
                                </div>
                                <div class="btnContainerItem">
                                    <a class="basicBtn btn btn-brand-red socialAuthButton">
                                        <img alt="Log in with Google" src={require('../images/google.png')} class="icon"/>
                                    </a>
                                </div>
                                <div class="btnContainerItem">
                                    <a class="basicBtn btn btn-brand-red socialAuthButton" >
                                        <img alt="Log in with Facebook" src={require('../images/fb.png')}class="icon"/>
                                    </a>
                                </div>
                                <div class="btnContainerItem">
                                    <a class="basicBtn btn btn-brand-red socialAuthButton"  >
                                        <img alt="Log in with Github" src={require('../images/github.svg')} class="icon"/>
                                    </a>
                                </div>
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Main;