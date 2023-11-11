import React, {FC} from 'react';
import './index.scss';
import Link from 'next/link';
import {FaShopify} from 'react-icons/fa';
// import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
// import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';

const MenuCart: FC = () => {
  let count = 12;
  // const cartItems: Array<ICartReducerItem> = useSelector(selectCartItems);
  // cartItems.forEach((el: ICartReducerItem) => {
  //   count += el.count;
  // });
  return (
    <Link href='/order' className='main-cart' data-js_count={count}>
        <FaShopify className='main-cart__ico' />
    </Link>
  );
};

export default MenuCart;
