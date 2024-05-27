import { bucket, gfs } from '../models/blob.js';
import mongoose from 'mongoose';

export const uploadSingleFile = async (req, res) => {
    console.log("hi");
    console.log(req.file);
    if (req && req.file) {
        return res.status(200).json({
            message: 'File uploaded successfully',
            id: req.file.id,
            name: req.file.originalname
        });
    }
    else {
        return res.status(500).json({
            message: 'File upload failed'
        });
    }
}

export const getAllFiles = async (req, res) => {
    console.log('getAllFiles');
    // console.log("bucket: ", bucket);
    // console.log("gfs: ", gfs);
    const cursor = bucket.find({});
    // cursor.toArray((err, files) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(404).json({ message: err });
    //     }
    //     console.log("files: ", files);
    //     if (!files || files.length === 0) {
    //         console.log('No files found');
    //         return res.status(404).json({ message: 'No files found' });
    //     }
    //     console.log(files.length + ' files found');
    //     return res.json(files);
    // });
    let files = await cursor.toArray();
    return res.json(files);

}

export const getFileByName = async (req, res) => {
    // console.log('getFile');
    // console.log("gfs: ", gfs);
    console.log("getFile: ", req.params.filename);
    const cursor = bucket.find({ filename: req.params.filename });
    // await bucket.find({ filename: req.params.filename }).toArray((err, files) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(404).json({ message: err });
    //     }
    //     if (!files || files.length === 0) {
    //         console.log('No files found');
    //         return res.status(404).json({ message: 'No files found' });
    //     }
    //     console.log(files.length + ' files found');
    //     return res.json(files[0]);
    // });

    let files = await cursor.toArray();
    return res.json(files);

}


export const getFileById = async (req, res) => {
    // console.log('getFile');
    // console.log("gfs: ", gfs);
    console.log("getFile: ", req.params.id);
    const cursor = bucket.find({ _id: new mongoose.Types.ObjectId(req.params.id) });
    // await bucket.find({ filename: req.params.filename }).toArray((err, files) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(404).json({ message: err });
    //     }
    //     if (!files || files.length === 0) {
    //         console.log('No files found');
    //         return res.status(404).json({ message: 'No files found' });
    //     }
    //     console.log(files.length + ' files found');
    //     return res.json(files[0]);
    // });

    let files = await cursor.toArray();
    return res.json(files);

}