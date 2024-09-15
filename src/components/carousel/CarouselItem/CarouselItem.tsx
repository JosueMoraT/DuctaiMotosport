import { FC } from 'react';
import { Tag } from '../../Tag/Tag';
import './CarouselItem.styles.scss';

export interface CarouselItemProps {
    imageUrl: string;
    title: string;


}

const CarouselItem: FC<CarouselItemProps> = ({
    imageUrl,
    title
}) => {
    return <div className='carousel-item'>
        <img className='carousel-item-image' src={imageUrl} alt="item" />
        <div className='carousel-item-tag'>
        <Tag color='white' backgroundColor='black' label={title} />
        </div>
    </div>

}

export { CarouselItem };