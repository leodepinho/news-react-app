import React, {Component} from 'react';
import './ArticleDetail.scss';

class ArticleDetail extends Component {
  render() {
    return (
      <div className="kt-flex kt-justify-content-center kt-flex-grow-1">
        <div className="article-detail">
          <div className="kt-flex kt-justify-content-center">
            <img src="/background.jpg"/>
          </div>
          <h1>{this.props.article.title}</h1>
          <p>{this.props.article.description}</p>
        </div>
      </div>
    );
  }
}

export default ArticleDetail;