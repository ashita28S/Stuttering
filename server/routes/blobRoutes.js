import express from 'express';
import { upload } from '../middleware/gridfs.js';
import { getAllFiles, getFileByName, uploadSingleFile, getFileById } from '../controllers/blobController.js';


const blobRouter = express.Router();

blobRouter.post('/upload', upload.single('file'), uploadSingleFile); //tested

blobRouter.get('/allFiles', getAllFiles); //tested

blobRouter.get('/name/:filename', getFileByName); //tested

blobRouter.get('/id/:id', getFileById); //tested



export default blobRouter;

