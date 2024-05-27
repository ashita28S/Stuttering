import mongoose from 'mongoose';

const metadataSchema = mongoose.Schema({

    submissionId: String,
    // name: String,
    gender: String,
    age: Number,
    iitg: String,
    // dateOfBirth: Date,
    // state: String,
    // imageId: String,
    // imageName: String,
    // videoId: String,
    // videoName: String,
    // audioId: String,
    // audioName: String
    // images: {
    //     frontImageBlobId: String,
    //     frontImageBlobName: String,
    //     leftImageBlobId: String,
    //     leftImageBlobName: String,
    //     rightImageBlobId: String,
    //     rightImageBlobName: String,
    // },
    states: [{
        stateName: String,
        otherState: String,
        district: String,
        durationLived: Number
    }],
    languages: [{
        languageName: String,
        otherLanguage: String,
        proficiency: String,
        learnedInState: String,
        // mode: String,
        // languageBlobId: String,
        // languageBlobName: String
        // controlledLanguageBlobId: String,
        controlledLanguageBlobName: String,

        // ownLanguageBlobId: String,
        ownLanguageBlobName: String,
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Metadata = mongoose.model('Metadata', metadataSchema);

export default Metadata;