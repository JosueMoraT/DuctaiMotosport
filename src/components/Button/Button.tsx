import { FC } from "react";
import classNames from "classnames";

import './Button.styles.scss';

export interface ButtonProps {
    label?: string | null;
    className?: string;
    onClick?: () => void;
    type: 'button' | 'submit';
}

const Button: FC<ButtonProps>
    = ({ label, className, onClick, type }) => {
    const classes = classNames('button', className);

    return type === 'button' ? 
        <button className={classes} onClick={onClick}>
            {label}
        </button> :
        <input className={classes} type="submit" value={label || ''} />
}

export default Button;