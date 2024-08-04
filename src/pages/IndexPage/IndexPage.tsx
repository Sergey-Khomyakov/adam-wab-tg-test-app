import { FC } from 'react';
import { SDKProvider } from '@telegram-apps/sdk-react';

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
