
import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const surveySchema = new Schema({
    topic: String,
    question1: String,
    option1: String,
    option2: String,
    option3: String,

    question2: String,
    option2_1: String,
    option2_2: String,
    option2_3: String,

    question3: String,
    option3_1: String,
    option3_2: String,
    option3_3: String,

    question4: String,
    option4_1: String,
    option4_2: String,
    option4_3: String,

    question5: String,
    option5_1: String,
    option5_2: String,
    option5_3: String,
});


export default mongoose.model("Survey", surveySchema);
