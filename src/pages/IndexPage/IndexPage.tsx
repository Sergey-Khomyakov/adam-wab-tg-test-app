import { FC } from 'react';
import { SDKProvider, useMainButtonRaw } from '@telegram-apps/sdk-react';


/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {

  const mainButton = useMainButtonRaw();
  mainButton?.result?.show();

  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v4</h1>
    </SDKProvider>
  );
};
