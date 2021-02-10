import React from 'react';
import { Interface } from 'readline';
import './Buttonsx.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [ 
    'btn--medium',
    'btn--large'
]

interface IButtonProps extends React.HTMLAttributes<Element> {
    children?: any;
    type?:  any;
    onClick?:  any;
    buttonStyle?:  any;
    buttonSize?: any;
    // add any custom props, but don't have to specify `children`
}

export const Buttonsx: React.FC<IButtonProps> = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Buttonsx;