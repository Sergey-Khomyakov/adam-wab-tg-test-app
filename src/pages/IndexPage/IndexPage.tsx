import { FC } from 'react';
import {
  SDKProvider,
  retrieveLaunchParams,
} from '@telegram-apps/sdk-react';

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  const { initData } = retrieveLaunchParams();
  const encoding = initData?.user?.username
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>${encoding}</h1>
    </SDKProvider>
  );
};
