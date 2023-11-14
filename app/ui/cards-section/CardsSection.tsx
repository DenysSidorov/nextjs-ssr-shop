import React, {FC} from 'react';
import './index.scss';
import CardMainPage from '@/app/components/card/Card';
import {ICartItem} from '@/app/services/interfaces';

interface ICardsSection {
  count: number;
  cards: Array<ICartItem>;
}

const CardsSection: FC<ICardsSection> = ({count, cards}) => {
  return (
    <div className='cardSection left fullWidth '>
      <div className='container'>
        <div className='productsCardBlock'>
          <div className='productsCardBlock__navigation' />
          <div className='productsCardBlock__searchCard' />
          <div className='productsCardBlock__searchCard-count'>Найдено : {count}</div>
          <div className='productsCardBlock__bodyCardItems'>
            {cards.map((el: any) => (
              <CardMainPage card={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
