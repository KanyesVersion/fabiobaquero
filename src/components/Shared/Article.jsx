import { useEffect, useState } from "react";
import renderElementFromData from "../../utils/renderElementFromData";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Article = () => {
    const { category, slug } = useParams();
    const [content, setContent] = useState(null);
    const { i18n } = useTranslation();
    const { t } = useTranslation('common')
    
    useEffect(() => {
        // Fetch the article content from the backend
        fetch(`${API_URL}/api/articles/${category}/${slug}`)
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .then(data => {
            setContent(data);
        })
        .catch(err => {
            console.error('There was an error accessing the article:', err);
        });

        // Increment views
        fetch(`${API_URL}/api/articles/${category}/${slug}/add-view`, { method: 'POST' })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to increment views');
            }
        })
        .catch(err => {
            console.error('Error incrementing views:', err);
        })
    }, [category, slug]);

    return (
    <main className="w-full bg-[#f9f9f8] flex flex-col gap-6 md:gap-8">
        {content ? content.map((elementData, index) => 
                renderElementFromData(elementData, index, i18n.language)
            ) : <div className="w-full full-section grid place-content-center text-3xl lg:text-4xl text-center">
                    {t('loading') + '...'}</div>
        }
    </main>
    )
}

export default Article