import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from "./common/navbar/Navbar";
import HomeContainer from "./modules/home/HomeContainer";
import ArticleDetailContainer from "./modules/article/ArticleDetailContainer";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="main-container">
              <Route path="/" exact strict component={HomeContainer}/>
              <Route path={'/article/:article_id'} exact strict component={ArticleDetailContainer}/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
