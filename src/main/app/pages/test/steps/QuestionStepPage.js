import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';
import {TestControlOption, TestExceptLandingOption, TestMoneyOption, TestStep, TestTimeOption, TestWhatIsDoneOption} from '../../../models/TestModel';
import {string, func, oneOfType, arrayOf} from 'prop-types';
import {QuestionOptionsList} from '../components/QuestionOptionsList';
import {QuestionOption} from '../components/QuestionOption';

function renderQuestionHeader(step) {
  switch (step) {
    case TestStep.MONEY:
      return <div className="test__step-title_small">Как вы думаете, сколько будет стоить работа над сайтом?</div>;
    case TestStep.WHAT_IS_DONE:
      return 'Что вы уже сделали?';
    case TestStep.CONTROL:
      return <div className="test__step-title_small">Как вы хотите участвовать в процессе создания лендинга?</div>;
    case TestStep.EXCEPT_LANDING:
      return <div className="test__step-title_small">Что нужно кроме дизайна и верстки лендинга?</div>;
    case TestStep.TIME:
      return <div className="test__step-title_small">Сколько времени вы готовы уделить созданию лендинга?</div>;
  }
}

export class QuestionStepPage extends React.Component {

  static propTypes = {
    step: string,
    onAnswerChange: func,
    onNextButtonClick: func,
    answerValue: oneOfType([string, arrayOf(string)])
  };


  static defaultProps = {
    onAnswerChange(value){}
  };

  handleOptionClick = value => {
    this.props.onAnswerChange(value);
  };

  render() {

    const {step, answerValue, onNextButtonClick} = this.props;

    return (
      <AbstractStepPage>
        <AbstractStepPageHeader>
          {renderQuestionHeader(step)}
        </AbstractStepPageHeader>
        <AbstractStepPageBody>
          {step === TestStep.MONEY &&
          <QuestionOptionsList value={answerValue}
                               onOptionClick={this.handleOptionClick}>
            <QuestionOption value={TestMoneyOption.LESS_30000}>
              меньше 30 000 руб
            </QuestionOption>
            <QuestionOption value={TestMoneyOption.FROM_30000_TO_70000}>
              от 30 000 до 70 000 руб
            </QuestionOption>
            <QuestionOption value={TestMoneyOption.FROM_70000_TO_150000}>
              от 70 000 до 150 000 руб
            </QuestionOption>
            <QuestionOption value={TestMoneyOption.FROM_150000}>
              от 150 000 руб
            </QuestionOption>
          </QuestionOptionsList>}
          {step === TestStep.WHAT_IS_DONE &&
          <QuestionOptionsList value={answerValue}
                               onOptionClick={this.handleOptionClick}>
            <QuestionOption value={TestWhatIsDoneOption.NOTHING}>
              Только задумался
            </QuestionOption>
            <QuestionOption value={TestWhatIsDoneOption.TEXT_PHOTO_VIDEO}>
              Есть тексты, фото, видео
            </QuestionOption>
            <QuestionOption value={TestWhatIsDoneOption.DESIGN}>
              Есть готовый дизайн или его наброски
            </QuestionOption>
            <QuestionOption value={TestWhatIsDoneOption.HAS_SITE}>
              Уже есть другой сайт, а новый лендинг нужен для дополнительной рекламы
            </QuestionOption>
          </QuestionOptionsList>}
          {step === TestStep.CONTROL &&
          <QuestionOptionsList value={answerValue}
                               onOptionClick={this.handleOptionClick}>
            <QuestionOption value={TestControlOption.ABSOLUTE}>
              Хочу контролировать каждый шаг
            </QuestionOption>
            <QuestionOption value={TestControlOption.NOTHING}>
              Доверюсь профессионалам, хочу увидеть только результат
            </QuestionOption>
          </QuestionOptionsList>}
          {step === TestStep.EXCEPT_LANDING &&
          <QuestionOptionsList value={answerValue}
                               onOptionClick={this.handleOptionClick}>
            <QuestionOption value={TestExceptLandingOption.HOSTING_DOMAIN}>
              Помочь купить хостинг и домен
            </QuestionOption>
            <QuestionOption value={TestExceptLandingOption.BANNER}>
              Сделать баннеры для рекламы
            </QuestionOption>
            <QuestionOption value={TestExceptLandingOption.AD_CAMPAIGN}>
              Провести полноценную рекламную кампанию
            </QuestionOption>
            <QuestionOption value={TestExceptLandingOption.DO_NOT_KNOW}>
              Не знаю что это и зачем. Мне нужен сайт!
            </QuestionOption>
          </QuestionOptionsList>}
          {step === TestStep.TIME &&
          <QuestionOptionsList value={answerValue}
                               onOptionClick={this.handleOptionClick}>
            <QuestionOption value={TestTimeOption.ALL_TIME}>
              Готов всегда быть на связи
            </QuestionOption>
            <QuestionOption value={TestTimeOption.HOUR}>
              Не более часа в день
            </QuestionOption>
            <QuestionOption value={TestTimeOption.NOTHING}>
              Хочу заплатить деньги и получить результат без моего участия
            </QuestionOption>
          </QuestionOptionsList>}
          <div className="test__question-button-row">
            <button className="test__button test__button_blue" onClick={onNextButtonClick}>
              Далее
            </button>
          </div>
        </AbstractStepPageBody>
      </AbstractStepPage>
    );
  }
}