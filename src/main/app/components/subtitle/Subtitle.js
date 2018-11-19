import React from 'react';
import './subtitle.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'subtitle';

Subtitle.propTypes = {
  className: string,
  children: any
};

export function Subtitle({children, className}) {
  return (
    <ThemeConsumer>{
      theme => (
        <h2 className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className)}>
          {children}
        </h2>
      )
    }
    </ThemeConsumer>
  );

}
