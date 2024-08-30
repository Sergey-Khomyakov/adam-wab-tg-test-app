import { FC } from 'react';
import classes from './css/IndexPage.module.css'
import Logo from '@/assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  miniApp.requestContact().then(data => {
    if (data.contact.phoneNumber !== "") {
      localStorage.setItem('phoneNumber', data.contact.phoneNumber);
      navigate('/main');
    }
  }).catch(() => {
    navigate('/error');
  });

  return (
    <SDKProvider acceptCustomStyles>
      <div className={classes.container}>
        <p style={{ color: '#111', fontSize: '0.5rem' }}>v.1.4</p>
        <img className={classes.logo} src={Logo} alt="Лого" />
      </div>
    </SDKProvider>
  );
};