import React from 'react';
import './learn.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleLink} from '../../components/article-link/ArticleLink';
import {ArticleName} from '../../common/models/ArticleName';
import {Helmet} from "react-helmet";

export function LearnPage() {
  return (
    <ThemeProvider value={ThemeName.LIGHT}>
      <Helmet>
        <title>Полезные статьи по теме Landing page | Furnas</title>
        <meta name="description" content="Что такое Landing page? Зачем нужен лендинг? Нужен ли мне Landing page? Где купить рекламу для лендинга?" />
      </Helmet>
      <div className="learn">
        <div className="learn__container">
          <a href="/">
            <Title className="learn__title">
              Furnas
            </Title>
          </a>
          <Subtitle className="learn__subtitle">
            Полезные статьи по теме Landing page
          </Subtitle>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.WHAT_IS_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.WHAT_FOR_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_LANDING_PAGE_IF_I_HAVE_ONLINE_STORE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.ONLINE_STORE_OR_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.HOW_USERS_FIND_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_SEO_EXPERT}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.WHERE_BUY_ADS_FOR_LANDING_PAGE}>
          </ArticleLink>
        </div>
      </div>
    </ThemeProvider>
  );

}
