import Logo from '../assets/images/logo.svg';
import Search from '../components/search.js';
import Menu from '../components/menu.js';
import AccountLineIcon from 'remixicon-react/UserLineIcon';
import AccountFillIcon from 'remixicon-react/UserFillIcon';
import HeartLineIcon from 'remixicon-react/HeartLineIcon';
import HeartFillIcon from 'remixicon-react/HeartFillIcon';
import ShoppingCartLineIcon from 'remixicon-react/ShoppingCartLineIcon';
import ShoppingCartFillIcon from 'remixicon-react/ShoppingCartFillIcon';
import React, {useEffect} from "react";
import SearchIcon from "remixicon-react/SearchLineIcon";
function MobileHeader(){
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.mobileHeader');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return(
        <div className="mobileHeader">
            <div className={'first'}>
                <a href={'#'}>
                    <img src={Logo} />
                </a>
            </div>
            <div className={'last'}>
                <a href={'#'}>
                    <AccountLineIcon className="account" size={25} />
                </a>
                <a href={'#'}>
                    <HeartLineIcon className="account" size={25} />
                </a>
                <a href={'#'}>
                    <ShoppingCartLineIcon className="account" size={25} />
                </a>
            </div>
        </div>
    );
}

export default MobileHeader;