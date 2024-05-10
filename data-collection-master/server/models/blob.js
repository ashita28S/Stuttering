import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

export let bucket;
mongoose.connection.on("connected", () => {
    var db = mongoose.connections[0].db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
        bucketName: "uploads"
    });
    console.log(bucket);
});

export let gfs;
mongoose.connection.once("open", () => {
    console.log("Connection open");
    // console.log(mongoose.connection.db);
    // console.log(mongoose.mongo);
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection("uploads");
});
