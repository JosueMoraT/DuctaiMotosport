import { FC } from 'react';
import { ButtonLink, ButtonLinkProps } from '../ButtonLink/ButtonLink';
import './Hero.styles.scss';

interface HeroProps {
    imageUrl: string;
    imageText: string;
    headline: string;
    button: ButtonLinkProps;
}

const Hero: FC<HeroProps> = ({ imageUrl, imageText, headline, button}) => {
    return <div className='hero'>
        <img className='img-background' src={imageUrl} alt={imageText}/>
        <div className='cta'>
        <h1 className='headline'>{headline}</h1>
        <ButtonLink {...button} />
        </div>
    </div>
}

export { Hero };