import express from 'express';
import { addProduct,getAllProducts,updateProduct } from '../controller/productController.mjs';
import { uploadImage } from '../Middleware/upload.mjs';
import tokenVerification from '../Middleware/tokenVerification.mjs';
const router = express.Router();

router.get('/', getAllProducts);
router.post('/add', uploadImage, addProduct);
router.put('/update/:id',tokenVerification,uploadImage, updateProduct);

export default router;