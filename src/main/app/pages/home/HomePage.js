import React from 'react';
import './home.scss';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {MainScreen} from './screens/main/MainScreen';
import {StepsExplanationScreen} from './screens/steps-explanation/StepsExplanationScreen';
import {TeamScreen} from './screens/team/TeamScreen';
import {MoneyScreen} from './screens/money/MoneyScreen';
import {DislikeScreen} from './screens/dislike/DislikeScreen';
import {ContactScreen} from './screens/contact/ContactScreen';
import {Popup} from '../../components/Popup/Popup';
import {Post1} from '../../posts/1/Post1';

export class HomePage extends React.Component {

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  handleContactClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked contact button"
    );
    this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.mixpanel.track(
        "Furnas | added user contact",
        {contact}
      );
      this.setState({contactPopupShown: true, requestSent: true});
    }
  };

  handleCloseButtonClick = () => {
    this.setState({contactPopupShown: false, requestSent: false});
  };

  render() {
    const {contactPopupShown, requestSent} = this.state;
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Блог | Furnas</title>
          <meta name="description" content="Рассказываем о том, как мы работает, что делаем сейчас, какие допускаем ошибки и делимся своими знаниями."/>
        </Helmet>
        <div className="home">
          <Header onContactClick={this.handleContactClick}
                  contactPopupShown={contactPopupShown}/>
          <div className="home__content">
            <Post1/>
          </div>
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
        </div>
      </ThemeProvider>
    );
  }

}
