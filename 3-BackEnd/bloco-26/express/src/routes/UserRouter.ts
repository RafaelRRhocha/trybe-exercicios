import { Router } from 'express';

const controller = require('../controllers/user.controller')

const router = Router();

router.get('/', controller.getAllUsers);
router.post('/', controller.createUsers);
router.put('/', controller.updateUsers);
router.delete('/', controller.removeUsers);
router.get('/:id', controller.getAllById);

export default router;