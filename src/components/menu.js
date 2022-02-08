import React from 'react';
class Menu extends React.Component {
    state = {
        menus: [
            {
                id : 1,
                title : 'Kadın',
                slug : 'kadin'
            },
            {
                id : 2,
                title : 'Erkek',
                slug : 'erkek'
            },
            {
                id : 3,
                title : 'Çocuk',
                slug : 'cocuk'
            },
            {
                id : 4,
                title : 'Ev & Mobilya',
                slug : 'ev-mobilya'
            },
            {
                id : 5,
                title : 'Süpermarket',
                slug : 'supermarket'
            },
            {
                id : 6,
                title : 'Kozmetik',
                slug : 'kozmetik'
            },
            {
                id : 7,
                title : 'Ayakkabı & Çanta',
                slug : 'ayakkabi-canta'
            },
            {
                id : 8,
                title : 'Saat & Aksesuar',
                slug : 'saat-aksesuar'
            },
            {
                id : 9,
                title : 'Elektronik',
                slug : 'elektronik'
            },
            {
                id : 10,
                title : 'Spor & Outdoor',
                slug : 'spor-outdoor'
            }
        ]
    }

    render(){
        return(
           <nav className={'menu'}>
               <ul>
                   { this.state.menus.map((menu,index) =>
                       <li><a href={menu.slug}>{menu.title}</a></li>
                   )}
               </ul>
           </nav>
        );
    }
}

export default Menu;