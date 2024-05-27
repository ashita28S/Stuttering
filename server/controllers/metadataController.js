import Metadata from '../models/metadata.js';


export const postMetadata = async (req, res) => {
    const metadata = req.body;
    console.log(metadata);

    const newMetadata = new Metadata(metadata);

    try {
        // add createdAt field to the metadata
        newMetadata.createdAt = new Date();
        await newMetadata.save();
        // newPost is returned as response if the save is successfull
        return res.status(201).json(newMetadata);
    } catch (error) {
        return res.status(409).json({ message: error.message })
    }
};

export const getAllMetadata = async (req, res) => {
    try {
        const fromDate = new Date("2024-04-11");
        const query = { createdAt: { $gte: fromDate } };
        const allMetadata = await Metadata.find(query);
        return res.status(200).json(allMetadata);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

export const getNumberOfSubmissions = async (req, res) => {
    try {
        const fromDate = new Date("2024-04-11");
        const query = { createdAt: { $gte: fromDate } };
        const numberOfSubmissions = await Metadata.countDocuments(query);
        return res.status(200).json(numberOfSubmissions);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}