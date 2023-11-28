import {Metadata} from 'next';
import s from './styles.module.scss';

export const metadata: Metadata = {
    title: 'Блог',
    description: 'Блог о картинах на дереве, картины на досках в Украине',
    keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

export default function Blog() {
    return (
        <div className={s.page}>
            <p>Постов нет !</p>
        </div>
    );
};
