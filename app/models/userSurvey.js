import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const answersSchema = new Schema({
    topic: String,
    name: String,

    question1: String,
    answer1: String,

    question2: String,
    answer2: String,

    question3: String,
    answer3: String,

    question4: String,
    answer4: String,

    question5: String,
    answer5: String,
}, {
    timestamps: true,
    collection: 'answers'
});

export default mongoose.model("answers", answersSchema)