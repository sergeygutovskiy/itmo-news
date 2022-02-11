import { useState } from "react";
import Language from "../classes/Language";

function Navigation(
    { 
        languages, 
        language, 
        onLanguageItemButtonClick 
    } : {
        languages: Map<string, Language>,
        language: Language,
        onLanguageItemButtonClick: (arg0: string) => void
    }) {    
    
    const [isLanguageListOpen, setIsLanguageListOpen] : [ boolean, any ] = useState(false);

    const onLanguagesButtonClick = () => setIsLanguageListOpen(!isLanguageListOpen);
    const onLanguagesItemClick = (lang: string) => {
        onLanguageItemButtonClick(lang);
        setIsLanguageListOpen(false);
    }

    return (
        <div className="navigation">
            <nav className="navigation__content container">
                <img 
                    className="navigation__logo" 
                    src="/images/logo.svg" 
                    alt="Логотип ИТМО"
                    width="160"
                    height="16"
                    />
                
                <div className="naviagtion-language">
                    <button 
                        className="naviagtion-language-item" 
                        onClick={onLanguagesButtonClick}
                        >
                        <img 
                            className="naviagtion-language-item__image" 
                            src={language.imagePath}
                            width="24"
                            height="24"
                            />
                        <span className="naviagtion-language-item__label">
                            {language.label}
                        </span>
                    </button>
                    <div className={isLanguageListOpen ? 'naviagtion-languages active' : 'naviagtion-languages'}>
                        {
                            Array.from( languages ).map(([index, lang ] : [string, Language])=> 
                                <button 
                                    className="naviagtion-language-item" 
                                    onClick={(e) => onLanguagesItemClick(index)}
                                    disabled={language.id == lang.id}
                                    key={lang.id}
                                    >
                                    <img 
                                        className="naviagtion-language-item__image" 
                                        src={lang.imagePath}
                                        width="24"
                                        height="24"
                                        />
                                    <span className="naviagtion-language-item__label">
                                        {lang.label}
                                    </span>
                                </button>
                            )
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navigation;