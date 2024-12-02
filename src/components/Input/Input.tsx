import { FC } from "react";
import classNames from "classnames";

import './Input.styles.scss';

export interface InputProps {
    value?: string;
    className?: string;
    onChange?: (e: any) => void;
    type: React.HTMLInputTypeAttribute;
    defaultValue?: string | number;
}

const Input: FC<InputProps>
    = ({ className, onChange, type, ...rest }) => {
    const classes = classNames('button', className);

    return <input className={classes} type={type} onChange={onChange} {...rest}/>
}

export default Input;