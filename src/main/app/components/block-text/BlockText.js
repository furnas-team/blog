import React from 'react';
import './block-text.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'block-text';

BlockText.propTypes = {
  className: string,
  children: any
};

export function BlockText({className, children}) {

  return (
    <ThemeConsumer>
      {theme => (
        <p className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className)}>
          {children}
        </p>)}
    </ThemeConsumer>
  );

}
