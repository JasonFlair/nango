import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import express from 'express';
import session from 'express-session';
import SQLiteStore from 'connect-sqlite3';
import path from 'path';
import authController from '../controllers/auth.controller';

const sessionStore = SQLiteStore(session);

declare global {
    namespace Express {
        interface User {
            email: string;
            name: string;
            id: number;
            _id?: number;
        }
    }
}

class AuthClient {
    static setup(app: express.Express) {
        passport.use(new LocalStrategy(authController.checkPassword));

        app.use(express.static(path.join(__dirname, 'public')));
        app.use(
            session({
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: false,
                store: new sessionStore({ db: 'sessions.db', dir: './var/db' }) as session.Store // TODO BB: verify it works
            })
        );
        app.use(passport.authenticate('session'));

        passport.serializeUser(function (user: Express.User, cb) {
            process.nextTick(function () {
                cb(null, { id: user.id, email: user.email, name: user.name });
            });
        });

        passport.deserializeUser(function (user: Express.User, cb) {
            process.nextTick(function () {
                return cb(null, user);
            });
        });
    }
}

export default new AuthClient();
