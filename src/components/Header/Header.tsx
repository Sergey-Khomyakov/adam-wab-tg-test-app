import { FC } from 'react';
import classes from './css/Header.module.css'
import Logo from '@/assets/Logo.svg';
import LogoWhite from '@/assets/LogoWhite.svg';

import Icons from '@/components/Icons/Icons'

export const Header: FC = () => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)');

    let logoSrc = theme.matches ? LogoWhite : Logo;

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={logoSrc} alt="Лого" />
            <div className={classes.btn}>
                <Icons id="List"></Icons>
            </div>
        </div>
    );
};