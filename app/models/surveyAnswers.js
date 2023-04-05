import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const answersSchema = new Schema({
    topic: String,
    question1: String,
    answer1: String,
}, {
    timestamps: true,
    collection: 'answers'
});

export default mongoose.model("answers", answersSchema)