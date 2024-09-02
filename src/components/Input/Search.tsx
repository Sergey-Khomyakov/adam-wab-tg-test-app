import classes from './css/Search.module.css'
import Icons from '@/components/Icons/Icons'

interface ISearch {
    isDark: boolean;
}

export const Search: React.FC<ISearch> = ({ isDark }) => {

    let className = `${classes.dropdown}`;

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }

    return (
        <div className={className}>
        </div>
    );
};