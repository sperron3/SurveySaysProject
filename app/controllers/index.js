export function DisplayHomePage(req, res, next){
    res.render('index', {title: 'Home', page: 'home'})
}

export function DisplaySurveyPage(req, res, next){
    res.render('index', {title: 'Survey', page: 'survey'});
}