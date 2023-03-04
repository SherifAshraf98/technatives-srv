import { Router } from 'express';
import { listImages, uploadImages } from '../controllers/Image';
import multer from 'multer';

const upload = multer();

export const router = Router();

router.post('/upload', upload.any(), uploadImages);
router.get('/list', listImages);
