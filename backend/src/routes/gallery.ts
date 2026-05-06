import express from 'express';
import { getGallery, createGalleryItem, updateGalleryItem, deleteGalleryItem } from '../controllers/galleryController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public route
router.get('/', getGallery);

// Admin only routes
router.post('/', authenticate, requireAdmin, createGalleryItem);
router.put('/:id', authenticate, requireAdmin, updateGalleryItem);
router.delete('/:id', authenticate, requireAdmin, deleteGalleryItem);

export default router;
