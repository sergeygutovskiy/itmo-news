import Link from "next/link";

import NewsArticle from "../classes/Article";

function Article(
    { 
        article 
    } : {
        article: NewsArticle
    }) {
    
    const renderPlaceholder = function() {
        return (
            <article className="news-article">
                <div className="skeleton-items news-article__image-wrapper">
                    <span className='skeleton-item w-1-1'></span>
                </div>
                <div className="news-article__content">
                    <span className="news-article__date">
                        <span className='skeleton-items'>
                            <span className='skeleton-item w-1-4'></span>
                        </span>
                    </span>
                    <p className="news-article__paragraph">
                        <span className='skeleton-items'>
                            <span className='skeleton-item w-1-1'></span>
                            <span className='skeleton-item w-1-1'></span>
                            <span className='skeleton-item w-1-1'></span>
                        </span>
                    </p>
                </div>
            </article>
        );
    }

    const renderArticle = function() {
        return (
            <Link href={`/articles/${article.id}`} passHref>
                <article className="news-article">
                    <div className="news-article__image-wrapper">
                        <img 
                            className="news-article__image" 
                            src={article.imagePath}
                            />
                    </div>
                    <div className="news-article__content">
                        <span className="news-article__date">
                            {article.date}
                        </span>
                        <p className="news-article__paragraph">
                            {article.title}
                        </p>
                    </div>
                </article>
            </Link>
        );
    }
    
    return !article ? renderPlaceholder() : renderArticle();
}

export default Article;