import { FC } from 'react';
import {
  SDKProvider,
  retrieveLaunchParams,
  initInitData,
} from '@telegram-apps/sdk-react';

/**
 * Renders the IndexPage component.
 *
 * @return {JSX.Element} The rendered IndexPage component.
 */
export const IndexPage: FC = () => {
  const { initData } = retrieveLaunchParams();
  const initData2 = initInitData();

  return (
    <SDKProvider acceptCustomStyles debug>
      <h1>Мои данные: </h1>
      <p>идентификатор: {initData?.user?.id}</p>
      <p>Имя пользователя: {initData?.user?.username}</p>
      <p>Имя: {initData?.user?.firstName}</p>
      <p>Фамилия: {initData?.user?.lastName}</p>
      <p>Premium: {initData?.user?.isPremium}</p>
      <p>URL-адрес фотографии профиля пользователя: {initData?.user?.photoUrl}</p>
      <p>пользователь добавил бота в меню вложений: {initData?.user?.addedToAttachmentMenu}</p>
      <p>пользователь разрешил боту отправлять ему сообщения: {initData?.user?.allowsWriteToPm}</p>
      <p>язык пользователя: {initData?.user?.languageCode}</p>
      <p>queryId: {initData2?.queryId}</p>
      <p>queryId: {initData2?.user?.id}</p>
    </SDKProvider>
  );
};


// function getUserDataById(id: number | undefined) {
//   if(id !== undefined){
//     return fetch(url,
//       {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(details),
//       })
//       .then((response) => response.json());
//   }
// }