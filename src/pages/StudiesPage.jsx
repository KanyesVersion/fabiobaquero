import { useTranslation } from "react-i18next";
import ContentLandingMain from "../components/shared/ContentLandingMain";
import ContentLandingMenu from "../components/shared/ContentLandingMenu";
import ContentLandingArt from "../components/shared/ContentLandingArt";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDateArr } from "../utils/getDateArr";
const API_URL = import.meta.env.VITE_API_URL;

const StudiesPage = () => {
  const { t } = useTranslation(['articles-meta', 'articles', 'date']);
  const navigate = useNavigate();
  const [popular5Data, setPopular5Data] = useState(null);
  const [latest5Data, setLatest5Data] = useState(null);

  const menuItemClick = (category, slug) => {
    navigate(`/${category}/${slug}`);
  }

  useEffect(() => {
    fetch(`${API_URL}/api/articles/studies/top-5-viewed`)
    .then(res => res.json())
    .then(data => {
      setPopular5Data(data);
    })
    .catch(err => {
      console.error('There was an error retrieving resources.', err)
    });

    fetch(`${API_URL}/api/articles/studies/latest-5`)
    .then(res => res.json())
    .then(data => {
      setLatest5Data(data);
    })
    .catch(err => {
      console.error('There was an error retrieving resources.', err)
    });
  }, []);

  return (
    <>
      <ContentLandingMain>
        <h1 className="content-land-title">{t('studiesTitle')}</h1>
        <div className="flex w-full flex-1 flex-col lg:flex-row gap-12 lg:gap-0 lg:min-w-[1200px]">
            <div className="flex justify-center items-center lg:p-8 lg:flex-1">
              {/* Latest */}
              <ContentLandingMenu
                title={t('latestArticles')}
                category='studies'
                queryParams={'?sort=date&order=desc'}
              >
                {latest5Data ? latest5Data.map((art, index) => {
                    const dateArr = getDateArr(art.date);

                    return (
                      <ContentLandingArt
                        key={index}
                        onClick={() => menuItemClick(art.category, art.slug)}
                        title={t('articles:' + art.slug)}
                        date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]} ${t('date:poky')}`}
                        views={null}
                      />
                    )
                  }) : <p className="self-center text-2xl lg:text-3xl">{t('loadingArticles')}</p>}
              </ContentLandingMenu>
            </div>
            <div className="
              flex justify-center items-center lg:p-8 flex-1 
              lg:border-l-[1px] border-gray-400 border-opacity-50"
            >
              {/* Popular */}
              <ContentLandingMenu
                title={t('mostPopular')}
                category='studies'
                queryParams={'?sort=popular&order=desc'}
              >
                {popular5Data ? popular5Data.map((art, index) => {
                  const dateArr = getDateArr(art.date);

                  return (
                    <ContentLandingArt
                      key={index}
                      onClick={() => menuItemClick(art.category, art.slug)}
                      title={t('articles:' + art.slug)}
                      date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]} ${t('date:poky')}`}
                      views={null}
                    />
                  )
                }) : <p className="self-center text-2xl lg:text-3xl">{t('loadingArticles')}</p>}
              </ContentLandingMenu>
            </div>
        </div>
      </ContentLandingMain>
    </>
  )
}

export default StudiesPage