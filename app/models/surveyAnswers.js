import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const answersSchema = new Schema({
    surveyID: String,
    answer1: String,
    answer2: String,
    answer3: String,
},{
    timestamps: true,
    collection: 'answers'
});

export default mongoose.model("answers", answersSchema)