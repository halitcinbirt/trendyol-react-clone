import React from 'react';
class Footer extends React.Component {

    state = {
        brands: [
            {
                "slug": "/penti-x-b125",
                "title": "Penti"
            },
            {
                "slug": "/mango-x-b41",
                "title": "Mango"
            },
            {
                "slug": "/vivense-x-b106268",
                "title": "Vivense"
            },
            {
                "slug": "/watsons-x-b862",
                "title": "Watsons"
            },
            {
                "slug": "/english-home-x-b108306",
                "title": "English Home"
            },
            {
                "slug": "/bershka-x-b486",
                "title": "Bershka"
            },
            {
                "slug": "/stradivarius-x-b147",
                "title": "Stradivarius"
            },
            {
                "slug": "/bellona-x-b109447",
                "title": "Bellona"
            },
            {
                "slug": "/beymen-x-b1227",
                "title": "Beymen"
            },
            {
                "slug": "/istikbal-x-b109803",
                "title": "İstikbal"
            },
            {
                "slug": "/civil-x-b102999",
                "title": "Civil"
            },
            {
                "slug": "/addax-x-b708",
                "title": "Addax"
            },
            {
                "slug": "/puma-x-b160",
                "title": "Puma"
            },
            {
                "slug": "/mudo-x-b137",
                "title": "Mudo"
            },
            {
                "slug": "/derimod-x-b131",
                "title": "Derimod"
            },
            {
                "slug": "/apple-x-b101470",
                "title": "Apple"
            },
            {
                "slug": "/samsung-x-b794",
                "title": "Samsung"
            },
            {
                "slug": "/huawei-x-b103505",
                "title": "Huawei"
            },
            {
                "slug": "/xiaomi-x-b101939",
                "title": "Xiaomi"
            },
            {
                "slug": "/oppo-x-b109251",
                "title": "Oppo"
            },
            {
                "slug": "/monster-laptop-x-b105536-c103108",
                "title": "Monster Notebook"
            },
            {
                "slug": "/lenovo-x-b102323",
                "title": "Lenovo"
            },
            {
                "slug": "/arcelik-x-b626",
                "title": "Arçelik"
            },
            {
                "slug": "/dyson-x-b102989",
                "title": "DYSON"
            },
            {
                "slug": "/adidas-x-b33",
                "title": "Adidas"
            },
            {
                "slug": "/nike-x-b44",
                "title": "Nike"
            },
            {
                "slug": "/skechers-x-b658",
                "title": "Skechers"
            },
            {
                "slug": "/columbia-x-b156",
                "title": "Columbia"
            },
            {
                "slug": "/crocs-x-b249",
                "title": "CROCS"
            },
            {
                "slug": "/lumberjack-x-b318",
                "title": "Lumberjack"
            },
            {
                "slug": "/madame-coco-x-b52",
                "title": "Madame Coco"
            },
            {
                "slug": "/birkenstock-x-b144",
                "title": "Birkenstock"
            },
            {
                "slug": "/koton-x-b38",
                "title": "Koton"
            },
            {
                "slug": "/defacto-x-b37",
                "title": "Defacto"
            },
            {
                "slug": "/mavi-x-b43",
                "title": "Mavi"
            },
            {
                "slug": "/pierre-cardin-x-b122",
                "title": "Pierre Cardin"
            },
            {
                "slug": "/oriflame-x-b1244",
                "title": "Oriflame"
            },
            {
                "slug": "/farmasi-x-b102841",
                "title": "Farmasi"
            },
            {
                "slug": "/herbalife-x-b110152",
                "title": "Herbalife"
            },
            {
                "slug": "/lego-x-b104725",
                "title": "LEGO"
            },
            {
                "slug": "/bosch-x-b786",
                "title": "Bosch"
            },
            {
                "slug": "/karaca-x-b325",
                "title": "Karaca"
            },
            {
                "slug": "/ray-ban-x-b303",
                "title": "Ray-Ban"
            },
            {
                "slug": "/migros-x-b108894",
                "title": "Migros"
            },
            {
                "slug": "/barbie-x-b783",
                "title": "Barbie"
            }
        ]
    }

    render(){
        return(
            <div className={'footer'}>
                <div className={'footer-top'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-6 col-12'}>
                                <div className={'inner'}>
                                    <span className={'title'}>Popüler Marka ve Mağazalar</span>
                                    <ul>
                                        { this.state.brands.map((brand,index) =>
                                            <li><a href={brand.slug}>{brand.title}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className={'col-lg-6 col-md-6 col-12'}>
                                <div className={'inner'}>
                                    <span className={'title'}>Popüler Sayfalar</span>
                                    <ul>
                                        { this.state.brands.map((brand,index) =>
                                            <li><a href={brand.slug}>{brand.title}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'footer-bottom'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-3 col-md-3 col-12'}>
                                <span>Trendyol</span>
                                <ul>
                                    <li><a href="/international.html/tr#whoWeAre">Biz Kimiz</a></li>
                                    <li><a href="/international.html/tr#careers">Kariyer</a></li>
                                    <li><a href="/iletisim.html">İletişim</a></li>
                                    <li><a href="https://partner.trendyol.com/onboarding/satici-formu" target="_blank">Trendyol'da
                                        Satış Yap</a></li>
                                    <li><a href="/s/kurumsal-cuzdan-hediye-ceki" target="_blank">Kurumsal Hediye
                                        Çeki</a></li>
                                </ul>
                            </div>
                            <div className={'col-lg-3 col-md-3 col-12'}>
                                <span>About Us</span>
                                <ul>
                                    <li><a href="/international.html/en#whoWeAre">Who we are</a></li>
                                    <li><a href="/international.html/en#careers">Careers</a></li>
                                    <li><a href="/international.html/en#contactUs">Contact us</a></li>
                                </ul>
                            </div>
                            <div className={'col-lg-3 col-md-3 col-12'}>
                                <span>Kampanyalar</span>
                                <ul>
                                    <li><a href="/s/kampanyalar">Aktif Kampanyalar</a></li>
                                    <li><a href="/s/elite">Elite Üyelik</a></li>
                                    <li><a href="/s/hediye-rehberi" target="_blank">Hediye Fikirleri</a></li>
                                    <li><a href="/s/trendyol-indirim-gunleri" target="_blank">Trendyol Fırsatları</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={'col-lg-3 col-md-3 col-12'}>
                                <span>Yardım</span>
                                <ul>
                                    <li><a href="https://www.trendyol.com/yardim/sorular/">Sıkça Sorulan Sorular</a>
                                    </li>
                                    <li><a href="https://www.trendyol.com/yardim/sorular?liveChat=True">Canlı Yardım</a>
                                    </li>
                                    <li><a href="https://www.trendyol.com/yardim/sorular/1">Nasıl İade Edebilirim</a>
                                    </li>
                                    <li><a href="https://www.trendyol.com/yardim/sorular/2002?grup=1">İşlem Rehberi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;