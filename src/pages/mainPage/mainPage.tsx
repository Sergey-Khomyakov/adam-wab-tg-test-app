import { FC } from 'react';
import classes from './css/mainPage.module.css'

import { SDKProvider } from '@telegram-apps/sdk-react';


/**
 * Renders the IndexPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const mainPage: FC = () => {
    return (
        <SDKProvider acceptCustomStyles>
            <div className={classes.container}>
                <h2>Telegram Mini App</h2>
            </div>
        </SDKProvider>
    );
};