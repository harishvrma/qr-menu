import express from 'express';
import {
    getmenu,
    createMenu,
    updateMenu,
    deleteMenu,
} from '../controllers/menuController.js';

const router = express.Router();

router.get('/', getmenu);
router.post('/', createMenu);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

export default router;