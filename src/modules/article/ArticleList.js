import React, {Component} from 'react';
import Article from "./Article";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchArticles} from "../../actions/articleActions";

class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  handleClick = (articleId) => {
    this.props.history.push(`/article/${articleId}`);
  }

  render() {
    const articleItems = this.props.articles.map(article => (
      <Article key={article._id} onClick={() => this.handleClick(article._id)} article={article}/>
    ));
    return (
      <main className="cards-container kt-flex kt-justify-content-center kt-align-items-start ">
        {articleItems}
      </main>
    );
  }
}

ArticleList.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
  articles: state.articles.items,
});


export default connect(mapStateToProps, {fetchArticles})(withRouter(ArticleList));