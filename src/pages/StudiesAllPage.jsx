import React, { useEffect, useState } from 'react';
import AllListArt from '../components/shared/AllListArt';
import { useTranslation } from 'react-i18next';
import apiBaseUrl from '../config';
import { getDateArr } from '../utils/getDateArr';

const StudiesAllPage = () => {
    const { t } = useTranslation(['articles-meta', 'articles', 'common']);
    const [allArticles, setAllArticles] = useState(null);

    const menuItemClick = (category, slug) => {
        navigate(`/${category}/${slug}`);
    }

    useEffect(() => {
        fetch(`${apiBaseUrl}/api/articles/studies/all`)
        .then(res => res.json())
        .then(data => {
          setAllArticles(data);
        })
        .catch(err => {
          console.error('There was an error retrieving resources.', err)
        });
    }, []);

    return (
    <>
        <main className='
            lg:min-h-[700px] w-full bg-slate-200
            flex flex-col gap-0'
        >
            {/* CHECK use the actual image */}
            {/* CHECK try animations or a presentation */}
            <div className="
                w-full px-8 py-24 relative
                before:content-[''] before:absolute before:inset-0
                before:bg-gradient-to-r before:from-[#0007] before:to-tranparent
                bg-[url(/assets/studies-cover.jpg)] bg-cover bg-left"
            >
                <h2 className='text-7xl text-white relative animate-slideDownSlow'>{t('studiesTitle')}</h2>
            </div>
            {/* This is the "main" section after the cover image */}
            <div className="p-8 flex-1 flex items-stretch gap-8">
                <div className="w-[60%] pb-4 flex flex-col justify-between gap-8">
                    {/* ? Future component */}
                    <div className="w-full flex flex-col bg-white border-gray-400 rounded-md overflow-hidden">
                        <div className="
                            w-full px-4 py-2 bg-[#1D47B7]
                            text-white text-lg font-bold"
                        >
                            {t('common:sortBy') + ':'}
                        </div>
                        {allArticles ? allArticles.map((art, index) => {
                            const dateArr = getDateArr(art.date);

                            return (
                            <AllListArt
                                key={index}
                                onClick={() => menuItemClick(art.category, art.slug)}
                                title={t(art.slug)}
                                date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]}`}
                            />
                            )
                        }) : <p className="self-center text-2xl lg:text-4xl">{t('loadingArticles')}</p>}
                    </div>
                    <p className='self-center text-lg'>{`${t('common:page')} 1 ${t('common:of')} 1`}</p>
                </div>
                <div className='flex-1 flex justify-center items-center overflow-hidden bg-gray-400'>
                    <img
                        className='h-full'
                        src="/assets/studies-side-img.jpg"
                        alt="Image of the Bible"
                    />
                </div>
            </div>
        </main>
    </>
    )
}

export default StudiesAllPage