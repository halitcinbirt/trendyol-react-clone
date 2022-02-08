import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import react from "react";
import {Pagination,Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import React from "react";

class Story extends React.Component {
    state = {
        stories: [
            {
                "id": 1,
                "title": "Sen De Al!",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15551619355311_SenDeAl.png"
            },
            {
                "id": 2,
                "title": "Kodlar & Hizmetler",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2020/12/30/EglenceWeb_202012301831.png"
            },
            {
                "id": 3,
                "title": "Bershka",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354871_Bershka.png"
            },
            {
                "id": 4,
                "title": "Pull & Bear",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/10/Pullbearyeni.png"
            },
            {
                "id": 5,
                "title": "Mavi",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/3/maviii.png"
            },
            {
                "id": 6,
                "title": "DeFacto",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2021/7/30/Defacto_202107301618.png"
            },
            {
                "id": 7,
                "title": "Nike",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png"
            },
            {
                "id": 8,
                "title": "adidas",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png"
            },
            {
                "id": 9,
                "title": "Xiaomi",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png"
            },
            {
                "id": 10,
                "title": "Koton",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355115_Koton.png"
            },
            {
                "id": 11,
                "title": "TrendyolMilla",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png"
            },
            {
                "id": 12,
                "title": "U.S Polo Assn.",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png"
            },
            {
                "id": 13,
                "title": "THE NORTH FACE",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355376_TheNorthFace.png"
            },
            {
                "id": 14,
                "title": "HUMMEL",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png"
            },
            {
                "id": 15,
                "title": "Tommy Hilfiger",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355379_TommyHilfiger.png"
            },
            {
                "id": 16,
                "title": "Puma",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png"
            },
            {
                "id": 17,
                "title": "Stradivarius",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15551619355350_Stradivarius.png"
            },
            {
                "id": 18,
                "title": "Lufian",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355143_Lufian.png"
            },
            {
                "id": 19,
                "title": "Penti",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355245_Penti.png"
            },
            {
                "id": 20,
                "title": "Pierre Cardin",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355254_PierreCardin.png"
            },
            {
                "id": 21,
                "title": "Apple",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/apple12.png"
            },
            {
                "id": 22,
                "title": "Avva",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354848_Avva.png"
            },
            {
                "id": 23,
                "title": "English Home",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15501619355012_EnglishHome.png"
            },
            {
                "id": 24,
                "title": "Madame Coco",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355148_MadameCoco.png"
            },
            {
                "id": 25,
                "title": "İpekyol",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355083_Ipekyol.png"
            },
            {
                "id": 26,
                "title": "Jack &amp; Jones",
                "image_url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355085_JackJones.png"
            }
        ]
    }
    render() {
        return(
            <div className={'story-box'}>
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation
                    spaceBetween={30}
                    breakpoints={{
                        390: {
                            width: 390,
                            slidesPerView: 5,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 5,
                        },
                        1024: {
                            width: 768,
                            slidesPerView: 6,
                        },
                    }}
                >
                    { this.state.stories.map((story,index) =>
                        <SwiperSlide><img src={story.image_url} /><span>{story.title}</span></SwiperSlide>
                    )}
                </Swiper>
            </div>
        );
    }
}

export default Story;