const express = require('express');
const bookController = require('../controllers/book');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['ROLE_ADMIN']), bookController.create);
router.get('/', authenticate, bookController.getAll);
router.get('/:id', authenticate, bookController.getOne);
router.put('/:id', authenticate, authorize(['ROLE_ADMIN']), bookController.update);
router.delete('/:id', authenticate, authorize(['ROLE_ADMIN']), bookController.delete);

module.exports = router;
