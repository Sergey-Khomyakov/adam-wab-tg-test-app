import { useState, useRef, useEffect } from 'react';
import classes from './css/Header.module.css'
import Logo from '@/assets/Logo.svg';
import LogoWhite from '@/assets/LogoWhite.svg';
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import Icons from '@/components/Icons/Icons'

interface IHeader {
    isDark: boolean;
}

export const Header: React.FC<IHeader> = ({ isDark }) => {
    let logoSrc = isDark === true ? LogoWhite : Logo;
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [headerRef]);

    const [isMenuActive, setIsMenuActive] = useState(false);
    const nav = [
        {
            title: 'Главная', link: '/', listLinks: [
                {
                    iconId: 'AirplaneInFlight',
                    title: 'Ссылка 1',
                    link: '/link1',
                    description: 'Описание ссылки 1',

                },
                {
                    iconId: null,
                    title: 'Ссылка 2',
                    link: '/link2',
                    description: null
                }
            ]
        },
        { title: 'О нас', link: '/about', listLinks: null },
        { title: 'Контакты', link: '/contacts', listLinks: null },
    ];

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    let className = `${classes.header}`;

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }

    return (
        <div className={className}>
            <img className={classes.logo} src={logoSrc} alt="Лого" />
            <div className={classes.btn}>
                <div className={classes.icon} onClick={toggleMenu}>
                    {isMenuActive ? <Icons id="X"></Icons> : <Icons id="List"></Icons>}
                </div>
            </div>
            <BurgerMenu isDark={isDark} isActive={isMenuActive} nav={nav} style={{ top: headerHeight }} />
        </div>
    );
};