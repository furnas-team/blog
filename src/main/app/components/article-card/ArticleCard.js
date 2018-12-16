import React from 'react';

export class ArticleCard extends React.Component {

  render() {
    const {children, articlePath} = this.props;
    return (
      <div className="article-card">
        {children}
        <a href={'/' + articlePath}>
          Читать дальше
        </a>
      </div>
    );
  }

}
