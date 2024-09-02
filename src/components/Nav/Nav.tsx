import classes from './css/Nav.module.css'
import { Dropdown } from '@/components/Dropdown/Dropdown'

interface INav {
    isDark: boolean;
    items: Array<{
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


export const Nav: React.FC<INav> = ({ isDark, items }) => {

    let className = `${classes.nav}`;

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }
    return (
        <div className={className}>
            {items.map((item, index) => (
                <Dropdown key={index} isDark={isDark} item={item} />
            ))}
        </div>
    );
};