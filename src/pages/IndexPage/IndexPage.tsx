import { FC, useEffect } from 'react';
import {
  SDKProvider,
  initInitData,
  useBackButton,
  useBackButtonRaw,
  useViewport,
  useViewportRaw,
  useBiometryManagerRaw,
} from '@telegram-apps/sdk-react';

// Viewport is being initialized asynchronously, so signal may return undefined.
// After some time it will receive a valid value.
const vp = useViewport();

useEffect(() => {
  console.log(vp); // will be undefined and then Viewport instance.
}, [vp])

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */


export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App v5</h1>
    </SDKProvider>
  );
};
