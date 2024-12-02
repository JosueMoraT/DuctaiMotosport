import { FC } from 'react';
import ImageFrame1 from '../ImageFrame/ImageFrame';

import './Footer.styles.scss';

interface FooterProps {
     
}

const Footer: (FC<FooterProps>) = ({}) => {
    return <div className='footer'>
        <div className='tema'>
            <ImageFrame1
            src='https://1000marcas.net/wp-content/uploads/2019/12/Yamaha-Log%D0%BE.png'
            alt='YAMAHA'
            width='400'
            />
        </div>
        <div>
            <ul className='links'>
                <li>
                    <a href='https://mx.yamaha.com/es/terms_of_use/index.html'>
                        Terminos de uso
                    </a>
                </li>
                <li>
                    <a href='https://www.yamaha-motor.com.mx/aviso-de-privacidad.php'>
                        Aviso de privacidad 
                    </a>
                </li>
                <li>
                    <a href='https://www.yamaha-motor.com.mx/contacto.php'>
                        Atencion al cliente
                    </a>
                </li>
                <li>
                    <a href='https://es.yamaha.com/es/cookie_policy/index.html'>
                        Informacion de cookies
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='social'>
                <li>
                    <a href='https://www.facebook.com/yamahamotormexico/?locale=es_LA'>
                        <div>
                            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/ZWRckIEnlpmIyRjTWROL8/d9cf76987e3b376aaa8ecd81159c8de1/fb-icon.svg"  alt="facebook" width="11" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://x.com/2EsMejorQue4'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/4f48hkC0Lm5qMRHrOT8WwV/63c89f535e32ec23ec3b5dc94ad3de64/twitter-icon.svg' alt='twitter' width='20' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/yamahamotormx/?hl=es'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/5rfCVoq7TMPwjeeig77b9S/19a9c2f929c2e990790e4ff4cee614b3/instagram-icon.svg' alt='Instagram' width='20' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/user/yamahademexico'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/sAz4OhE7CJoOW6d3EzPym/4873db418d8aa82f9d14b411b9f52c67/yt-icon.svg' alt='YouTube' width='23' />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div className='copi'>
        Copyright 1998-2024, Yamaha Motor de México S.A. de C.V. Todos los derechos reservados
        </div>
    </div>
}

export { Footer };