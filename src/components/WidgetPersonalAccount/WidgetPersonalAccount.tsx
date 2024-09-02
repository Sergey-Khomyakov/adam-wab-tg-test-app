import classes from './css/WidgetPersonalAccount.module.css'
interface IWidgetPersonalAccount {
    isDark: boolean;
}

export const WidgetPersonalAccount: React.FC<IWidgetPersonalAccount> = ({ isDark }) => {
    let className = `${classes.widgetPersonalAccount}`;

    if (isDark === true) {
        className += ` ${classes.dark__mode}`;
    }

    return (
        <div className={className}>
        </div>
    );
};