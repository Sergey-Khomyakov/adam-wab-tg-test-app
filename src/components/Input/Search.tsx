import classes from './css/Search.module.css'

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