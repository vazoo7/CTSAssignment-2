import React from 'react';

const HeaderTabs = (props) => {
    return (

            <div className="headerTab">
                                <a className="basicBtn btn btn-brand-dark-blue plainNavLink navLink"  >
                                    {props.value}
                                </a>
                            </div>
        
    );
};

export default HeaderTabs;