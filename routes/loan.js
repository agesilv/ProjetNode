const express = require('express');
const loanController = require('../controllers/loan');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['ROLE_USER', 'ROLE_ADMIN']), loanController.create);
router.get('/', authenticate, authorize(['ROLE_ADMIN']), loanController.getAll);
router.get('/:id', authenticate, authorize(['ROLE_ADMIN']), loanController.getOne);
router.put('/:id', authenticate, authorize(['ROLE_ADMIN']), loanController.update);
router.delete('/:id', authenticate, authorize(['ROLE_ADMIN']), loanController.delete);

module.exports = router;
