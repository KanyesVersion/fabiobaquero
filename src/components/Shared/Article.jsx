import { useEffect, useState } from "react";
import renderElementFromData from "../../utils/renderElementFromData";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import apiBaseUrl from "../../config";

const Article = () => {
    const { category, slug } = useParams();
    const [content, setContent] = useState(null);
    const { i18n } = useTranslation();
    
    useEffect(() => {
        // Fetch the article content from the backend
        fetch(`${apiBaseUrl}/api/articles/${category}/${slug}`)
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
    }, [slug]);

    return (
    <main className="w-full p-6 bg-[#f9f9f8] flex flex-col gap-6 md:gap-8">
        {content ? content.map(
            (elementData, index) => renderElementFromData(elementData, index, i18n.language)
        ) : 'Loading...'}
    </main>
    )
}

export default Article