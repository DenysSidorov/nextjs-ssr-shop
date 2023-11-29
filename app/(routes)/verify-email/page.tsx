import {Metadata} from 'next';
import s from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Проверка почты',
  description: 'Проверка почты на сайте',
  keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

export default function Page() {
  const email = 'ad@gmail.com'
  const getHistoryValue = () => {
    // const internalState = history.location.state;
    // internalState?.email
    if (email) {
      return <span style={{color: 'green', textDecoration: 'underline'}}>{' '}{email}</span>;
    }
    return null;
  };

  return (
    <div className={s.page}>
      <p>
        Подтвердите свою почту, письмо с ссылкой о подтверждении отправленно на:{' '}
        {getHistoryValue()}
      </p>
    </div>
  );
};

