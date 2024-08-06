import { FC } from 'react';
import { SDKProvider, initInitData } from '@telegram-apps/sdk-react';

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  const data = initInitData();
  console.log(data);
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v5</h1>
    </SDKProvider>
  );
};
