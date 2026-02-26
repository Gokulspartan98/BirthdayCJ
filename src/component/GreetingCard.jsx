import React from 'react'
import '../assets/styles/greetCard.css';

const GreetingCard = () => {
    return (
        <div className="birthdayCard">
            <div className="cardFront">
                <h3 className="happy">HAPPY BIRTHDAY LOVE !</h3>
                <div className="balloons">
                    <div className="balloonOne" />
                    <div className="balloonTwo" />
                    <div className="balloonThree" />
                    <div className="balloonFour" />
                </div>
            </div>
            <div className="cardInside">
                <p className='greetText'>Dear Jon's Carolina,</p>
                <p className='greetText'>
                    Happy birthday!! Every day with you feels like a dream, I never want to wake up from.
                    You are my happiness, my safe place, and the best part of my life.
                </p>
                <p className='greetText'>I don’t want to spend another year as just your friend…
                </p>
                <p className='greetText'>Will you marry me?</p>
                <p className="name">Gokul</p>
            </div>
        </div>
    )
}

export default React.memo(GreetingCard)