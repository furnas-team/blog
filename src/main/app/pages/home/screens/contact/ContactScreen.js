import React from 'react';
import './contact-screen.scss';
import {Input} from '../../../../components/input/Input';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Link} from '../../../../components/link/Link';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {bool, func} from 'prop-types';
import ReactDOM from 'react-dom';

export class ContactScreen extends React.Component {

  static propTypes = {
    requestSent: bool,
    onSendContactClick: func,
    onCloseButtonClick: func
  };

  handlePhoneClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked phone link"
    );
  };

  handleEmailClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked phone link"
    );
  };

  inputRef = React.createRef();

  render() {
    const {requestSent, onSendContactClick, onCloseButtonClick} = this.props;

    return (
      <div className="contact-screen">
        <div className="contact-screen__form">
          {!requestSent &&
          <SectionTitle className="contact-screen__title">
            Как связаться?
          </SectionTitle>}
          {requestSent &&
          <SectionTitle className="contact-screen__title">
            Письмо отправлено!
          </SectionTitle>}
          {!requestSent &&
          <div>
            <BlockText>
              Оставьте свои контактные данные и
            </BlockText>
            <BlockText>
              мы свяжемся с вами в течение дня
            </BlockText>
            <Input className="contact-screen__input"
                   placeholder="Телефон, почта или скайп"
                   ref={this.inputRef}/>
            <Button className="contact-screen__button"
                    buttonStyle={ButtonStyle.BIG_BLUE}
                    onClick={() => onSendContactClick(ReactDOM.findDOMNode(this.inputRef.current).value)}>
              Связаться
            </Button>
          </div>}
          {requestSent &&
          <div>
            <div className="contact-screen__image">
            </div>
            <BlockText>
              Мы свяжемся с вами в
            </BlockText>
            <BlockText>
              ближайшее время.
            </BlockText>
            <Button className="contact-screen__button-back"
                    buttonStyle={ButtonStyle.BIG_PINK}
                    onClick={onCloseButtonClick}>
              Вернуться
            </Button>
          </div>}
        </div>
        {!requestSent &&
        <div className="contact-screen__links">
          <SectionTitle className="contact-screen__title">
            Контакты
          </SectionTitle>
          <div className="contact-screen__link">
            <Link href="tel:+7(915)682-19-55"
                  onClick={this.handlePhoneClick}>
              +7(915) 682-19-55
            </Link>
          </div>
          <div className="contact-screen__link">
            <Link onClick={this.handleEmailClick}>
              furnasteam@gmail.com
            </Link>
          </div>
        </div>}
      </div>
    );
  }

}
