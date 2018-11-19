import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';
import {object} from 'prop-types';
import {getAnswerValueByStep, TestMoneyOption, TestStep} from '../../../models/TestModel';


ResultStepPage.propTypes = {
  answer: object
};

export function ResultStepPage({answer}) {
  return (
    <AbstractStepPage>
      <AbstractStepPageHeader>
        Результат
      </AbstractStepPageHeader>
      {getAnswerValueByStep(answer, TestStep.MONEY) === TestMoneyOption.LESS_30000 &&
      <AbstractStepPageBody>
        <div className="test__result-title">
          Фрилансер
        </div>
        <p className="test__text-block">
          Для небольшого сайта или небольшой рекламной кампании достаточно нанять фрилансера.
        </p>
        <p className="test__text-block">
          Фрилансер обойдётся вам недорого,
          но возможно придётся больше повозиться.
          Чаще всего в таких случаях приходится самому думать
          о составлении правильного технического задания,
          составлении структуры сайта и возможны частые обсуждения.
        </p>
        <p className="test__text-block">
          Сайты, где найти фрилансера
        </p>
        <div>
          <a className="test__result-link" href="https://freelance.ru/">
            freelance.ru
          </a>
        </div>
        <div>
          <a className="test__result-link" href="https://www.fl.ru/">
            fl.ru
          </a>
        </div>
        <div>
          <a className="test__result-link" href="https://www.upwork.com/">
            upwork.com
          </a>
        </div>
        <p className="test__text-block">
          Если нужна помощь с составлением технического задания для фрилансера или его собеседования - мы вам поможем
        </p>
        <a className="test__result-link" href="https://furnas.ru/">
          furnas.ru
        </a>
      </AbstractStepPageBody>}
      {getAnswerValueByStep(answer, TestStep.MONEY) === TestMoneyOption.FROM_30000_TO_70000 &&
      <AbstractStepPageBody>
        <div className="test__result-title">
          Небольшая студия
        </div>
        <p className="test__text-block">
          Если у вас ограниченный бюджет,
          но работы предстоит много,
          то хорошо привлечь группу специалистов.
          Можно найти недорогие студии, в которых работают отличные специалисты.
        </p>
        <p className="test__text-block">
          Вероятно, что с ними придётся больше проводить время,
          следить за их работай.
          Но качество выполненный работы будет стоить своих денег.
        </p>
        <p className="test__text-block">
          Мы тоже небольшая студия, посмотрите как мы работаем
        </p>
        <div>
          <a className="test__result-link" href="http://furnas.ru/">
            furnas.ru
          </a>
        </div>
      </AbstractStepPageBody>}
      {getAnswerValueByStep(answer, TestStep.MONEY) === TestMoneyOption.FROM_70000_TO_150000 &&
      <AbstractStepPageBody>
        <div className="test__result-title">
          Небольшая студия
        </div>
        <p className="test__text-block">
          Если у вас ограниченный бюджет,
          но работы предстоит много,
          то хорошо привлечь группу специалистов.
          Можно найти недорогие студии, в которых работают отличные специалисты.
        </p>
        <p className="test__text-block">
          Вероятно, что с ними придётся больше проводить время,
          следить за их работай.
          Но качество выполненный работы будет стоить своих денег.
        </p>
        <p className="test__text-block">
          Мы тоже небольшая студия, посмотрите как мы работаем
        </p>
        <div>
          <a className="test__result-link" href="http://furnas.ru/">
            furnas.ru
          </a>
        </div>
      </AbstractStepPageBody>}
      {getAnswerValueByStep(answer, TestStep.MONEY) === TestMoneyOption.FROM_150000 &&
      <AbstractStepPageBody>
        <div className="test__result-title">
          Дизайн агентство
        </div>
        <p className="test__text-block">
          Для создания собственного стиля,
          визиток и тд нужна компания с опытом работы.
          Бюджет заказа будет не маленьким, зато качество будет на высшем уровне!
        </p>
        <p className="test__text-block">
          Когда сталкиваешься с такими компании они сами знают какие данные от вас получить.
          Они вас сами опросят, будут сами уведомлять об этапах, в общем возьмут всю работу на себя.
          Для большого объёма работ они будут лучшим вариантом.
          Такие вещи лучше делать сразу и всецело, а то потом могут быть неприятные последствия.
        </p>
        <p className="test__text-block">
          Если вы все же хотите просто проверить гипотезу и не вкладывать сразу большие деньги - обратите внимание на нашу небольшую студию
        </p>
        <div>
          <a className="test__result-link" href="http://furnas.ru/">
            furnas.ru
          </a>
        </div>
      </AbstractStepPageBody>}

    </AbstractStepPage>
  );
}