import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './team-screen.scss';
import {TextUnderline, UnderlineColor} from '../../../../components/text-underline/TextUnderline';
import {RegularText} from '../../../../components/regular-text/RegularText';

export class TeamScreen extends React.Component {

  render() {
    return (
      <div className="team-screen">
        <div className="team-screen__text">
          <SectionTitle className="team-screen__title">
            А кто делает?
          </SectionTitle>
          <BlockText>
            Команда из двух человек:
          </BlockText>
          <BlockText>
            <RegularText><TextUnderline underlineColor={UnderlineColor.BLUE}>Frontend Developer</TextUnderline></RegularText> — отвечает за разработку и тексты;
          </BlockText>
          <BlockText>
            <RegularText><TextUnderline underlineColor={UnderlineColor.PINK}>UX/UI Designer</TextUnderline></RegularText> — отвечает за внешний вид лендинга.
          </BlockText>
        </div>
        <div className="team-screen__image"></div>
      </div>
    );
  }

}
