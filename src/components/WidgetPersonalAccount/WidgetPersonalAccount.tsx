import classes from './css/WidgetPersonalAccount.module.css'
interface IWidgetPersonalAccount {
    isDark: boolean;
}

export const WidgetPersonalAccount: React.FC<IWidgetPersonalAccount> = ({ isDark }) => {

    return (
        <div className={classes.header}>
        </div>
    );
};