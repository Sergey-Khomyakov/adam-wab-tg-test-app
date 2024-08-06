import { FC } from 'react';
import { SDKProvider, initInitData } from '@telegram-apps/sdk-react';

const data = initInitData();
/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
console.log(data);
export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v5</h1>
    </SDKProvider>
  );
};
