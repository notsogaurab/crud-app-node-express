import express from 'express';
import * as InternController from '../controllers/internController.js';

const router = express.Router();

router.post('/', InternController.addIntern);
router.get('/', InternController.getInterns);
router.put('/:id', InternController.updateIntern);
router.delete('/:id', InternController.deleteIntern);

export default router;
