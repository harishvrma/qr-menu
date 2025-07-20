import express from 'express';
import { placeorder,
    getOrders,
    updateOrderstatus

 } from '../controllers/orderController.js';

 const router = express.Router();

 router.post('/', placeorder);
 router.get('/', getOrders);
 router.put('/:id/status', updateOrderstatus);

 export default router;