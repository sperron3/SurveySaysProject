import { UserDisplayName } from "../utilities/index.js";
import surveyModel from "../models/surveyModel.js";
import surveyAnswers from "../models/surveyAnswers.js";

export function DisplayUserSurvey(req, res, next) {
    surveyModel.find(function (error, surveyCollection) {
        if (error) {
            console.error(error);
            res.end(error);
        }
        res.render('index', { title: 'Take our Survey', page: 'survey', survey: surveyCollection, username: UserDisplayName });
    })
}

export function ProcessUserSurveyPage(req, res, next) {
    let id = req.params.id

    let userAnswers = surveyAnswers({
        answer1: req.body.answer1
    });
    surveyAnswers.create(userAnswers, function (error, Answers) {
        if (error) {
            console.error(error);
            res.end(error);
        }
        res.redirect('/results');
    })
}