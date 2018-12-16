import React from 'react';
import './article.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {Popup} from '../../components/Popup/Popup';
import {ContactScreen} from '../home/screens/contact/ContactScreen';
import {string} from 'prop-types';
import {WorkerVisaDocuments} from '../../articles/worker-visa-documents/WorkerVisaDocuments';
import {Article} from '../../models/ArticleModel';

export class ArticlePage extends React.Component {

  static propTypes = {
    article: string
  };


  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  handleContactClick = () => {
    window.mixpanel.track(
      "Furnas.Blog | user clicked contact button"
    );
    this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.mixpanel.track(
        "Furnas.Blog | added user contact",
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
    const {article} = this.props;
    return (
      [
        <Helmet>
          <title>Блог | Furnas</title>
          <meta name="description" content="Рассказываем о том, как мы работает, что делаем сейчас, какие допускаем ошибки и делимся своими знаниями."/>
        </Helmet>,
        <div className="home">
          <Header onContactClick={this.handleContactClick}
                  contactPopupShown={contactPopupShown}/>
          <div className="home__content">
            {article === Article.WORKER_VISA_DOCUMENTS && <WorkerVisaDocuments/>}
          </div>
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
        </div>
      ]
    );
  }

}
