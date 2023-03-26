
export function DisplayLoginPage(req, res, next){
    res.render('index', {title: 'Login', page: 'auth/login'});
}

export function DisplayRegisterPage(req, res, next){
    res.render('index', {title: 'Register', page: 'auth/register'})
}

//Modify above code for authentication