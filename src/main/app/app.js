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
      <Favicon key="2" url={require('./images/favicon.ico')}/>
    ]);
  }
}
