import React from 'react';
import {bool, func} from 'prop-types';
import classNames from 'classnames';

export class QuestionOption extends React.Component {

  static propTypes = {
    selected: bool,
    onClick: func
  };

  static defaultProps = {
    onClick(){}
  };

  render() {
    const {children, selected, onClick} = this.props;

    return (
      <div className={classNames('test__question-option', {'test__question-option_selected':selected})}
           onClick={onClick}>
        {children}
      </div>
    );
  }

}
