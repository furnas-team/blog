import React from 'react';
import {HomePage} from './pages/home/HomePage';
import {Switch, Route} from 'react-router-dom'
import {LearnPage} from './pages/learn/LearnPage';
import {LearnArticlePage} from './pages/learn-article/LearnArticlePage';
import Favicon from 'react-favicon';
//import './seo/sitemap.xml';
import {ConnectedTestPage} from './pages/test/TestPage';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from './components/theme-context/ThemeContext';


export class App extends React.Component {

  render() {

    const store = configureStore();

    return ([
      <Provider key="1" store={store}>
        <Switch>
          <Route exact path='/learn' component={LearnPage}/>
          <Route exact path='/learn/:name' component={LearnArticlePage}/>
          <Route exact path='/test' component={ConnectedTestPage}/>
          <Route exact path='/test/:step' component={ConnectedTestPage}/>
          <Route path='/' component={HomePage}/>
        </Switch>
      </Provider>,
      <Helmet>
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
