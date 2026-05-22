const express = require('express');
const router = express.Router();

const {
  getArticles,
  getArticleByName,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/name/:name', getArticleByName);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;