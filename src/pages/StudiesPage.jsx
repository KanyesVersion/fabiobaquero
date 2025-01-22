import { useTranslation } from "react-i18next";
import ContentLandingMain from "../components/shared/ContentLandingMain";
import ContentLandingMenu from "../components/shared/ContentLandingMenu";
import ContentLandingArt from "../components/shared/ContentLandingArt";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDateArr } from "../utils/getDateArr";
import apiBaseUrl from "../config"

const StudiesPage = () => {
  const { t } = useTranslation(['articles', 'date']);
  const navigate = useNavigate();
  const [popular5Data, setPopular5Data] = useState(null);

  const menuItemClick = (category, slug) => {
    navigate(`/articles/${category}/${slug}`);
  }

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/articles/studies/top-5-viewed`)
    .then(res => res.json())
    .then(data => {
      setPopular5Data(data);
    })
    .catch(err => {
      console.error('There was an error retrieving resources.', err)
    });
  }, []);

  return (
    <>
      <ContentLandingMain>
        <h1 className="content-land-title">{t('studiesTitle')}</h1>
        <div className="flex w-full flex-1 flex-col lg:flex-row gap-12 lg:gap-0 lg:min-w-[1068px]">
            <div className="lg:p-4 lg:flex-1">
                <ContentLandingMenu title={t('mostPopular')}>
                  {popular5Data ? popular5Data.map((art, index) => {
                    const dateArr = getDateArr(art.date);

                    return (
                      <ContentLandingArt
                        key={index}
                        onClick={() => menuItemClick(art.category, art.slug)}
                        title={t(art.slug)}
                        date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]}`}
                        views={null}
                      />
                    )
                  }) : <p className="self-center text-2xl lg:text-4xl">{t('loadingArticles')}</p>}
                </ContentLandingMenu>
            </div>
            <div className="lg:p-4 flex-1 lg:border-l-[2px] border-gray-400 border-opacity-50">
                <ContentLandingMenu title={t('latestArticles')}>
                  {popular5Data ? popular5Data.map((art, index) => {
                      const dateArr = getDateArr(art.date);

                      return (
                        <ContentLandingArt
                          key={index}
                          onClick={() => menuItemClick(art.category, art.slug)}
                          title={t(art.slug)}
                          date={`${dateArr[0]} ${t('date:de')} ${t('date:' + dateArr[1])} ${dateArr[2]}`}
                          views={art.views}
                        />
                      )
                    }) : <p className="self-center text-2xl lg:text-4xl">{t('loadingArticles')}</p>}
                </ContentLandingMenu>
            </div>
        </div>
      </ContentLandingMain>
    </>
  )
}

export default StudiesPage