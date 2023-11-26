import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'деревяные картины в украине, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины',
    keywords: ['интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины']
};

// import React, {FC, useEffect} from 'react';
// import {useSelector} from 'react-redux';
// import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
// import {IServiceReducer} from '../../../redux/reducers/service-app';
// import {selectServiceReducer} from '../../../redux/reducers/service-app/selectors';

interface IContacts {}

export default function Contacts() {
    // const serviceReducer: IServiceReducer = useSelector(selectServiceReducer);

    const number1 = '+3809366677755';
    const email1 = 'abc@gmail.com';
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setTitle('Контакты');
    //     setMetaTag('description');
    //     setMetaTag(
    //         'keywords',
    //         'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    //     );
    // }, []);

    return (
        <>
            <div style={{fontSize: '1rem', marginTop: '10px', marginBottom: '10px'}}>
                Онлайн магазин. Украина, г. Одесса.
            </div>
            <div style={{fontSize: '1rem', marginBottom: '10px'}}>Телефон: {number1}</div>
            <div style={{fontSize: '1rem', marginBottom: '100px'}}>
                Почтовый ящик: {email1}
            </div>
        </>
    );
};

