import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import  classNames  from "classnames";

import './ButtonLink.styles.scss';


export interface ButtonLinkProps {
    href: string;
    label: string;
    className?: string;
    iconAfter?: () => React.ReactElement 
}

const ButtonLink: FC<ButtonLinkProps>
    = ({ href, label, className, iconAfter}) => {
    const classes = classNames('button-link', className)

    return <a className={classes} href={href}> 
        {
            label && <div className = "button-link-label">{label}</div>
        }
        {
            iconAfter ?
            iconAfter() :
            <FaArrowRightLong />
        }
    </a>;
    }
export { ButtonLink };