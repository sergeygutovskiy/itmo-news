import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import NewsArticle from "../../classes/Article";

function ArticlePage(
    { 
        articles 
    } : {
        articles: NewsArticle[]
    }) {

    const router = useRouter();
    const { id } = router.query;
    
    const [article, setArticle] : [NewsArticle, (arg0: NewsArticle) => void] = useState(null);
    
    useEffect(() => {
        const _article = articles.find(a => a && a.id.toString() === id);
        setArticle(_article);
    }, [ articles, id ]);

    const renderArticle = function() {
        return (
            <section className="article-section container">
                <header className="article-section__header">
                    <h1 className="title"> {article.title} </h1>
                </header>
                <div 
                    className="article-section__content"
                    dangerouslySetInnerHTML={{__html: article.lead }}
                    >
                </div>
            </section>
        );
    }

    const renderPlaceholder = function() {
        return (
            <section className="article-section container">
                Загрузка...
            </section>
        );
    }

    return !article ? renderPlaceholder() : renderArticle();
}

export default ArticlePage;