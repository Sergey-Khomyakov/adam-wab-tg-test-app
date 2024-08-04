import { FC, useEffect } from 'react';
import { SDKProvider, useBackButton } from '@telegram-apps/sdk-react';


export const IndexPage: FC = () => {
  const bb = useBackButton(true); // will be undefined or BackButton.

  useEffect(() => {
    if (bb) {
      // Here we can safely work with the BackButton.
    }
  }, [bb]);

  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v3</h1>
    </SDKProvider>
  );
};
