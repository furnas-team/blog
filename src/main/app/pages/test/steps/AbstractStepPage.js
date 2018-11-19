import React from 'react';

export function AbstractStepPageHeader({children}) {
  return children;
}

export function AbstractStepPageBody({children}) {
  return children;
}

export function AbstractStepPage({children}) {

  const headerChildren = [];
  const bodyChidlren = [];
  for (const child of React.Children.toArray(children)) {
    if (child.type === AbstractStepPageHeader) {
      headerChildren.push(child);
    } else if (child.type === AbstractStepPageBody) {
      bodyChidlren.push(child);
    }
  }
  return (
    <div className="test__step">
      <div className="test__header">
        <div className="test__header-links-row">
          <a className="test__header-link"
             href="/">
            furnas
          </a>
          <a className="test__header-link"
             href="/learn">
            blog
          </a>
          <a className="test__header-link"
             href="/#contact-us-section">
            email
          </a>
        </div>
      <div className="test__step-title">{headerChildren}</div>
      </div>
      <div className="test__step-body">{bodyChidlren}</div>
    </div>
  )
}