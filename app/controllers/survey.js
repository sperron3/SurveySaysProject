import surveyModel from "../models/surveyModel.js";

export function DisplaySurveyResults(req, res, next){
    surveyModel.find(function (err, surveyCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Survey Results', page: 'results', surveys: surveyCollection })
    })
}