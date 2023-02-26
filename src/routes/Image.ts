import { Router } from 'express';
import { listImages, uploadImages } from '../controllers/Image';

export const router = Router();

router.get('/upload', uploadImages);
router.get('/list', listImages);
