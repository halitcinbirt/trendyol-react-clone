import logo from './assets/images/logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/scss/main.scss';
import Header from './components/header';
import MobileHeader from './components/mobile_header';
import Footer from './components/footer';
import Story from './components/story';
import HomeCategory from './components/home_category';

function App() {
  return (
    <div className="App">
        <Header />
        <MobileHeader />
        <div className={'main'}>
            <div class={'container'}>
                <Story />
                <div className={'row'}>
                    <div className={'col-lg-9 col-md-9 col-12'}>
                        <HomeCategory />
                    </div>
                    <div className={'col-lg-3 col-md-3 col-12'}>
                        <div className={'bannerList'}>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/marketing/datascience/automation/2022/2/8/Luksmarkalardafirsatlar_2190792_Mobile_202202081442.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/598110/80daa5fab8_0.jpg'} className={'img-fluid'} />
                            </a>
                            <a href={'#'}>
                                <img src={'https://cdn.dsmcdn.com/ty326/campaign/banners/original/597879/dee8e83a57_2.jpg'} className={'img-fluid'} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
