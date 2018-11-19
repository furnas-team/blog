import React from 'react';
import './article-link.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {ArticleTitle} from '../../common/models/ArticleName';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'article-link';

export const ArticleLinkSize = {
  SMALL: 'small',
  BIG: 'big'
};

ArticleLink.propTypes = {
  className: string,
  articleName: string,
  children: any,
  size: string
};

ArticleLink.defaultProps = {
  size: ArticleLinkSize.BIG
};

export function ArticleLink({className, articleName, size}) {

  return (
    <ThemeConsumer>
      {theme => (
        <div className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className, size === ArticleLinkSize.SMALL ? 'article-link_small' : 'article-link_big')}>
          <a className="article-link__a" href={`/learn/${articleName}`}>
            {ArticleTitle[articleName]}
          </a>
        </div>)}
    </ThemeConsumer>
  );

}
