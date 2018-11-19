import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './steps-explanations-screen.scss';
import {BlockTitle} from '../../../../components/block-title/BlockTitle';
import {TextUnderline} from '../../../../components/text-underline/TextUnderline';

export class StepsExplanationScreen extends React.Component {

  render() {
    return (
      <div className="steps-explanation-screen">
        <div className="steps-explanation-screen__text">
          <SectionTitle className="steps-explanation-screen__title">
            В 4 шага?
          </SectionTitle>
          <BlockText>
            Это значит, что весь процесс делится
          </BlockText>
          <BlockText>
            на следующие этапы:
          </BlockText>
        </div>
        <div className="steps-explanation-screen__schema">
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-number">
                1
              </div>
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Интервью</TextUnderline>
                </BlockTitle>
                <BlockText>
                  Знакомимся, определяем цели лендинга, обсуждаем экраны.
                </BlockText>
              </div>
            </div>
            <div className="steps-explanation-screen__right-arrow">
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__left-arrow">
            </div>
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-number">
                2
              </div>
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Прототип</TextUnderline>
                </BlockTitle>
                <BlockText>
                  Рисуем наброски лендинга, обсуждаем.
                </BlockText>
              </div>
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-number">
                3
              </div>
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Дизайн</TextUnderline>
                </BlockTitle>
                <BlockText>
                  Рисуем&nbsp;лендинг в чистовом варианте, обсуждаем.
                </BlockText>
              </div>
            </div>
            <div className="steps-explanation-screen__right-arrow">
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div>
            </div>
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-number">
                4
              </div>
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Разработка</TextUnderline>
                </BlockTitle>
                <BlockText>
                  Реализуем лендинг, размещаем на&nbsp;хостинге.
                </BlockText>
              </div>
            </div>
          </div>
        </div>
        <div className="steps-explanation-screen__schema-desktop">
          <div className="steps-explanation-screen__big-flower">
            <div className="steps-explanation-screen__flower-top">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  <span className="steps-explanation-screen__flower-color">2</span> Прототип
                </BlockTitle>
                <div className="steps-explanation-screen__flower-top-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-top-text">Рисуем наброски лендинга, обсуждаем.</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-bottom">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  <span className="steps-explanation-screen__flower-color">4</span> Разработка
                </BlockTitle>
                <div className="steps-explanation-screen__flower-bottom-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-bottom-text">Реализуем лендинг, размещаем на&nbsp;хостинге.</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-left">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  <span className="steps-explanation-screen__flower-color">1</span> Интервью
                </BlockTitle>
                <div className="steps-explanation-screen__flower-left-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-left-text">Знакомимся, определяем цели лендинга, обсуждаем экраны.</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-right">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  <span className="steps-explanation-screen__flower-color">3</span> Дизайн
                </BlockTitle>
                <div className="steps-explanation-screen__flower-right-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-right-text">Рисуем&nbsp;лендинг в чистовом варианте, обсуждаем.</BlockText>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
