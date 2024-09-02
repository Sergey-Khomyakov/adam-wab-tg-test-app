import classes from './css/Dropdown.module.css'
import Icons from '@/components/Icons/Icons'
import { useState } from 'react';
interface IDropdown {
    isDark: boolean;
    item: {
        title: string;
        link: string;
        listLinks: Array<{
            iconId: string | null;
            title: string;
            link: string;
            description: string | null;
        }> | null;
    };
}

export const Dropdown: React.FC<IDropdown> = ({ isDark, item }) => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    let className = `${classes.dropdown}`;

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }
    if (isMenuActive === true) {
        className += ` ${classes.dropdown__active}`;
    }
    return (
        <div className={className}>
            <div className={classes.dropdown__box} onClick={item.listLinks !== null ? toggleMenu : undefined} >
                <div className={classes.dropdown__item} >
                    {item.listLinks !== null ? (
                        <p className={classes.dropdown__title}>{item.title}</p>
                    ) : (
                        <a className={classes.dropdown__title} href={item.link}>{item.title}</a>
                    )}
                </div>
                {item.listLinks !== null ? (
                    <div className={classes.dropdown__btn} onClick={item.listLinks !== null ? undefined : toggleMenu}>
                        <Icons id="CaretDown" />
                    </div>
                ) : null}
            </div>
            <div className={classes.dropdown__list}>
                {
                    item.listLinks !== null ? (
                        item.listLinks.map((listItem, index) => (
                            <a key={index} className={classes.dropdown__link} href={listItem.link}>
                                {listItem.iconId !== null ? (
                                    <Icons id={listItem.iconId} />
                                ) : null}
                                <div className={classes.dropdown__block}>
                                    <p className={classes.dropdown__title}>{listItem.title}</p>
                                    {listItem.description !== null ? (
                                        <p className={classes.dropdown__description}>{listItem.description}</p>
                                    ) : null}
                                </div>
                            </a>
                        ))
                    ) : null
                }
            </div>
        </div>
    );
};