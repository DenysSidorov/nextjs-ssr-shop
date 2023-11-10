import React, {FC} from 'react';
import './index.scss';
import Link from 'next/link';
// import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
// import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';

const MenuCart: FC = () => {
  let count = 12;
  // const cartItems: Array<ICartReducerItem> = useSelector(selectCartItems);
  // cartItems.forEach((el: ICartReducerItem) => {
  //   count += el.count;
  // });
  return (
    <Link href='/order' className='main-cart'>
      <i className='fa fa-shopping-cart main-cart__ico' data-js_count={count} />
    </Link>
  );
};

export default MenuCart;
