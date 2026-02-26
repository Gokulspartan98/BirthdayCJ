import React, { useState, useCallback, Suspense, lazy } from 'react';
import BirthdayCake from '../component/BirthdayCake';
import GreetingCard from '../component/GreetingCard';

const CarouselCards = lazy(() => import('../component/CarouselCards'));

const Page1 = () => {
    const [showCarousel, setShowCarousel] = useState(false);

    const handleToggle = useCallback(() => {
        setShowCarousel(prev => !prev);
    }, []);

    return (
        <div className='containerStyle'>
            <div className='diningTableStyle'>
                <div className='cakeContainerStyle'>
                    <BirthdayCake />
                </div>
                <div className='cardContainerStyle'>
                    <GreetingCard />
                </div>
            </div>
            <div className='carouselContainer'>
                <button className='btn' onClick={handleToggle}>
                    <span>{showCarousel ? "Hide Gift" : "A Yes 💙💝🌻"}</span>
                </button>
                {showCarousel && (
                    <Suspense fallback={<h4>Loading gifts...</h4>}>
                        <CarouselCards />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default React.memo(Page1);