import {Metadata} from 'next';
import s from './styles.module.scss';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Заказ принят',
    description: 'Заказ будет обработан в течении рабочего дня приятных покупок',
    keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

export default function AfterOrder() {
    const orderNumber = 123432;
    return (
        <div className={s.page}>
            <p>Спасибо за ваш заказ. Наши менеджеры свяжутся с Вами в ближайшее время!</p>
            {orderNumber && (
                <p>
                    Номер вашего заказа: <span style={{color: 'green'}}>{orderNumber}</span>
                </p>
            )}
            <p>
                <Link href="/shop" style={{color: 'blue'}}>
                    На главную
                </Link>
            </p>
        </div>
    );
};
