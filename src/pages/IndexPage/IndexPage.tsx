import { FC } from 'react';
import { SDKProvider } from '@telegram-apps/sdk-react';


export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v3</h1>
    </SDKProvider>
  );
};
