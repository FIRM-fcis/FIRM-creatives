import { Router } from 'express';
import * as uploadController from '../controllers/file.js';
import authorize from '../middlewares/authorize.js';

const router = Router();

// route to upload a file
router.post('/upload', uploadController.uploadFile);

export default router;