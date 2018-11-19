import React from 'react';
import './link.scss';
import classNames from 'classnames';
import {string, any, func} from 'prop-types';

Link.propTypes = {
  className: string,
  href: string,
  children: any,
  target: string,
  onClick: func
};

Link.defaultProps = {
  onClick(){

  }
};

export function Link({className, children, href, target, onClick}) {

  return (
    <a className={classNames('link', className)}
       target={target}
       onClick={onClick}
       href={href}>
      {children}
    </a>
  );

}
