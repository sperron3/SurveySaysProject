
import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const surveySchema = new mongoose.Schema({
  topic: String,

  question1: String,
  option1: String,
  option2: String,
  option3: String,

}, {
  timestamps: true,
  collection: 'surveyCreate'
});

export default mongoose.model("Survey", surveySchema);
