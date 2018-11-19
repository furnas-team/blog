import React from 'react';
import './learn-article.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleName, ArticleTitle} from '../../common/models/ArticleName';
import {BlockText} from '../../components/block-text/BlockText';
import {BlockTitle} from '../../components/block-title/BlockTitle';
import {Link} from '../../components/link/Link';
import {Helmet} from "react-helmet";


export function renderArticleBody(articleName) {
  switch (articleName) {
    case ArticleName.WHAT_IS_LANDING_PAGE:
      return ([
        <BlockText key="1">
          Landing page (лендинг) - рекламная страница в интернете, куда попадают пользователи, кликнувшие на рекламу.
        </BlockText>,
        <BlockText key="2">
          Landing page можно представить в виде рекламного щита, который не только рассказывает о вашем продукте, но и собирает информацию от пользователей.
        </BlockText>
      ]);
    case ArticleName.WHAT_FOR_LANDING_PAGE:
      return ([
        <BlockText key="1">Получить первых клиентов для нового бизнеса</BlockText>,
        <BlockText key="2">Проверить идею стартапа</BlockText>,
        <BlockText key="3">Рассказать о новой акции для покупателей</BlockText>,
        <BlockText key="4">Запуск нового товара</BlockText>,
        <BlockText key="5">Сезонная реклама</BlockText>,
        <BlockText key="6">Список далеко не полный. Коротко: есть что рекламировать - нужен Landing page.</BlockText>,
      ]);
    case ArticleName.DO_I_NEED_LANDING_PAGE:
      return ([
        <BlockText key="1">
          Если вам есть, что рекламировать, то скорее всего да.
        </BlockText>,
        <BlockText key="2">
          Посмотрите на <Link href="/learn/what-for">список</Link> зачем может быть нужен Landing page.
        </BlockText>,
      ]);
    case ArticleName.DO_I_NEED_LANDING_PAGE_IF_I_HAVE_ONLINE_STORE:
      return ([
        <BlockText key="1">
          Скорее всего да.
        </BlockText>,
        <BlockText key="2">
          Представим, что у вас интернет магазин и вы продаете смартфоны.
        </BlockText>,
        <BlockText key="3">
          Выходит новая версия iPhone и вы хотите, чтобы клиенты заказывали его у вас.
        </BlockText>,
        <BlockText key="4">
          Вы размещаете рекламу в соц сетях и ведете пользователя на Landing page, где еще раз рассказываете про новый iPhone и предлагаете простую форму заказа. Это увеличивает продажи.
        </BlockText>,
        <BlockText key="5">
          А так же, вы можете создавать Landing pages для акций, которые проходят у вас в магазине.
        </BlockText>,
      ]);
    case ArticleName.ONLINE_STORE_OR_LANDING_PAGE:
      return ([
        <BlockText key="1">
          Лучше начать с Landing page. Его создание занимает гораздо меньше времени и денег.
        </BlockText>,
        <BlockText key="2">
          К тому-же лендинг позволяет проверить интересен товар вашим клиентам и стоит ли дальше вкладывать деньги.
        </BlockText>
      ]);
    case ArticleName.HOW_USERS_FIND_LANDING_PAGE:
      return ([
        <BlockText key="1">
          Пользователи попадают на Landing page через рекламу. Например, вы покупаете рекламу в vk или instagram. Пользователь видит рекламу, кликает на нее и попадает на Landing page.
        </BlockText>
      ]);
    case ArticleName.DO_I_NEED_SEO_EXPERT:
      return ([
        <BlockText key="1">
          Нет. Landing page не продвигают в поиске Google или Yandex. Пользователи на лендинг попадают через рекламу.
        </BlockText>
      ]);
    case ArticleName.WHERE_BUY_ADS_FOR_LANDING_PAGE:
      return ([
        <BlockText key="1">
          <Link href="https://www.facebook.com/business"
                target="_blank">
            Instagram и Facebook
          </Link>
        </BlockText>,
        <BlockText key="2">
          <Link href="https://vk.com/ads"
                target="_blank">
            Vk
          </Link>
        </BlockText>,
        <BlockText key="3">
          <Link href="https://adwords.google.com/intl/ru_ru/home/"
                target="_blank">
            Google Adwords
          </Link>
        </BlockText>,
        <BlockText key="4">
          <Link href="https://direct.yandex.ru/"
                target="_blank">
            Yandex.Direct
          </Link>
        </BlockText>,
        <BlockText key="5">
          Список неполный, но это наш выбор.
        </BlockText>
      ]);
  }
}

export function LearnArticlePage(props) {

  const articleName = props.match.params.name;

  return (
    <ThemeProvider value={ThemeName.LIGHT}>
      <Helmet>
        <title>{ArticleTitle[articleName]}</title>
        <meta name="description" content="Полезные статьи по теме Landing page" />
      </Helmet>
      <div className="learn-article">
        <div className="learn-article__container" itemScope itemType="http://schema.org/Article">
          <a href="/">
            <Title className="learn-article__title">
              Furnas
            </Title>
          </a>
          <Subtitle className="learn-article__subtitle" itemProp="articleSection">
            Полезные статьи по теме Landing page
          </Subtitle>


          <BlockTitle className="learn-article__article-title" itemProp="name">
            {ArticleTitle[articleName]}
          </BlockTitle>

          <div itemProp="articleBody">
            {renderArticleBody(articleName)}
          </div>

          <div className="learn-article__learn-link">
            <Link href="/learn">
              Перейти к оглавлению
            </Link>
          </div>

        </div>
      </div>
    </ThemeProvider>
  );

}
