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
        res.render('index', {title: 'Survey Answers', page: 'userSurvey', survey: survey, username: UserDisplayName })
    })
}

export function ProcessAddAnswersPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, function(error, survey){
        if(error){
            console.error(error);
            res.end(error);
        }
        else{
            if(survey){
                let newSurveyAnswers = surveyAnswers({

                    topic: req.body.topic,
                    name: req.body.name,

                    question1: req.body.question1,
                    answer1: req.body.answer1,

                    question2: req.body.question2,
                    answer2: req.body.answer2,

                    question3: req.body.question3,
                    answer3: req.body.answer3,

                    question4: req.body.question4,
                    answer4: req.body.answer4,

                    question5: req.body.question5,
                    answer5: req.body.answer5,
                });
                surveyAnswers.create(newSurveyAnswers, function(error, answers){
                    if(error){
                        console.error(error);
                        res.end(error);
                    }
                    res.redirect('/results-list');
                })
            }
        }
    });
}