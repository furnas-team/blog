import React from 'react';
import './money-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';

export class MoneyScreen extends React.Component {

  render() {
    return (
      <div className="money-screen">
        <div className="money-screen__text">
          <SectionTitle className="money-screen__title">
            А сколько стоит?
          </SectionTitle>
          <BlockText>
            Каждый этап оплачивается отдельно.
          </BlockText>
          <BlockText>
            Всё зависит от сложности лендинга,
          </BlockText>
          <BlockText>
            но в среднем один лендинг стоит
          </BlockText>
          <BlockText>
            50-60 тыс. руб.
          </BlockText>
        </div>
        <div className="money-screen__image"></div>
      </div>
    );    
  }

}
