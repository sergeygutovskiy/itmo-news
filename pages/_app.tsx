import Head from 'next/head';
import { AppProps } from 'next/app';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';

import NewsArticle from '../classes/Article';
import Language from '../classes/Language';

import '../styles/app.scss';
import Navigation from "../components/Navigation";

export default function MyApp(
    { 
        Component, 
        pageProps 
    } : 
        AppProps
    ) {
    
    const languages = new Map([
        [
            'ru', 
            new Language({
                label: 'Рус',
                id: 1,
                imagePath: '/images/countries/rus.png',
                text: {
                    'news.header': 'Новости и события',
                }
            })
        ],

        [
            'eng', 
            new Language({
                label: 'Eng',
                id: 2,
                imagePath: '/images/countries/eng.png',
                text: {
                    'news.header': 'News and events',
                }
            })
        ],
    ]);
    
    const [language, setLanguage] : [ Language, (arg0: Language) => void] = useState(languages.get('ru'));
    const [articles, setArticles] : [ NewsArticle[], (arg0: NewsArticle[]) => void] = useState(Array(9).fill(null));
    
    const fetchArticles = async () => {
        setArticles(Array(9).fill(null));
        
        const response = await fetch(
            `https://news.itmo.ru/api/news/list/?ver=2.0&per_page=9&lead=true&language_id=${language.id}`
        );
        
        const data = await response.json();
        
        const items : NewsArticle[] = [];
        data.news.forEach((i : any) => items.push(NewsArticle.fromJSON(i)));
        
        setArticles(items);
    };

    useEffect(() => {
        fetchArticles();
    }, [ language ]);
    
    const onLanguageChanged = (lang : string) => setLanguage(languages.get(lang));

    return (
        <Fragment>
            <Head>
                <title>ITMO news</title>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
            </Head>
            <Navigation languages={languages} language={language} onLanguageItemButtonClick={onLanguageChanged} />
            <Component {...pageProps} articles={articles} language={language} />
        </Fragment>
    );
}