import {Metadata} from 'next';
import './index.scss';

export const metadata: Metadata = {
    title: 'О нас',
    description: 'Наш магазин продает товары уже более 5 лет, быстрая доставка, удобная оплтата и приветливый персонал!',
    keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     </main>
//   )
// }

export default function About() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div className='pageAbout__container'>
            <div className='pageAbout__container_img-container'>
                <img src='/img-static/dostavka.png' alt='Доставка оплата' />
            </div>

            <p>
                Каждый человек в повседневной жизни нуждается в том, чтобы под рукой всегда были необходимые предметы. Для этих
                целей идеально подойдет
                <b>
                    <a> рюкзак</a>
                </b>
                , который с каждым днем становится все более популярным среди различных категорий населения.
            </p>
            <p>
                Изначально рюкзаки применялись туристами в походах и путешествиях. На сегодня{' '}
                <b>
                    <a>городской рюкзак</a>
                </b>
                является модным и стильным аксессуаром, который отлично подходит для ежедневного использования.
            </p>
            <p>
                Модели рюкзаков, представленные на нашем сайте, изготовлены из качественного, очень прочного материала. Изделия
                повторяют анатомическое строение человеческого тела, равномерно распределяя нагрузку. Удобные лямки надежно
                фиксируют рюкзак на спине.
            </p>
            <p>
                Вы всегда сможете выбрать и<a> купить рюкзак</a>
                <b /> &nbsp;стильную модель, которая подчеркнет индивидуальность ее владельца, поможет широкий ассортимент
                размещенных в нашем каталоге товаров.
            </p>
            <p>
                <b>
                    <a>Женские рюкзаки</a>
                </b>
                , которые сочетают в себе практичность и модные тенденции, украсят собой гардероб любой модницы.
            </p>
            <p>Вместительные рюкзаки для мужчин отличаются предельной функциональностью, интересным дизайном.</p>
            <p>
                <a>Молодежные</a> модели рюкзаков с множеством отделений для мобильного устройства, планшета и других любимых
                гаджетов станут незаменимым аксессуаром у юных любителей стильных вещей.
            </p>
            <p>
                Оформить заказ на сайте компании можно быстро и оперативно. Опытные специалисты ответят на все вопросы,
                предоставят нужную информацию, помогут выбрать оптимальную модель рюкзака. Гарантия качества, доступные цены,
                оперативная доставка – вот наш девиз!
            </p>
            <br />
        </div>
    );
};

