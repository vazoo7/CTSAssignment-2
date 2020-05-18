import React from 'react';
import './style.css'
import HeaderTabLogo from './HeaderTabLogo'
import HeaderTabs from './HeaderTabs'
import HeaderButtons from './HeaderButtons';

const Header = () => {
    return (
            <header className="container">
                <div className="wrapper appBar">
                    <div className="contentContainer contentWrapper">

                        <div className="section sectionLeft">
                            <HeaderTabLogo value="Codecademy Logo"/>

                            <div className="headerList ">
                                <HeaderTabs value="Catalog"/>
                                <HeaderTabs value="Learn From Home"/>
                                <HeaderTabs value="Pricing"/>
                                <HeaderTabs value="For Business"/>
                            </div>
                        </div>
                    <HeaderButtons login="Log in" signUp="Sign up"/>
                </div>
            </div>
       </header>
       
    
        
    );
};

export default Header;