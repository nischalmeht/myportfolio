import React from 'react'
import { NavigationDots, SocialMedia } from '../../components';

const AppWrapper = (Component,idName,classNames) =>function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}
    >
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
            <div className="copyright">
                <div className="p-text">@2025 Nischal</div>
                <div className="p-text">All rights deserved</div>
            </div>
        </div>
        <NavigationDots active={idName}/>
        {/* <NavigationDots active={idName} /> */}
    </div>
  )
}

export default AppWrapper