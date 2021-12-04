import React from 'react';
import { Button as UIButton, ButtonProps } from '@ui-kitten/components';

const Button = (props: ButtonProps) => {
    return <UIButton {...props}  style={{ borderRadius: 10 }} />
}

export default Button;