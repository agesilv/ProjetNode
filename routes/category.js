const express = require('express');
const categoryController = require('../controllers/category');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['ROLE_ADMIN']), categoryController.create);
router.get('/', authenticate, categoryController.getAll);
router.get('/:id', authenticate, categoryController.getOne);
router.put('/:id', authenticate, authorize(['ROLE_ADMIN']), categoryController.update);
router.delete('/:id', authenticate, authorize(['ROLE_ADMIN']), categoryController.delete);

module.exports = router;
