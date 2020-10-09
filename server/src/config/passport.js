import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import db from '../models';

// login strategy using email, password

const User = db.users;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    },
    (email, password, done) => {
      User.findOne({ email: email })
        .then((user) => {
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              errors: { 'email or password': 'is invalid' },
            });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);
