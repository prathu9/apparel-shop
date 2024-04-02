import React, { ButtonHTMLAttributes } from "react";
import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    buttonType?: string
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]
}

const Button = ({children, buttonType, ...otherProps}: ButtonProps) => {
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton
            {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default Button;