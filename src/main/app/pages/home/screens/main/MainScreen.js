import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './main-screen.scss';
import classNames from 'classnames';
import {func} from 'prop-types';

export class MainScreen extends React.Component {

  static propTypes = {
    onSendContactClick: func
  };

  state = {
    animationFinished: false,
  };

  inputRef = React.createRef();
  desktopInputRef = React.createRef();

  render() {
    const {onSendContactClick} = this.props;
    const {animationFinished} = this.state;
    return (
      <div className={classNames("main-screen", {"main-screen_animation-finished": animationFinished})}>
        Список статей
      </div>
    );
  }

}
