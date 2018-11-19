import React from 'react';
import classNames from 'classnames';
import './input.scss';
import {string, func} from 'prop-types';

export class Input extends React.Component {

  static propTypes = {
    className: string,
    value: string,
    onChange: func,
    placeholder: string
  };

  static defaultProps = {
    onChange(){
    }
  };

  render() {
    const {className, value, onChange, placeholder} = this.props;

    return (
      <input className={classNames('input',  className)}
             value={value}
             onChange={onChange}
             placeholder={placeholder}/>
    );
  }

}
