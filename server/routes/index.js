const Router = require('express').Router();
const PostsControler = require('../controllers/PostsController');

Router.get('/', PostsControler.getPosts);
