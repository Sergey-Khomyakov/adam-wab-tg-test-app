import type { FC } from 'react';
import { initBackButton, initMainButton } from '@telegram-apps/sdk';
import { SDKProvider } from '@telegram-apps/sdk-react';

const [mb, cleanupMb] = initMainButton();
const [bb, cleanupBb] = initBackButton();

// Clicking the MainButton hides it and shows the BackButton.
mb.on('click', () => {
  mb.hide();
  bb.show();
});

// Clicking the BackButton hides it and shows the MainButton.
bb.on('click', () => {
  mb.show();
  bb.hide();
});

// Configure the MainButton.
mb
  .setBgColor('#1D4F9B')
  .setTextColor('#ffffff')
  .setText('Нажми на меня')
  .enable()
  .show();

// When we don't need BackButton and MainButton anymore, we can 
// perform a cleanup. After calling a cleanup, the initialized 
// component will not receive any events.
cleanupMb();
cleanupBb();

export const IndexPage: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Telegram Web App</h1>
    </SDKProvider>
  );
};
