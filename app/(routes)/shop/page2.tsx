// import React, {useCallback, useEffect, useState} from 'react';
// import qs from 'query-string';
// import linkParams from '../../../helpers/libs/queryParams';
import CardsSection from '../../modules/cards-section/CardsSection';
// import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import SimilarGoodsSection from '../../modules/similar-goods-section/SimilarGoodsSection';
import HomePageSpinner from '@/app/components/home-page-spinner/HomePageSpinner';
import LinksToImages from '@/app/components/links-to-images/LinksToImages';
import HeadBanner from '@/app/components/head-banner/HeadBanner';
import MenuInfoSection from '@/app/components/menu-info-section/MenuInfoSection';
import TagsMainSection from '@/app/components/tags-main-section/TagsMainSection';
import Pagination from '@/app/components/pagination/Pagination';
// import {getGoodsAPI, getPopularGoodsAPI, getUniqCategoriesInGoodsAPI} from '../../../api/endpoints';


const Home = () => {
    const cardsState: any[] = [];
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
            {cardsState && cardsState.length ? (
                <Pagination
                    pageCount={countState}
                    inOnePage={50}
                    paginationPageActive={paginationPageActiveState}
                    // onPageChange={onPageChange}
                    onPageChange={()=> {}}
                />
            ) : null}
            {cardsState && cardsState.length ? <LinksToImages /> : null}
            {!cardsState.length ? <HomePageSpinner /> : null}
            {popularCardsState && popularCardsState.length > 0 ? (
                <SimilarGoodsSection cards={popularCardsState} title='Популярные' isShowAllSimilar={false} />
            ) : null}
        </div>
    );
};

export default Home;
