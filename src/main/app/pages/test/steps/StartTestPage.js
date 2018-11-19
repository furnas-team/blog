import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';
import {func} from 'prop-types';

StartStepPage.propTypes = {
  onClick: func
};

StartStepPage.defaultProps = {
  onClick(){}
};

export function StartStepPage({onClick}) {
  return (
    <AbstractStepPage>
      <AbstractStepPageHeader>
        У кого заказать лендинг?
      </AbstractStepPageHeader>
      <AbstractStepPageBody>
        <p className="test__text-block">
          “Мне нужен лендинг!” — обычно говорит заказчик, но никто (даже он сам) не знает, что он имеет ввиду.
        </p>
        <p className="test__text-block">
          Ответьте на 5 вопросов, чтобы понять что нужно именно вам и у кого лучше заказать работу.
        </p>
        <div className="test__button-row">
          <button className="test__button" onClick={onClick}>
            Начать
          </button>
        </div>
      </AbstractStepPageBody>
    </AbstractStepPage>
  );
}