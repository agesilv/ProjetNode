const express = require('express');
const userController = require('../controllers/user');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/', authenticate, authorize(['ROLE_ADMIN']), userController.getAll);
router.get('/:id', authenticate, authorize(['ROLE_ADMIN']), userController.getOne);
router.put('/:id', authenticate, authorize(['ROLE_ADMIN']), userController.update);
router.delete('/:id', authenticate, authorize(['ROLE_ADMIN']), userController.delete);

module.exports = router;
