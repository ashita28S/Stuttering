import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import methodOverride from 'method-override';

import blobRoutes from './routes/blobRoutes.js';
import metadataRoutes from './routes/metadataRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.use(methodOverride('_method'));



const CONNECTION_URL = process.env.MONGODB_URL
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))


app.use('/blob', blobRoutes);
app.use('/metadata', metadataRoutes);
