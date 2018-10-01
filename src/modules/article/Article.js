import React, {Component} from 'react';
import './Article.scss';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="card-container">
        <div className="card-preview kt-relative">
          <img src={'/background.jpg'}/>
        </div>
        <div className="card-description">
          <h1>{this.props.article.title}</h1>
        </div>
      </div>
    );
  }
}

export default Article;