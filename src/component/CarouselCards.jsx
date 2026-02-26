import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/styles/carousel.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const CarouselCards = () => {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        let mounted = true;
        // dynamic import keeps the gift data (and images) out of the initial bundle
        import('../assets/giftCards.js').then(module => {
            if (mounted) setCards(module.default);
        });
        return () => {
            mounted = false;
        };
    }, []);

    if (!cards) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                speed={500}
                loop={false}
                rotate={"false"}
                modules={[EffectCards]}
                className="swiper"
            >
                <SwiperSlide>
                    <div className='cd-1'>
                        <h2 className='cd-title'>{cards.card1.title}</h2>
                        <img src={cards.card1.image} alt={cards.card1.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-2'>
                        <h2 className='cd-2-title'>{cards.card2.title}</h2>
                        <img src={cards.card2.image} alt={cards.card2.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-3'>
                        <h2 className='cd-3-title1'>{cards.card3.title1}</h2>
                        <img src={cards.card3.image} alt={cards.card3.alt} loading="lazy" />
                        <h2 className='cd-3-title2'>{cards.card3.title2}</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-4'>
                        <h2 className='cd-4-title1'>{cards.card4.title1}</h2>
                        <img src={cards.card4.image} alt={cards.card4.alt} loading="lazy" />
                        <h2 className='cd-4-title2'>{cards.card4.title2}</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-5'>
                        <h2 className='cd-5-title'>{cards.card5.title}</h2>
                        <img src={cards.card5.image} alt={cards.card5.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-6'>
                        <h2 className='cd-6-title1'>{cards.card6.title1}</h2>
                        <h2 className='cd-6-title2'>{cards.card6.title2}</h2>
                        <h2 className='cd-6-title3'>{cards.card6.title3}</h2>
                        <img className='img1' src={cards.card6.image} alt={cards.card6.alt} loading="lazy" />
                        <img className='img2' src={cards.card6.image2} alt={cards.card6.alt} loading="lazy" />
                        <h2 className='cd-6-title4'>{cards.card6.title4}</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-7'>
                        <h2 className='cd-7-title'>{cards.card7.title}</h2>
                        <img className='cf_img1' src={cards.card7.image} alt={cards.card7.alt} loading="lazy" />
                        <img className='cf_img2' src={cards.card7.image} alt={cards.card7.alt} loading="lazy" />
                        <img className='cf_img3' src={cards.card7.image} alt={cards.card7.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-8'>
                        <h2 className='cd-8-title1'>{cards.card8.title1}</h2>
                        <h2 className='cd-8-title2'>{cards.card8.title2}</h2>
                        <h2 className='cd-8-title3'>{cards.card8.title3}</h2>
                        <img className='gems_img1' src={cards.card8.image2} alt={cards.card8.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-9'>
                        <h2 className='cd-9-title1'>{cards.card9.title1}</h2>
                        <h2 className='cd-9-title2'>{cards.card9.title2}</h2>
                        <h2 className='cd-9-title3'>{cards.card9.title3}</h2>
                        <h2 className='cd-9-title4'>{cards.card9.title4}</h2>
                        <img src={cards.card9.image} alt={cards.card9.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cd-10'>
                        <div className='cd-10-frame'>
                            <h2 className='cd-10-title1'>Happy Birthday HEMA 💙</h2>
                            <p className='cd-10-title2'>Do you know whats inside in MISS YOU ?</p>
                            <p className='cd-10-title3'>It holds my LOVE, anguish,
                                care, warmth, fight, everything is there.</p>
                            <p className='cd-10-title-4'>I have missed you for so many years. That missing is no longer enough</p>
                            <p className='cd-10-title-5'>I want my life with you.</p>
                            <p className='cd-10-title-6'>will you be mine forever? 💍</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default React.memo(CarouselCards);
