import type { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import crypto from 'crypto';
import userService from '../services/user.service';
import errorManager from '../utils/error.manager';
import accountService from '../services/account.service';
import util from 'util';
import analytics from '../utils/analytics';
import { isCloud } from '../utils/utils';

class AuthController {
    async login(_: Request, __: Response, ___: NextFunction) {
        passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    }

    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.body == null) {
                errorManager.res(res, 'missing_body');
                return;
            }

            let email = req.body['email'];
            if (email == null) {
                errorManager.res(res, 'missing_email_param'); // TODO BB: check error
                return;
            }

            let name = req.body['name'];
            if (name == null) {
                errorManager.res(res, 'missing_name_param'); // TODO BB: add error
                return;
            }

            let password = req.body['email'];
            if (password == null) {
                errorManager.res(res, 'missing_password_param'); // TODO BB: add error
                return;
            }

            if ((await userService.getUserByEmail(email)) != null) {
                errorManager.res(res, 'duplicate_account'); // TODO BB: check error
                return;
            }

            let account = await accountService.createAccount(`${name}'s Organization`);

            if (account == null) {
                throw new Error('account_creation_failure'); // TODO BB: check error -> or throw error?
            }

            var salt = crypto.randomBytes(16);
            let hashedPassword = await util.promisify(crypto.pbkdf2)(password, salt, 310000, 32, 'sha256');
            let user = await userService.createUser(name, email, hashedPassword.toString(), salt.toString(), account!.id);

            if (user == null) {
                throw new Error('user_creation_failure'); // TODO BB: create error -> or throw error?
            }

            await accountService.editAccount(account!.id, account!.name, user.id);

            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });

            analytics.track('server:account_created', account.id, {}, isCloud() ? { email: email } : {});
            res.redirect('/');
        } catch (err) {
            next(err);
        }
    }

    async checkPassword(email: string, password: string, cb: (error: any, user?: Express.User | false, options?: any) => void) {
        let user = await userService.getUserByEmail(email);

        if (user == null) {
            return cb(null, false, { message: 'Incorrect email or password.' });
        }

        let hashedPassword = await util.promisify(crypto.pbkdf2)(password, user.salt, 310000, 32, 'sha256');

        if (!crypto.timingSafeEqual(Buffer.from(user.hashed_password, 'utf8'), hashedPassword)) {
            return cb(null, false, { message: 'Incorrect email or password.' });
        }

        return cb(null, user);
    }
}

export default new AuthController();
