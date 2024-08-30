import { FC, useEffect } from 'react';
import classes from './css/errorPage.module.css'

import { SDKProvider, initBackButton } from '@telegram-apps/sdk-react';


/**
 * Renders the errorPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const errorPage: FC = () => {

    useEffect(() => {
        const [backButton] = initBackButton();
        backButton.hide();
    }, []);

    return (
        <SDKProvider acceptCustomStyles>
            <div className={classes.container}>
                <h1>Доступ запрещен</h1>
            </div>
        </SDKProvider>
    );
};