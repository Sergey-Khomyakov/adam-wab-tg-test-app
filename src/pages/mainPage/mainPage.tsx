import { FC, useEffect } from 'react';
import classes from './css/mainPage.module.css'
import { SDKProvider, retrieveLaunchParams, initBackButton } from '@telegram-apps/sdk-react';
import { Header } from '@/components/Header/Header'
/**
 * Renders the IndexPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const mainPage: FC = () => {
    const phoneNumber = localStorage.getItem('phoneNumber');
    const { initData } = retrieveLaunchParams();
    const theme = 'Dark'
    useEffect(() => {
        const [backButton] = initBackButton();
        backButton.hide();
    }, []);

    return (
        <SDKProvider acceptCustomStyles>
            <Header theme={theme} />
            <div className={classes.container}>
                <h1>Добрый день</h1>
                <p>{initData?.user?.firstName} {initData?.user?.lastName}</p>
                <p>{phoneNumber}</p>
            </div>
        </SDKProvider>
    );
};