// import React, {useCallback, useEffect, useState} from 'react';
// import qs from 'query-string';
// import linkParams from '../../../helpers/libs/queryParams';
// import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import HomePageSpinner from '@/app/components/home-page-spinner/HomePageSpinner';
import LinksToImages from '@/app/components/links-to-images/LinksToImages';
import HeadBanner from '@/app/components/head-banner/HeadBanner';
import MenuInfoSection from '@/app/ui/menu-info-section/MenuInfoSection';
import TagsMainSection from '@/app/ui/tags-main-section/TagsMainSection';
// import Pagination from '@/app/components/pagination/Pagination';
import SimilarGoodsSection from '@/app/ui/similar-goods-section/SimilarGoodsSection';
import CardsSection from '@/app/ui/cards-section/CardsSection';
import {Metadata} from 'next';
// import {getGoodsAPI, getPopularGoodsAPI, getUniqCategoriesInGoodsAPI} from '../../../api/endpoints';

export const metadata: Metadata = {
    title: 'Shop',
    description: ''
};

async function getData() {
    const response: Response = await fetch('http://localhost:8001/api/goods', {
        next: {
            revalidate: 1 // sec, how often to ask db, otherwise use cache
        }
    });

    if (!response.ok) {
        throw new Error('Could not fetch data');
    }
    return response.json();
}

const Home = async () => {
    let cardsState: any[] = [];
    const response = await getData();
    cardsState = response;
    const popularCardsState: any[] = [];
    const uniqCategoryState: any[] = [];
    const paginationPageActiveState = 1;
    const countState = 1;
    // const [cardsState, setCards] = useState([]);
    // const [popularCardsState, setPopularCards] = useState([]);
    // const [uniqCategoryState, setUniqCategory] = useState([]);
    // const [paginationPageActiveState, setPaginationPageActive] = useState<number>(1);
    // const [countState, setCount] = useState<number>(1);

    // useEffect(() => {
    //     const getData = async () => {
    //         window.scrollTo(0, 0);
    //         const params = linkParams(history.location.search);
    //         const sort = params.sort;
    //         const pagesize = params.pagesize;
    //         const numberpage = params.numberpage;
    //
    //         let cards: any = [];
    //         let popularCards: any = [];
    //         let uniqCategory: any = [];
    //
    //         if (sort) {
    //             setTitle(`Картины на дереве - ${sort}`);
    //             setMetaTag('description');
    //             setMetaTag(
    //                 'keywords',
    //                 `интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины ${sort}`,
    //             );
    //         } else {
    //             setTitle('Главная');
    //             setMetaTag('description');
    //             setMetaTag(
    //                 'keywords',
    //                 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    //             );
    //         }
    //
    //         try {
    //             cards = await getGoodsAPI({sort, pagesize, numberpage});
    //             popularCards = await getPopularGoodsAPI();
    //             uniqCategory = await getUniqCategoriesInGoodsAPI();
    //         } catch (e) {
    //             console.log(e);
    //         } finally {
    //             setCount(cards.data.count);
    //             setCards(cards.data.goods);
    //             setPaginationPageActive((numberpage && numberpage - 1) || 0);
    //             setPopularCards(popularCards.data);
    //             setUniqCategory(uniqCategory.data);
    //         }
    //     };
    //
    //     getData();
    // }, [history.location.search]);
    //
    // useEffect(() => {
    //     const getData = async () => {
    //         const params = linkParams(history.location.search);
    //         const numberpage = params.numberpage;
    //         setPaginationPageActive((numberpage && numberpage - 1) || 0);
    //     };
    //     getData();
    // }, [history.location.search]);
    //
    // const onPageChange = useCallback(
    //     (pagin: any) => {
    //         const params = linkParams(history.location.search);
    //         params.pagesize = 50;
    //         params.numberpage = pagin.selected + 1;
    //         const searchString: string = qs.stringify(params);
    //         history.push(`/shop?${searchString}`);
    //     },
    //     [history],
    // );

    return (
        <div>
            <MenuInfoSection />
            <HeadBanner />
            {uniqCategoryState && uniqCategoryState.length ? <TagsMainSection uniqCategory={uniqCategoryState} /> : null}
            {cardsState && cardsState.length ? <CardsSection count={countState} cards={cardsState} /> : null}
            {/*{cardsState && cardsState.length ? (*/}
            {/*    <Pagination*/}
            {/*        pageCount={countState}*/}
            {/*        inOnePage={50}*/}
            {/*        paginationPageActive={paginationPageActiveState}*/}
            {/*        // onPageChange={onPageChange}*/}
            {/*        onPageChange={()=> {}}*/}
            {/*    />*/}
            {/*) : null}*/}
            {cardsState && cardsState.length ? <LinksToImages /> : null}
            {!cardsState.length ? <HomePageSpinner /> : null}
            {popularCardsState && popularCardsState.length > 0 ? (
                <SimilarGoodsSection cards={popularCardsState} title='Популярные' isShowAllSimilar={false} />
            ) : null}
        </div>
    );
};

export default Home;
