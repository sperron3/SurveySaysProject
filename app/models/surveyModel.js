
import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const surveySchema = new mongoose.Schema({

  topic: String,

  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String,
  question8: String,

  endsAt: {
    type: Date,
    required: true,
    expires: 0
  }

}, {
  timestamps: true,
  collection: 'surveyCreate'
});

export default mongoose.model("Survey", surveySchema);
