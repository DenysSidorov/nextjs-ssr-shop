import {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Проверка пользователя',
    description: 'Возврат и обмен в течении 14 дней, соблюдении всех правил честной торговли',
    keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

// import React, {FC, useCallback, useEffect} from 'react';
// import {useDispatch} from 'react-redux';
// import {saveUserToken} from '../../../redux/reducers/auth-reducer/actions';
// import queryParams from '../../../helpers/libs/queryParams';
// import {useLocation} from 'react-router-dom';


export default function VerifyUser() {
    // const location = useLocation();
    // const dispatch = useDispatch();
    // const saveUserTokenFu = useCallback(
    //     (token: string) => {
    //         dispatch(saveUserToken(token));
    //     },
    //     [dispatch]
    // );

    // useEffect(() => {
    //     window.scrollTo(0, 0);
        // const params = queryParams(location.search);
        // const token = params['t'];
        // if (token) {
        //     saveUserTokenFu(token);
        // }
    // }, []);
    return <div className='verifyUserContainer'>
        <Link href="/shop" style={{color: 'blue'}}>
            На главную
        </Link>
    </div>;
};

