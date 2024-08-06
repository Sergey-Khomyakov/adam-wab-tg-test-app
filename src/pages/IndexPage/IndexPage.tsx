import { FC, useEffect } from 'react';
import { SDKProvider, useBackButton } from '@telegram-apps/sdk-react';


function Component() {
  const bb = useBackButton(true); // will be undefined or BackButton.

  useEffect(() => {
    if (bb) {
      // Here we can safely work with the BackButton.
    }
  }, [bb]);
}

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  Component();
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v4</h1>
    </SDKProvider>
  );
};
