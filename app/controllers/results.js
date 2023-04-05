import { UserDisplayName } from "../utilities/index.js";
import surveyModel from "../models/surveyModel.js";
import surveyAnswers from "../models/surveyAnswers.js";

export function DisplaySurveyResults(req, res, next) {

        surveyAnswers.find(function (err, answersCollection) {
            if (err) {
                console.error(err);
                res.end(err);
            }

            res.render('index', {
                title: 'Survey Results',
                page: 'results/list',
                answers: answersCollection,
                username: UserDisplayName(req)
            });
        });
}

export function ProcessResultsDelete(req, res, next) {
    let id = req.params.id;

    surveyAnswers.deleteOne({ _id: id }, function (error) {
        if (error) {
            console.error(error);
            res.end(error);
        }
        res.redirect('/results-list');
    });
}