import express from 'express';

import passport from "passport";

//User Model
import User from '../models/user.js';
import { UserDisplayName } from "../utilities/index.js";

//Login
//Display the Login Page
export function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', {
            title: 'Login',
            page: 'auth/login',
            messages: req.flash('loginMessage'),
            username: UserDisplayName(req)
        });
    }
    return res.redirect('/');
}

//Display the Registration Page

export function DisplayRegistrationPage(req, res, next) {
    if (!res.user) {
        return res.render('index', {
            title: 'Register',
            page: 'auth/register',
            messages: req.flash('registerMessage'),
            username: UserDisplayName(req)
        });
    }
}

// Processing Functions
export function ProcessRegistrationPage(req, res, next) {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
    });

    User.register(newUser, req.body.password, function (error) {

        if (error) {
            if (error.name === "UserExistsError") {
                console.error('ERROR: User Already Registered');
                req.flash('registerMessage', error.name);
            } else {
                console.error(error.name);
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/login');
        }

        return passport.authenticate('local', (req, res, function () {
            return res.redirect('/register');
        }));
    });
}
export function ProcessLoginPage(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(error);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/survey-list');
        })
    })(req, res, next);
}

export function ProcessLogoutPage(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log('User logout Successful');
    })
    res.redirect('/');
}