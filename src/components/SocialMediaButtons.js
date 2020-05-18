import React from 'react';
import './style.css'

const SocialMediaButtons = (props) => {
    return (
        <div className="btnContainer">
        <div className="btnContainerItem">
            <a className="basicBtn btn btn-brand-red socialAuthButton"  >
                <img alt={props.alt} src={require('../images/linkedin.svg')} className="icon"/>
            </a>
        </div>
        <div className="btnContainerItem">
            <a className="basicBtn btn btn-brand-red socialAuthButton">
                <img alt="Log in with Google" src={require('../images/google.png')} className="icon"/>
            </a>
        </div>
        <div className="btnContainerItem">
            <a className="basicBtn btn btn-brand-red socialAuthButton" >
                <img alt="Log in with Facebook" src={require('../images/fb.png')}className="icon"/>
            </a>
        </div>
        <div className="btnContainerItem">
            <a className="basicBtn btn btn-brand-red socialAuthButton"  >
                <img alt="Log in with Github" src={require('../images/github.svg')} className="icon"/>
            </a>
        </div>
        
    </div>
    );
};

export default SocialMediaButtons;