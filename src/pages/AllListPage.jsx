import React, { useEffect, useState } from 'react';
import AllListArt from '../components/shared/AllListArt';
import { useTranslation } from 'react-i18next';
import { getDateArr } from '../utils/getDateArr';
import { getDateNumber } from '../utils/getDateNumber';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AllListSortItem from '../components/shared/AllListSortItem';
import { numberCallback, dateCallback, alphabeticalCallback, getCallbackIndex } from '../utils/sortCallbacks';
import CoverTitle from '../components/shared/CoverTitle';
const API_URL = import.meta.env.VITE_API_URL;

const AllListPage = () => {
    const { t } = useTranslation(['articles-meta', 'articles', 'common', 'date']);
    const [allArticles, setAllArticles] = useState(null);
    const { category } = useParams();
    const navigate = useNavigate();

    const menuItemClick = (category, slug) => {
        navigate(`/${category}/${slug}`);
    }

    useEffect(() => {
        fetch(`${API_URL}/api/articles/${category}/all`)
        .then(res => res.json())
        .then(data => {
          setAllArticles(data);
        })
        .catch(err => {
          console.error('There was an error retrieving resources.', err)
        });
    }, []);

    // Descending is the default most normal
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort');
    const order = searchParams.get('order');
    const changeSortOrder = (newSort, newOrder) => {
        setSearchParams({ sort: newSort, order: newOrder });
    }

    const sortCallbacksArr = [
        dateCallback,
        numberCallback,
        alphabeticalCallback
    ]

    const sortCallbackIndex = getCallbackIndex(sort);
    console.log(sortCallbacksArr[sortCallbackIndex]);
    

    return (
    <>
        <main className='
            lg:min-h-[700px] w-full bg-slate-200
            flex flex-col gap-0'
        >
            {/* CHECK use the actual image */}
            {/* CHECK try animations or a presentation */}
            <CoverTitle
                imgUrl={`/assets/${category === 'studies' ? 'studies-cover' : 'reflections-cover'}.webp`}
                positionY={category === 'studies' ? '50%' : '10%'}    
            >
                {t(category + 'Title')}
            </CoverTitle>
            {/* This is the "main" section after the cover image */}
            <div className="p-2 lg:p-8 flex-1 flex flex-col lg:flex-row lg:items-stretch gap-20 lg:gap-8">
                <div className="w-full lg:w-[60%] pb-4 flex flex-col justify-between gap-8">
                    {/* Table ? consider component */}
                    <div className="w-full flex flex-col bg-white rounded-md lg:rounded-md overflow-hidden">
                        <div className="
                            w-full p-2 lg:px-4 lg:py-2 bg-[#1D47B7]
                            flex justify-between items-center lg:justify-start lg:gap-12
                            text-white text-xs lg:text-lg font-bold"
                        >
                            <span>{t('common:sortBy') + ':'}</span>
                            <AllListSortItem
                                label={t('common:latest')}
                                purposeSort={'date'}
                                paramSort={sort}
                                paramOrder={order}
                                changeSortOrder={changeSortOrder}
                            />
                            <AllListSortItem
                                label={t('common:mostPopular')}
                                purposeSort={'popular'}
                                paramSort={sort}
                                paramOrder={order}
                                changeSortOrder={changeSortOrder}
                            />
                        </div>
                        {allArticles ? allArticles.sort(sortCallbacksArr[sortCallbackIndex](order)).map((art, index) => {
                            const dateArr = getDateArr(art.date);

                            return (
                                <AllListArt
                                    key={index}
                                    onClick={() => menuItemClick(art.category, art.slug)}
                                    title={t('articles:' + art.slug)}
                                    date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]} ${t('date:poky')}`}
                                    category={category}
                                    views={art.views}
                                />
                            )
                        }) : <p className="p-8 self-center text-2xl lg:text-4xl">{t('loadingArticles')}</p>}
                    </div>
                    <p className='self-center text-sm lg:text-lg'>{`${t('common:page')} 1 ${t('common:of')} 1`}</p>
                </div>
                {/* Side Image */}
                <div className='flex-1 flex justify-center items-center overflow-hidden bg-gray-400 relative'>
                    <div className="
                        absolute inset-0 px-12 grid place-content-center z-10
                        bg-black bg-opacity-50 text-white"
                    >
                        <p className='text-2xl lg:text-3xl font-thin text-center'>{t('allListVerse')}</p>
                    </div>
                    <img
                        className='h-[110%]'
                        src="/assets/faith-of-centurion-side-img.jpeg"
                        alt="Image of the Bible"
                    />
                </div>
            </div>
        </main>
    </>
    )
}

export default AllListPage