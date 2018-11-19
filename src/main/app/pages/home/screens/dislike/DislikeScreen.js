import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './dislike-screen.scss';

export class DislikeScreen extends React.Component {

  render() {
    return (
      <div className="dislike-screen">
        <div className="dislike-screen__text">
          <SectionTitle className="dislike-screen__title">
            А если не понравится?
          </SectionTitle>
          <BlockText>
            Результат каждого этапа обсуждаем.
          </BlockText>
          <BlockText>
            Если работа не нравится, то за неё
          </BlockText>
          <BlockText>
            можно не платить.
          </BlockText>
        </div>
        <div className="dislike-screen__image"></div>
      </div>
    );    
  }

}
