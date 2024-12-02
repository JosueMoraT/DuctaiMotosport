import { FC } from 'react';
import { CarouselItem, CarouselItemProps } from './CarouselItem/CarouselItem';    

import './Carousel.styles.scss';

interface CarouselProps {
    title:string;
    items: CarouselItemProps[];

}

const Carousel: FC<CarouselProps> = ({
    title, 
    items
}) => {
    return <div className='carousel'>
        <h2 className='carousel-title'>{title}</h2>
        <div className='carousel-items-container'>
            {
                items.map(({imageUrl, title}) => {
                    return <CarouselItem
                        imageUrl={imageUrl}
                        title={title} />
                })
            }
        </div>
    </div>

}

export { Carousel };