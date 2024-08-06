import { FC } from 'react';
import { SDKProvider, BrowserNavigator } from '@telegram-apps/sdk-react';

new BrowserNavigator(['/index'], 0);

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v3</h1>
    </SDKProvider>
  );
};
