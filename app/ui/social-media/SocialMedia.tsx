import React, {FC} from 'react';
import './index.scss';
import Link from 'next/link';
import {FaCartArrowDown, FaInstagram, FaShopify, FaStream} from 'react-icons/fa';

const SocialMedia: FC = () => {
  return (
    <div className='socialMedia__container'>
      <div className='fab'>
        <span className='fab-action-button'>
          <FaStream className='fab-action-button__icon'/>
        </span>
        <ul className='fab-buttons'>
          <li className='fab-buttons__item'>
            <a
              href='https://www.instagram.com/doshki.kom/'
              target='_blank'
              className='fab-buttons__link fab-buttons__link_inst'
              data-tooltip='Instagram'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
          </li>
          <li className='fab-buttons__item'>
            <Link href='/shop' className='fab-buttons__link' data-tooltip='Главная'>
              <FaShopify />
            </Link>
          </li>
          <li className='fab-buttons__item'>
            <Link href='/order' className='fab-buttons__link' data-tooltip='Корзина'>
              <FaCartArrowDown />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
