import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import './Default.css'
import { beasts } from './Beasts'; 
import EnemyCard from './EnemyCard';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const limitedBeasts = beasts.slice(0,3);
    return (
        <div className='carousel'>
            <h2>Muestra de criaturas</h2>
            <Slider {...settings}>
                {limitedBeasts.map((beast, index) => (
                    <div key={index} className='card'>
                        <EnemyCard name={beast.name} description={beast.description} image={beast.image} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
