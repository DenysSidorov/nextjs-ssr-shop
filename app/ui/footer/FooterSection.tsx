import './index.scss';
import Link from 'next/link';
import {FaInstagram, FaPhoneAlt} from 'react-icons/fa';


const FooterSection = () => {
  // const number1 = useSelector(selectServiceNumber1);
  const number1 = '+3809366677755'
  return (
    <div className='footerSection left fullWidth '>
      <div className='container'>
        <div className='footerMainBlock'>
          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Телефоны для связи</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__phones'>
            <span className='menu_one_telFooter'>
              <FaPhoneAlt />
              <a href={`tel:+${number1}`}>{number1}</a>
            </span>
          </div>

          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Узнавайте о новинках первыми</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__socials'>
            <a href='https://www.instagram.com/doshki.kom/' target='_blank' className='menu_one_soc' rel='noreferrer'>
              <FaInstagram />
            </a>
          </div>

          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Дополнительная информация</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__payment-delivery'>
            <div className='footerMainBlock__payment-delivery_menu'>
              <div className='contactMenuBlockFooter'>
                <ul className='contactMenuBlockFooter_main'>
                  <li className=''>
                    <Link href='/'>Главная</Link>
                  </li>
                  <li className=''>
                    <Link href='/about-us'>О нас</Link>
                  </li>
                  <li className=''>
                    <Link href='/payment-and-delivery'>Оплата и доставка</Link>
                  </li>
                  <li className=''>
                    <Link href='/cashback-and-exchange'>Возврат и обмен</Link>
                  </li>
                  {/* <li className=""><a>Блог</a></li> */}
                  <li className=''>
                    <Link href='/contacts'>Контакты</Link>
                  </li>
                </ul>
              </div>

              <div className='contactMenuBlockFooter'>
                {/* <ul className="contactMenuBlockFooter_main"> */}
                {/* <li className=""><a>Новинки</a></li> */}
                {/* <li className=""><a>Акции</a></li> */}
                {/* <li className=""><a>Скидки</a></li> */}
                {/* <li className=""><a>Популярное</a></li> */}
                {/* <li className=""><a>Детские</a></li> */}
                {/* <li className=""><a>Мужские</a></li> */}
                {/* </ul> */}
              </div>
              <div className='socribeBtnBlockFooter' />
            </div>

            <div className='footerMainBlock__socials_delivery'>
              <div className='imgFooterBlock'>
                <img className='imgFooter' src='/img-static/privatbank.png' alt='' />
              </div>
              <div className='imgFooterBlock'>
                <img className='nvpochta imgFooter' src='/img-static/navaposhta.png' alt='' />
              </div>
            </div>
          </div>
          <p className='footerMainBlock__payment-delivery_payment-afferta'>
            Украина, г. Одесса, тел. {number1}. Весь контент © 2017. Зазначені товарні знаки та продукція маркована
            знаками для товарів захищені авторським правом.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
