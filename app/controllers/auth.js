// NOTE: The following code will be removed
// for authentication. The code to be replaced will end with ***Remove***

export function DisplayLoginPage(req, res, next){
    res.render('index', {title: 'Login', page: 'auth/login'});
}

export function DisplayRegisterPage(req, res, next){
    res.render('index', {title: 'Register', page: 'auth/register'})
}