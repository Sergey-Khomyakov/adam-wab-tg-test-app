import { FC, useEffect } from 'react';
import classes from './css/mainPage.module.css'
import { SDKProvider, retrieveLaunchParams, initBackButton, initThemeParams } from '@telegram-apps/sdk-react';
import { Header } from '@/components/Header/Header'

/**
 * Renders the IndexPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const mainPage: FC = () => {
    const phoneNumber = localStorage.getItem('phoneNumber');
    const { initData } = retrieveLaunchParams();
    const [themeParams] = initThemeParams();
    const isDark = themeParams.isDark;


    useEffect(() => {
        const [backButton] = initBackButton();
        backButton.hide();
    }, []);

    return (
        <SDKProvider acceptCustomStyles>
            <Header isDark={isDark} />
            <div className={classes.container}>
                <h1>Добрый день</h1>
                <p>{initData?.user?.firstName} {initData?.user?.lastName}</p>
                <p>{phoneNumber}</p>
            </div>
        </SDKProvider>
    );
};