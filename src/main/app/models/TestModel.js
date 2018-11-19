export const TestStep = {
  START: 'start',
  MONEY: 'money',
  WHAT_IS_DONE: 'what-is-done',
  TIME: 'time',
  CONTROL: 'control',
  EXCEPT_LANDING: 'except-landing',
  RESULT: 'result'
};

export const TestActionType = {
  SET_TEST_STEP: 'set-test-step',
  SET_TEST_ANSWER_BY_STEP: 'set-test-answer-by-step'
};

export const testStepsOrder = [
  TestStep.START,
  TestStep.MONEY,
  TestStep.WHAT_IS_DONE,
  TestStep.EXCEPT_LANDING,
  TestStep.CONTROL,
  TestStep.TIME,
  TestStep.RESULT
];

export const TestMoneyOption = {
  LESS_30000: 'les-30000',
  FROM_30000_TO_70000: 'from-30000-to-70000',
  FROM_70000_TO_150000: 'from-70000-to-150000',
  FROM_150000: 'from-150000'
};

export const TestWhatIsDoneOption = {
  NOTHING: 'nothing',
  TEXT_PHOTO_VIDEO: 'text-photo-video',
  DESIGN: 'design',
  HAS_SITE: 'has-site'
};

export const TestExceptLandingOption = {
  HOSTING_DOMAIN: 'hosting-domain',
  BANNER: 'banner',
  AD_CAMPAIGN: 'ad-campaign',
  DO_NOT_KNOW: 'do-not-know'
};

export const TestControlOption = {
  ABSOLUTE: 'absolute',
  NOTHING: 'nothing'
};

export const TestTimeOption = {
  ALL_TIME: 'all-time',
  HOUR: 'hour',
  NOTHING: 'nothing'
};

const initialState = {
  step: testStepsOrder[0],
  answer: {
    [TestStep.MONEY]: null,
    [TestStep.TIME]: null,
    [TestStep.EXCEPT_LANDING]: null,
    [TestStep.CONTROL]: null,
    [TestStep.WHAT_IS_DONE]: null,
  }
};


export function testReducer(state = initialState, action) {

  switch (action.type) {
    case TestActionType.SET_TEST_STEP:
      return {...state, step: action.payloads.step};

    case TestActionType.SET_TEST_ANSWER_BY_STEP:
      const answer = {...state.answer, [action.payloads.step]: action.payloads.answer};
      return {...state, answer};
  }

  return state;
}

export function goToNextStep() {
  return (dispatch, getState) => {
    const currentStep = getTestStep(selectTest(getState()));
    const nextStep = testStepsOrder[testStepsOrder.indexOf(currentStep) + 1];
    dispatch(setTestStep(nextStep));
  }
}

export function setTestStep(step) {
  return {
    type: TestActionType.SET_TEST_STEP,
    payloads: {
      step
    }
  }
}

export function setAnswerForCurrentStep(answer) {
  return (dispatch, getState) => {
    const currentStep = getTestStep(selectTest(getState()));
    return dispatch(setAnswerByStep(answer, currentStep));
  }
}

export function setAnswerByStep(answer, step) {
  return {
    type: TestActionType.SET_TEST_ANSWER_BY_STEP,
    payloads: {
      answer,
      step
    }
  }
}

export function selectTest(state) {
  return state.test;
}

export function getTestStep(test) {
  return test.step;
}

export function getTestAnswer(test) {
  return test.answer;
}

export function getAnswerValueByStep(answer, step) {
  return answer[step];
}

export function getTestAnswerByStep(test, step) {
  return getAnswerValueByStep(getTestAnswer(test), step);
}

export function getTestCurrentStepAnswerValue(test) {
  return getTestAnswerByStep(test, getTestStep(test))
}


