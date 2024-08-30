import { FC } from 'react';
import classes from './css/errorPage.module.css'

import { SDKProvider } from '@telegram-apps/sdk-react';


/**
 * Renders the IndexPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const errorPage: FC = () => {
    return (
        <SDKProvider acceptCustomStyles>
            <div className={classes.container}>
                <h2>Error</h2>
            </div>
        </SDKProvider>
    );
};