import { FC } from 'react';
import ImageFrame1 from '../ImageFrame/ImageFrame';

import './Footer.styles.scss';

interface FooterProps {
     
}

const Footer: (FC<FooterProps>) = ({}) => {
    return <div className='footer'>
        <div className='tema'>
            <ImageFrame1
            src='https://images.ctfassets.net/x7j9qwvpvr5s/2CsA99p11kL3UvzN4txafd/832dabdc0d00a62a43fe559933a46c35/Ducati-Member-of-the-Audi-Group.svg'
            alt='DUCATI'
            width='900'
            />
        </div>
        <div>
            <ul className='links'>
                <li>
                    <a href='https://www.ducati.com/mx/es/home/terms-of-use'>
                        Terminos de uso
                    </a>
                </li>
                <li>
                    <a href='https://www.ducati.com/mx/es/home/privacy'>
                        Aviso de privacidad 
                    </a>
                </li>
                <li>
                    <a href='https://www.ducati.com/mx/es/compania/servicio-de-atencion-al-cliente'>
                        Atencion al cliente
                    </a>
                </li>
                <li>
                    <a href='https://www.ducati.com/mx/es/home/cookie-policy'>
                        Informacion de cookies
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='social'>
                <li>
                    <a href='https://www.facebook.com/Ducati'>
                        <div>
                            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/ZWRckIEnlpmIyRjTWROL8/d9cf76987e3b376aaa8ecd81159c8de1/fb-icon.svg"  alt="facebook" width="11" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://x.com/ducatimotor'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/4f48hkC0Lm5qMRHrOT8WwV/63c89f535e32ec23ec3b5dc94ad3de64/twitter-icon.svg' alt='twitter' width='20' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/ducatimx'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/5rfCVoq7TMPwjeeig77b9S/19a9c2f929c2e990790e4ff4cee614b3/instagram-icon.svg' alt='Instagram' width='20' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/user/DucatiMotorHolding'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/sAz4OhE7CJoOW6d3EzPym/4873db418d8aa82f9d14b411b9f52c67/yt-icon.svg' alt='YouTube' width='23' />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div className='copi'>
            Copyright © 2024 Ducati Motor Holding S.p.A - A Sole Shareholder Company - A Company subject to the Management and Coordination activities of AUDI AG. All rights reserved. VAT 05113870967
        </div>
    </div>
}

export { Footer };