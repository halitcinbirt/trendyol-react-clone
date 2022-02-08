import React from 'react';
class HomeCategory extends React.Component {
    state = {
        categories: [
            {
                id : 1,
                title : 'Ev Ürünlerinde Şubat Fırstları',
                image_url : 'https://cdn.dsmcdn.com/ty320/campaign/banners/original/597798/09e7d3b8ff_0_new.jpg'
            },
            {
                id : 2,
                title : 'Tüm Sağlık Ürünleri',
                image_url : 'https://cdn.dsmcdn.com/ty314/campaign/banners/original/594383/ad788557e0_0_new.jpg'
            },
            {
                id : 3,
                title : 'Lezzetli Mutfak',
                image_url : 'https://cdn.dsmcdn.com/ty323/campaign/banners/original/597948/1e4aa5f639_0_new.jpg'
            },
            {
                id : 4,
                title : 'Avva - Büyük Şubat Fırsatlarını Kaçırma',
                image_url : 'https://cdn.dsmcdn.com/ty322/pimWidgetApi/webBig_20220204112601_2187417ErkekWeb202202041401.jpg'
            },
            {
                id : 5,
                title : 'Temel Mutfak İhtiyaçları',
                image_url : 'https://cdn.dsmcdn.com/ty322/campaign/banners/original/597947/995a9e229b_0_new.jpg'
            },
            {
                id : 6,
                title : 'Elektrikli Ev Aletleri',
                image_url : 'https://cdn.dsmcdn.com/ty326/pimWidgetApi/webBig_20220207133119_2188453ElektronikWeb202202071001EEA.jpg'
            },
            {
                id : 7,
                title : 'Mavi - Yeni Sezon Ürünleri',
                image_url : 'https://cdn.dsmcdn.com/ty316/campaign/banners/original/597738/3dd513310a_2_new.jpg'
            },
            {
                id : 8,
                title : 'Sarrafiye Fırsatları',
                image_url : 'https://cdn.dsmcdn.com/ty315/pimWidgetApi/webBig_20220201111357_Sarrafiyeweb.jpg'
            },
            {
                id : 9,
                title : 'Robot Süpürgeler',
                image_url : 'https://cdn.dsmcdn.com/ty326/pimWidgetApi/webBig_20220207133315_2188435ElektronikWeb202202071201rb2.jpg'
            },
            {
                id : 10,
                title : 'Küçük Ev Aletleri',
                image_url : 'https://cdn.dsmcdn.com/ty312/campaign/banners/original/597262/39b8a55193_0_new.jpg'
            },
            {
                id : 11,
                title : 'Denimin En İyileri',
                image_url : 'https://cdn.dsmcdn.com/ty324/pimWidgetApi/webBig_20220207083616_webyeni.jpg'
            },
            {
                id : 12,
                title : 'Saat & Saat',
                image_url : 'https://cdn.dsmcdn.com/ty325/campaign/banners/original/598095/f5c3b79cef_2_new.jpg'
            }
        ]
    }

    render(){
        return(
            <div className={'category-list'}>
                { this.state.categories.map((category,index) =>
                    <div className={'item'}>
                       <a>
                           <div className={'image'}>
                                <img src={category.image_url} className={'img-fluid'} />
                           </div>
                           <div className={'bottom'}>
                               <a href={'#'}>{category.title}</a>
                               <a href={'#'} className={'other'}>Alışverişe Başla</a>
                           </div>
                       </a>
                    </div>
                )}
            </div>
        );
    }
}

export default HomeCategory;