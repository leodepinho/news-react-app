const express = require('express');
const bodyParser = require('body-parser');
const resource = require('resourcejs');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://admin:3010535leo@ds115653.mlab.com:15653/kynd");

// Create the schema.
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
});

// Create the model.
const ArticleModel = mongoose.model('Article', ArticleSchema);

resource(app,'','articles',ArticleModel).index().post().get();

app.listen(3000);