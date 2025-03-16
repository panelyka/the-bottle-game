import classNames from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";




interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
}


const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    return (
        <button className={classNames(cls.Button,
            {},
            [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button