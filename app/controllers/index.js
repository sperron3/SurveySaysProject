import { UserDisplayName } from "../utilities/index.js";
import surveyModel from "../models/surveyModel.js";

export function DisplaySurveyHomePage(req, res, next){
    surveyModel.find(function (err, surveyCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Home', page: 'home', survey: surveyCollection, username: UserDisplayName(req)});
    })
}