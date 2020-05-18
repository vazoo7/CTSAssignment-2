import React from 'react';

const HeaderButtons = (props) => {
    return (
        <div className="section sectionRight">
        <div className="headerList ">
            <div className="headerTab">
                <a className="basicBtn btn btn-brand-dark-blue navLink loginButton"  >
                    {props.login}
                </a>
            </div>
            <div className="headerTab registerButtonTab">
                <a id="signUp" className="basicBtn btn btn-brand-purple registerButton navLink btn-brand-red" >
                    {props.signUp}
                </a>
            </div>
        </div>
        

     </div>
    );
};

export default HeaderButtons;