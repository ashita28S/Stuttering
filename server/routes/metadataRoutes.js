import express from 'express';
import { postMetadata, getAllMetadata, getNumberOfSubmissions } from '../controllers/metadataController.js';

const metadataRoutes = express.Router();

metadataRoutes.post('/upload', postMetadata); //tested
metadataRoutes.get('/getAllMetadata', getAllMetadata); //tested
metadataRoutes.get('/getNumberOfSubmissions', getNumberOfSubmissions); //tested

export default metadataRoutes;