import { FC, ReactNode } from "react";
import classNames from "classnames";

import './Select.styles.scss';

export interface SelectProps {
    className?: string;
    children: ReactNode;
}

const Select: FC<SelectProps>
    = ({ className, children, ...rest }) => {
    const classes = classNames('button', className);

    return <select className={classes} {...rest} >
        { children }
    </select>
}

export default Select;