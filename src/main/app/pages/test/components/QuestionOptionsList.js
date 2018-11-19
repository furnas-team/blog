import React from 'react';
import {func, string} from 'prop-types';

export class QuestionOptionsList extends React.Component {

  static propTypes = {
    onOptionClick: func,
    value: string
  };

  static defaultProps = {
    onOptionClick(value){

    }
  };

  handleOptionClick = (value) => {
    this.props.onOptionClick(value);
  };

  render() {

    const {children, value} = this.props;

    return (
      <div className="test__question-options-list">

        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            onClick: () => this.handleOptionClick(child.props.value),
            selected: value === child.props.value
          });
        })}

      </div>
    );
  }

}
