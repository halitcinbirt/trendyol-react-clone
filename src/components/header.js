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
function Header(){
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-inner');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return(
       <div className="header">
           <div className="top-bar">
              <div className="container">
                  <ul>
                      <li><a href="#">İndirim Kuponlarım</a></li>
                      <li><a href="#">Trendyol'da Satış Yap</a></li>
                      <li><a href="#">Yardım & Destek</a></li>
                  </ul>
              </div>
           </div>
           <div className="header-inner">
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-lg-2 col-md-3 col-12">
                           <a href="#" className={"logo"}>
                               <img src={Logo} />
                           </a>
                       </div>
                       <div className="col-lg-6 col-md-6 col-12">
                        <Search />
                       </div>
                       <div className="col-lg-4 col-md-4 col-12">
                           <div className={'links'}>
                               <div className={'item'}>
                                   <a href={'#'}>
                                       <AccountLineIcon className="account" size={20} />
                                       <AccountFillIcon className="hover" size={20} />
                                       <span>Hesabım</span>
                                   </a>
                               </div>
                               <div className={'item'}>
                                   <a href={'#'}>
                                       <HeartLineIcon className="account" size={20} />
                                       <HeartFillIcon className="hover" size={20} />
                                       <span>Favorilerim</span>
                                   </a>
                               </div>
                               <div className={'item'}>
                                   <a href={'#'}>
                                       <ShoppingCartLineIcon className="account" size={20} />
                                       <ShoppingCartFillIcon className="hover" size={20} />
                                       <span>Sepetim</span>
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
                   <Menu />
               </div>
           </div>
       </div>
    );
}

export default Header;