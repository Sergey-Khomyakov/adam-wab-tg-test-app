import classes from './css/Header.module.css'
import Logo from '@/assets/Logo.svg';
import LogoWhite from '@/assets/LogoWhite.svg';

import Icons from '@/components/Icons/Icons'

interface IHeader {
    isDark: boolean;
}

export const Header: React.FC<IHeader> = ({ isDark }) => {
    let logoSrc = isDark === true ? LogoWhite : Logo;

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={logoSrc} alt="Лого" />
            <div className={classes.btn}>
                <div className={isDark === true ? classes.icon__white : classes.icon}>
                    <Icons id="List"></Icons>
                </div>
            </div>
        </div>
    );
};