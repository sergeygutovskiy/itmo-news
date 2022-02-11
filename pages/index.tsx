import NewsArticle from "../classes/Article";
import Language from "../classes/Language";

import Article from "../components/Article";

function HomePage(
    { 
        articles, 
        language 
    } : { 
        articles: NewsArticle[], 
        language: Language 
    }) {
    
    return (
        <section className="news-section container">
            <header className="news-section__header">
                <h1 className="title"> 
                    {language.text['news.header']}
                </h1>
            </header>
            <div className="news-section__content">
                {articles.map((article, i) => 
                    article 
                        ? 
                        <Article article={article} key={article.id} />
                        :
                        <Article article={article} key={i} />
                )}
            </div>
        </section>
    );
}
  
export default HomePage;