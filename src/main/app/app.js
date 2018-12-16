import React from 'react';
import {HomePage} from './pages/home/HomePage';
import {Route, Switch} from 'react-router-dom'
import './seo/sitemap.xml';
import './seo/robots.txt';
import {Helmet} from 'react-helmet';
import {Article, ArticlePath} from './models/ArticleModel';
import {ArticlePage} from './pages/article/ArticlePage';


export class App extends React.Component {

  render() {

    return ([
      <Switch>
        <Route exact path={`/${ArticlePath[Article.WORKER_VISA_DOCUMENTS]}`}
               render={(props) => <ArticlePage article={Article.WORKER_VISA_DOCUMENTS}/>}/>
        <Route path='/' component={HomePage}/>
      </Switch>,
      <Helmet key="2">
        <link rel="icon" sizes="192x192" href={require('./images/favicon-192x192.png')}/>
        <link rel="icon" sizes="144x144" href={require('./images/favicon-144x144.png')}/>
        <link rel="icon" sizes="96x96" href={require('./images/favicon-96x96.png')}/>
        <link rel="icon" sizes="48x48" href={require('./images/favicon-48x48.png')}/>
        <link rel="apple-touch-icon" href={require('./images/favicon-192x192.png')}/>
        <link rel="apple-touch-icon" sizes="76x76" href={require('./images/favicon-76x76.png')}/>
        <link rel="apple-touch-icon" sizes="120x120" href={require('./images/favicon-120x120.png')}/>
        <link rel="apple-touch-icon" sizes="152x152" href={require('./images/favicon-152x152.png')}/>
        <meta name="msapplication-square310x310logo" content={require('./images/favicon-310x310.png')}/>
      </Helmet>
    ]);
  }
}
