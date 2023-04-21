import {UserDisplayName} from "../utilities/index.js";
import surveyAnswers from "../models/userSurvey.js";
import surveyModel from "../models/surveyModel.js";

export function DisplayAddAnswersPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, function(error, survey){
        if(error){
            console.error(error);
            res.end(error);
        }
        res.render('index', {title: 'Survey Answers', page: 'userSurvey', survey: survey, username: UserDisplayName(req) })
    })
}

export function ProcessAddAnswersPage(req, res, next) {
    let id = req.params.id;

    surveyModel.findById(id, function (error, survey) {
        if (error) {
            console.error(error);
            res.end(error);
        } else {
            if (survey) {
                let newSurveyAnswers = surveyAnswers({
                    ...req.body,
                });

                surveyAnswers.create(newSurveyAnswers, function (error, answers) {
                    if (error) {
                        console.error(error);
                        res.end(error);
                    }
                    res.redirect(`/results-details/${answers._id}`);
                });
            }
        }
    });
}