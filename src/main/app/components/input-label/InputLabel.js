import React from 'react';
import {string, any} from 'prop-types';
import classNames from 'classnames';
import './input-label.scss';

InputLabel.propTypes = {
  className: string,
  children: any
};

export function InputLabel({className, children}) {

  return (
    <div className={classNames('input-label', className)}>
      {children}
    </div>
  );

}
