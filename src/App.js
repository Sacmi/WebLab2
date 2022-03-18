import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import './App.css'

function App() {
    const picsUrl = [
        'https://sun9-14.userapi.com/impf/s_dGHBu4CzExTO4ENTY-mcIBfuFwI85oXU0dww/NSz7r5ztFwI.jpg?size=1440x1920&quality=95&sign=48f0b7e6a8d4dce4c073b64411461286&type=album',
        'https://sun9-51.userapi.com/impf/L11iDGxeIXV7rN6vH33NLnjhS4XzGMvomasBRg/U8SdcrNEb9M.jpg?size=1620x2160&quality=96&sign=d4826e1037117f2eba040cdb85ff2034&type=album',
        'https://sun9-86.userapi.com/impf/5v9rJh7qSZk2EuYYBFFShj8e6HoO_begdOUJ3A/xGZVk5tct9s.jpg?size=1218x1624&quality=95&sign=a4a0e84a764b0aa594dd546d4d33b2b3&type=album',
        'https://sun9-31.userapi.com/impf/v1ZHEU6X5C7imgGrSflSE3yJ3ZBCn7iKXufogw/AulSUIyLwPw.jpg?size=1218x1624&quality=95&sign=10f3013e9a5664a54ce5cfbd146f03a3&type=album',
        'https://sun9-76.userapi.com/impf/vNTteMvhWIrXlLsXej9AzX7iRUwpQZjuNZhrfw/YHwjB8LTvsY.jpg?size=1218x1624&quality=95&sign=6ff43584d14555b65deb965a6a5681c8&type=album',
        'https://sun9-63.userapi.com/impf/8KXho7Wiz-ZGEVbysUwQ6g9dUSFIGpVYOcSfhQ/gZE67F_DiH8.jpg?size=1218x1624&quality=95&sign=426d4ec6b86ec3f83ad3c1a49cb2dfb3&type=album',
        'https://sun9-61.userapi.com/impf/vjWXzWbpFV6F4bcsUSZ4Q01hBtrrrjVy1roz2w/0FW7yhvgBQE.jpg?size=1218x1624&quality=95&sign=026f630d8116fb264e64749bd94cfc84&type=album',
        'https://sun9-7.userapi.com/impf/a7xg7dQD3xwt3h5-g3mq4wPyvN741SNzZVI0_g/kd62d0gJAks.jpg?size=1218x1624&quality=95&sign=cbb4563ae0b232db74e05d9061c16945&type=album',
        'https://sun9-42.userapi.com/impf/ouPhT8CUGC2dH1mvncBdq8l8R9xjdkP9vfTFsA/9flF4Mfqhew.jpg?size=1218x1624&quality=95&sign=2d82152c2d3c5c5d84ebd88fe53a8d9b&type=album',
        'https://sun9-43.userapi.com/impf/Mn9SVG807LMCL8CVLVoWKK5sPNLWQ_WDtWrWNQ/vx1B9Rt_LgU.jpg?size=1218x1624&quality=95&sign=19bf60456696f8f0ad9cae285606a841&type=album',
        'https://sun9-9.userapi.com/impf/ZfbhKjVC5U7N3NsqA9VsRfMVEcYwYGdipAOQRg/1Xt8zEfVLyI.jpg?size=1218x1624&quality=95&sign=aab2f97af151cbf71c32aa96192d71f4&type=album',
        'https://sun9-44.userapi.com/impf/c-YuatskIl_kYoh7IFnhQl2-aRKNgIJgm2x46w/7Ku3oQc3KPg.jpg?size=1218x1624&quality=95&sign=c485f8bfd8c82c5c89e04b6296b5e89a&type=album',
        'https://sun9-20.userapi.com/impf/9fSmLYPpekU-L-7_JdCGeEVKcm4mNSZfLepdSg/ZCwcUGMH5dw.jpg?size=1218x1624&quality=95&sign=b1d1ec8d6eaeb9006e708d4dfab44f1f&type=album',
        'https://sun9-33.userapi.com/impf/5eIqTSGFsiSJb81ckbLZaGBVt-xVsHzGz65-Pg/c90MlnriaqE.jpg?size=1218x1624&quality=95&sign=827071b74ccc1588498f9c97eededc04&type=album',
        'https://sun9-59.userapi.com/impf/jqOS8UAKOTUdUnCdVIfFL_UAA3gvdgl6iNJkWw/ES6EkvqmE4w.jpg?size=828x1472&quality=95&sign=fed0e082a473cd666db7099784aedb6e&type=album',
        'https://sun9-63.userapi.com/impf/IEV_gNYgAgv7Oy72Wkp30xDyTgq8tyed7Jfylw/4a-2FJ2E30Y.jpg?size=601x1080&quality=95&sign=7139c3ce4220b399624a736f64bce21f&type=album',
        'https://sun9-72.userapi.com/impf/OcqaV5gpN9-lvfr8rQQgusfV6RT3VeMxko_ccw/yaYcDQ7KplQ.jpg?size=900x1600&quality=95&sign=91833837dd299d4c7858bdd70ff0e73d&type=album',
        'https://sun9-44.userapi.com/impf/1GnjGp67LBYF5sB9TpHfBjRwprnu8gnVPflMSA/qenHAQqOkng.jpg?size=900x1600&quality=96&sign=5331e0f3b5abaf75c6615d36104c7251&type=album',
        'https://sun9-79.userapi.com/impf/pwOR5IXhiz4RBnpPtzeVeKABrfx7UKX4CFhL9w/XVLh9C-kEx0.jpg?size=540x959&quality=96&sign=e12fe12628e2bcb380f1deda7ac1f692&type=album',
    ]

    return (
        <div className="container">
            <h1>Лабораторная работа №2</h1>
            <h2>Это мои любимые одногрупники:</h2>
            <Swiper
                centeredSlides={false}
                effect='fade'
                loop={true}
                breakpoints={
                    {
                        '@0.75': {
                            slidesPerView: 1
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }
                }
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {
                    picsUrl.map((url, index) => (
                        <SwiperSlide key={index}>
                            <img src={url} alt="Фотка"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="swiper-button-prev"/>


        </div>
    );
}

export default App;
