import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGODB_URL,
    file: (req, file) => {
        console.log("file: ", file);

        return new Promise((resolve, reject) => {
            // const filename = file.originalname;

            // const fileInfo = {
            //     filename: filename,
            //     bucketName: 'uploads'
            // };

            // resolve(fileInfo);
            resolve({
                filename: file.originalname,
                bucketName: 'uploads'
            });
        });
    }
});

export const upload = multer({ storage: storage });
