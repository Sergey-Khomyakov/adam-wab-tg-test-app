import { FC } from 'react';
import classes from './css/mainPage.module.css'
import { SDKProvider, retrieveLaunchParams, initBackButton } from '@telegram-apps/sdk-react';

const phoneNumber = localStorage.getItem('phoneNumber');
const { initData } = retrieveLaunchParams();

init();

/**
 * Renders the mainPage component.
*
* @return {JSX.Element} The rendered mainPage component.
*/
export const mainPage: FC = () => {

    return (
        <SDKProvider acceptCustomStyles>
            <div className={classes.container}>
                <h1>Мои данные</h1>
                <p>идентификатор: {initData?.user?.id}</p>
                <p>Имя пользователя: {initData?.user?.username}</p>
                <p>Имя: {initData?.user?.firstName}</p>
                <p>Фамилия: {initData?.user?.lastName}</p>
                <p>Premium: {initData?.user?.isPremium}</p>
                <p>URL-адрес фотографии профиля пользователя: {initData?.user?.photoUrl}</p>
                <p>пользователь добавил бота в меню вложений: {initData?.user?.addedToAttachmentMenu}</p>
                <p>пользователь разрешил боту отправлять ему сообщения: {initData?.user?.allowsWriteToPm}</p>
                <p>язык пользователя: {initData?.user?.languageCode}</p>
                <p>Номер телефона: {phoneNumber}</p>
            </div>
        </SDKProvider>
    );
};

function init() {
    const [backButton] = initBackButton();
    backButton.hide();
}