import React from 'react';
import './block-title.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'block-title';

BlockTitle.propTypes = {
  className: string,
  children: any
};

export function BlockTitle({className, children}) {

  return (
    <ThemeConsumer>
      {theme => (
        <div className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className)}>
          {children}
        </div>)}
    </ThemeConsumer>

  );

}
