import React, {FC} from 'react';
import './index.scss';
import MenuCart from '@/app/ui/main-menu/menu-cart/MenuCart';
import Link from 'next/link';

const MainMenu: FC = () => {
  return (
      <div>
        <div className='menuSection left fullWidth js_search-height'>
          <div className='container'>
            <div className='flexWrapMenu'>
              <div className='menu'>
                {/*<CategoryMenu />*/}
                <ul className='menu__menuHeader'>
                  <li className='menu__menuHeader_item'>
                    <Link href='/shop'>Главная</Link>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <Link href='/#aboutUs'>О нас</Link>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <Link href='/#price'>Цены</Link>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <Link href='/contacts' color='#2EA9FD'>
                      Контакты
                    </Link>
                  </li>
                </ul>
                <MenuCart />
              </div>
            </div>
          </div>
        </div>
        <div className='left fullWidth js_search-margin' />
      </div>
  );
};

export default MainMenu;
