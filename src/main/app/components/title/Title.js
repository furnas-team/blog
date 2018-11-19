import React from 'react';
import './title.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'title';

Title.propTypes = {
  className: string,
  children: any,
};

export function Title({children, className}) {

  return (
    <ThemeConsumer>
      {theme => (
        <h1 className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className)}>
          {children}
        </h1>
      )}
    </ThemeConsumer>
  );

}
