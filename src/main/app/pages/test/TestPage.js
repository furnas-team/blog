import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import './test.scss';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {func} from 'prop-types';
import {object} from 'prop-types';
import {goToNextStep, getTestStep, TestStep, selectTest, setAnswerForCurrentStep, getTestCurrentStepAnswerValue, getTestAnswer} from '../../models/TestModel';
import {StartStepPage} from './steps/StartTestPage';
import {ResultStepPage} from './steps/ResultStepPage';
import {QuestionStepPage} from './steps/QuestionStepPage';


class TestPage extends React.Component {

  static propTypes = {
    test: object,
    goToNextStep: func,
    setAnswerForCurrentStep: func
  };

  handleGoToNextStepClick = () => {
    const {test} = this.props;
    const step = getTestStep(test);

    if (step !== TestStep.START && step !== TestStep.RESULT) {
      window.mixpanel.track(
        "step " + step,
        {answer: getTestCurrentStepAnswerValue(test)}
      );
    }
    this.props.goToNextStep();
  };

  handleAnswerChange = (value) => this.props.setAnswerForCurrentStep(value);

  render() {

    const {test} = this.props;

    const step = getTestStep(test);

    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>У кого заказать Landing page? | Furnas</title>
          <meta name="description" content="Тест из 5-ти вопросов, чтобы лучше понять у кого заказать лендинг"/>
        </Helmet>
        <div className="test">
          {step === TestStep.START && <StartStepPage onClick={this.handleGoToNextStepClick}/>}
          {step === TestStep.RESULT && <ResultStepPage answer={getTestAnswer(test)}/>}
          {step !== TestStep.START && step !== TestStep.RESULT &&
          <QuestionStepPage step={step}
                            onAnswerChange={this.handleAnswerChange}
                            answerValue={getTestCurrentStepAnswerValue(test)}
                            onNextButtonClick={this.handleGoToNextStepClick}/>}
        </div>
      </ThemeProvider>
    );
  }

}


function mapStateToProps(state) {
  return {
    test: selectTest(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToNextStep: bindActionCreators(goToNextStep, dispatch),
    setAnswerForCurrentStep: bindActionCreators(setAnswerForCurrentStep, dispatch)
  }
}

export const ConnectedTestPage = connect(mapStateToProps, mapDispatchToProps)(TestPage);