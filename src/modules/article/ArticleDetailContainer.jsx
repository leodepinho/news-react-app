import React, {Component} from 'react';
import ArticleDetail from "./ArticleDetail";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {fetchArticle} from "../../actions/articleActions";

class ArticleDetailContainer extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
  }
  render() {
    return (
      <ArticleDetail article={this.props.article}/>
    );
  }
}

ArticleDetailContainer.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  article: state.articles.item,
});

export default connect(mapStateToProps, { fetchArticle })(ArticleDetailContainer);;