import surveyModel from "../models/surveyModel.js";
import {UserDisplayName} from "../utilities/index.js";

export function DisplaySurvey(req, res, next){
    res.render('index', {title: 'Survey',
                        page: 'survey',
                        username: UserDisplayName(req)});
}
export function DisplaySurveyList(req, res, next){
    surveyModel.find(function (err, surveyCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Survey Questions',
                            page: 'survey/list',
                            survey: surveyCollection,
                            username: UserDisplayName(req)});
    });
}
//Create
export function DisplaySurveyAddPage(req, res, next){
    res.render('index', {title: 'Create a Survey',
                        page: 'survey/edit',
                        survey: {},
                        username: UserDisplayName(req)});
}
export function ProcessSurveyAddPage(req, res, next){
    let newSurvey = surveyModel({
        topic: req.body.topic,

        question1: req.body.question1,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,

        question2: req.body.question2,
        option2_1: req.body.option2_1,
        option2_2: req.body.option2_2,
        option2_3: req.body.option2_3,

        question3: req.body.question3,
        option3_1: req.body.option3_1,
        option3_2: req.body.option3_2,
        option3_3: req.body.option3_3,

        question4: req.body.question4,
        option4_1: req.body.option4_1,
        option4_2: req.body.option4_2,
        option4_3: req.body.option4_3,

        question5: req.body.question5,
        option5_1: req.body.option5_1,
        option5_2: req.body.option5_2,
        option5_3: req.body.option5_3,
    });

    surveyModel.create(newSurvey, function(error, survey){
        if(error){
            console.error(error);
            res.end(error);
        }
        res.redirect('survey-list')
    })
}

//Update
export function DisplaySurveyEditPage(req, res, next){

    let id = req.params.id;

    surveyModel.findById(id, function(error, survey){
        if(error){
            console.error(error);
            res.end(error);
        }
        res.render('index', {title: 'Edit a Survey',
                            page: 'survey/edit', survey,
                            username: UserDisplayName});
    });
}

export function ProcessSurveyEditPage(req, res, next){
    let id = req.params.id;

    let editSurvey = surveyModel({
        _id: req.body.id,
        topic: req.body.topic,

        question1: req.body.question1,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,

        question2: req.body.question2,
        option2_1: req.body.option2_1,
        option2_2: req.body.option2_2,
        option2_3: req.body.option2_3,

        question3: req.body.question3,
        option3_1: req.body.option3_1,
        option3_2: req.body.option3_2,
        option3_3: req.body.option3_3,

        question4: req.body.question4,
        option4_1: req.body.option4_1,
        option4_2: req.body.option4_2,
        option4_3: req.body.option4_3,

        question5: req.body.question5,
        option5_1: req.body.option5_1,
        option5_2: req.body.option5_2,
        option5_3: req.body.option5_3,

    })

    surveyModel.updateOne({_id: id}, editSurvey, function(error, survey){
        if(error){
            console.error(error);
            res.end(error);
        }
        res.redirect('/survey-add');
    })
}

export function ProcessSurveyDelete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, function(error){
     if(error){
         console.error(error);
         res.end(error);
     }
     res.redirect('/survey-list');
    });
}