import { FC, useState } from 'react';
import classes from './css/IndexPage.module.css'
import Logo from '@/assets/Logo.svg';

import {
  SDKProvider,
  initMiniApp
} from '@telegram-apps/sdk-react';


/**
 * Renders the IndexPage component.
*
* @return {JSX.Element} The rendered IndexPage component.
*/
export const IndexPage: FC = () => {
  const [miniApp] = initMiniApp();
  const [phone, setPhone] = useState("");

  miniApp.requestContact().then(data => {
    setPhone(data.contact.phoneNumber);
    console.log(phone);
  });

  return (
    <SDKProvider acceptCustomStyles>
      <div className={classes.container}>
        <img className={classes.logo} src={Logo} alt="Лого" />
      </div>
    </SDKProvider>
  );
};