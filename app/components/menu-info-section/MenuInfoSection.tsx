import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import Phone from './Phone';
import './index.less';
import Link from 'next/link';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import {signoutUser, isAdminFunc} from '../../../redux/reducers/auth-reducer/actions';
// import {selectServiceReducer} from '../../../redux/reducers/service-app/selectors';
// import {selectAuthReducer} from '../../../redux/reducers/auth-reducer/selectors';

interface IMenuInfoSection {}

const MenuInfoSection: FC<IMenuInfoSection> = () => {
  // const authReducer = useSelector(selectAuthReducer);
  // const serviceReducer = useSelector(selectServiceReducer);
  // const {authenticated, isAdmin} = authReducer;
  // const dispatch = useDispatch();
  const number1 = '+3809366677755';
  const authenticated = false;
  const isAdmin = false;
  const signoutUser = () => {};
  const isAdminFunc = () => {};
  const dispatch = (fu: any) => {
    if (1 > 0){
      console.log(fu);
    }
  };


  const unAuth = useCallback(() => {
    dispatch(signoutUser());
  }, [dispatch]);

  const isAdminFuncInternal = useCallback(() => {
    dispatch(isAdminFunc());
  }, [dispatch]);
  // Redux part END

  const [time, setTime] = useState(0);
  const timer = useRef<any>(null);

  const verifyAdminLink = useCallback(() => {
    isAdminFuncInternal();
  }, [isAdminFuncInternal]);

  useEffect(() => {
    verifyAdminLink();
    timer.current = setInterval(() => {
      setTime((prev) => prev + 500);
    }, 500);
    return clearInterval(timer.current);
  }, [verifyAdminLink]);

  useEffect(() => {
    if (time >= 5000) {
      clearInterval(timer.current);
    }
  });

  return (
    <div className='menuInfoSection left fullWidth '>
      <div className='container'>
        <div className='submenuBlock'>
          {1001 < 1000 ? null : (
            <div className='submenuBlock_container'>
              <div className='contactInfo'>
                <ul className='contactInfo__list-contacts-info'>
                  <ReactCSSTransitionGroup
                    transitionName='menuInfoSection'
                    transitionAppear
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                  >
                    <li>
                      <Phone phoneText={number1} phoneMobile={`tel:${number1}`} />
                    </li>

                    <li>
                      <span
                        className='contactInfo__list-contacts-info_time'
                        title='График работы, условия оплаты и доставки'
                      >
                        <meta content='Mo-Fr 10:00-19:00' />
                        <i className='fa fa-clock-o' />
                        &nbsp; 10:00-19:00&nbsp;пн-пт
                      </span>
                    </li>
                  </ReactCSSTransitionGroup>
                </ul>
              </div>
              <div className='userInfo'>
                <ul className='userInfo__listInfo'>
                  <ReactCSSTransitionGroup
                    transitionName='menuInfoSectionRigth'
                    transitionAppear
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                  >
                    {authenticated && isAdmin && (
                      <li>
                        <Link href='/panel'>Админка</Link>
                      </li>
                    )}
                    {authenticated && (
                      <li>
                        <Link href='/profile'>Профиль юзера</Link>
                      </li>
                    )}
                    {authenticated && (
                      <li>
                        <a onClick={unAuth}>Выйти</a>
                      </li>
                    )}
                    {!authenticated && (
                      <li>
                        <Link href='/logup'>Регистрация</Link>
                      </li>
                    )}
                    {!authenticated && (
                      <li>
                        <Link href='/login'>Войти</Link>
                      </li>
                    )}
                  </ReactCSSTransitionGroup>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuInfoSection;
