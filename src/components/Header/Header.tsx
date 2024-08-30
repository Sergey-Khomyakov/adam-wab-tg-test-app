import { FC } from 'react';
import classes from './css/Header.module.css'
import Logo from '@/assets/Logo.svg';

import Icons from '@/components/Icons/Icons'

export const Header: FC = () => {

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo} alt="Лого" />
            <div className={classes.btn}>
                <Icons id="Wheelchair"></Icons>
            </div>
        </div>
    );
};