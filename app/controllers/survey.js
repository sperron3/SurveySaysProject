import surveyModel from "../models/surveyModel.js";

export function DisplaySurveyResults(req, res, next){
    surveyModel.find(function (err, surveyCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Survey Results', page: 'results', surveys: surveyCollection })
    });
}
export function DisplayFavoritesSurvey(req, res, next){
    res.render('index', {title: 'Favorites Survey', page: 'survey', survey: {}});
}

export function ProcessFavoritesSurvey(req, res, next){
    let survey = surveyModel({
        question: 'Question 1: What is your favorite say?',
        answer: req.body.answer1,
        reason: req.body.reason1,
    });

    surveyModel.create(survey, function(err, Survey){
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/results');
    })
}