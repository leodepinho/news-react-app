import { FETCH_ARTICLES, NEW_ARTICLE, FETCH_ARTICLE} from './/types';

export const fetchArticles = () => dispatch => {
  fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_ARTICLES,
        payload: articles
      })
    );
}
export const fetchArticle = (articleId) => dispatch => {
  fetch(`http://localhost:3000/articles/${articleId}`)
    .then(res => res.json())
    .then(article =>
      dispatch({
        type: FETCH_ARTICLE,
        payload: article
      })
    );
}
export const createPost = (articleData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })
    .then(res => res.json())
    .then(article =>
      dispatch({
        type: NEW_ARTICLE,
        payload: article
      })
    );
}