import classes from './css/BurgerMenu.module.css'
import { Nav } from '@/components/Nav/Nav';


interface IBurgerMenu {
    isDark: boolean;
    isActive: boolean;
    style: {
        top: number
    }
    nav: Array<{
        title: string;
        link: string;
        listLinks: Array<{
            iconId: string | null;
            title: string;
            link: string;
            description: string | null;
        }> | null;
    }>;
}
export const BurgerMenu: React.FC<IBurgerMenu> = ({ isDark, isActive, nav, style }) => {
    let className = `${classes.burgerMenu}`;

    if (isActive === true) {
        className += ` ${classes.active}`;
    }

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }

    return (
        <div className={className} style={{ top: style.top + "px" }}>
            <div className='container'>
                <div className={classes.burgerMenu__header}>
                </div>
                <div className={classes.burgerMenu__body}>
                    <Nav isDark={isDark} items={nav}></Nav>
                </div>
                <div className={classes.burgerMenu__footer}>
                </div>
            </div>
        </div>
    );
};