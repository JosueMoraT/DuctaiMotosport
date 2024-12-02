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
            <ul className='social'>
                <li>
                    <a href='https://www.facebook.com/josue.morita.1'>
                        <div>
                            <img src="https://images.ctfassets.net/x7j9qwvpvr5s/ZWRckIEnlpmIyRjTWROL8/d9cf76987e3b376aaa8ecd81159c8de1/fb-icon.svg"  alt="facebook" width="11" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://x.com/JosueMora162696'>
                        <div>
                            <img src='https://images.ctfassets.net/x7j9qwvpvr5s/4f48hkC0Lm5qMRHrOT8WwV/63c89f535e32ec23ec3b5dc94ad3de64/twitter-icon.svg' alt='twitter' width='22' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/josue-mora-terrero-796832288/'>
                        <div>
                            <img src='https://img.icons8.com/ios7/600/linkedin.png' alt='Linkedin' width='30' />
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/JosueMoraT'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='Github' width='29' />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div className='copi'>
        Copyright 2024-2025, Yamaha S.A. de C.V. Todos los derechos reservados
        Hecho por: Josue Mora Terrero 
        </div>
    </div>
}

export { Footer };