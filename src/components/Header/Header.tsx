import { FC } from 'react';
import classes from './css/Header.module.css'
import Logo from '@/assets/Logo.svg';
import LogoWhite from '@/assets/LogoWhite.svg';

import Icons from '@/components/Icons/Icons'

interface IHeader {
    theme: string;
}

export const Header: React.FC<IHeader> = ({ theme }) => {
    let logoSrc = theme === "Dark" ? LogoWhite : Logo;

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={logoSrc} alt="Лого" />
            <div className={classes.btn}>
                <Icons id="List"></Icons>
            </div>
        </div>
    );
};