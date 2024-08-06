import { FC } from 'react';
import { SDKProvider, BrowserNavigator, retrieveLaunchParams } from '@telegram-apps/sdk-react';

new BrowserNavigator(['/index'], 0);

const { initDataRaw } = retrieveLaunchParams();

console.log(initDataRaw);
/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v4</h1>
    </SDKProvider>
  );
};
