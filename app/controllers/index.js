import { UserDisplayName } from "../utilities/index.js";
import surveyModel from "../models/surveyModel.js";
import userSurvey from "../models/userSurvey.js";

export function DisplaySurveyHomePage(req, res, next) {
    surveyModel.find(function (err, surveyCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        userSurvey.find(function (err, answersCollection) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            res.render('index', {
                title: 'Home',
                page: 'home',
                survey: surveyCollection,
                answers: answersCollection,
                username: UserDisplayName(req)
            });
        });
    });
}