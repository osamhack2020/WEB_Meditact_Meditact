import passport from 'passport';
import { Role } from '../utils';
import db from '../models';

const User = db.users;

const getAll = (req, res, next) => {
  // only admin can get all information of users.
  if (req.payload.role !== Role.Admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  User.find().then((users) => {
    return res.json(users);
  });
};

// get user information and update token
const getToken = (req, res, next) => {
  User.findById(req.payload.id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(401);
      }
      const response = user.toJSON();
      response.token = user.generateJWT();
      return res.json({ user: response });
    })
    .catch(next);
};

const deleteUser = (req, res, next) => {
  // if user is admin, this user can delete any users.
  if (req.payload.role === Role.Admin) {
    if (req.body.user.username) {
      User.deleteOne({ username: req.body.user.username })
        .then((user) => {
          if (!user) {
            return res.sendStatus(401);
          }
          return res.sendStatus(200);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  } else {
    // user delete by authorize token
    User.deleteOne({ _id: req.payload.id })
      .then((user) => {
        if (!user) {
          return res.sendStatus(401);
        }
        return res.sendStatus(200);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const updateUser = (req, res, next) => {
  let data = {};
  if (req.body.user.username !== undefined) {
    data.username = req.body.user.username;
  }
  if (req.body.user.email !== undefined) {
    data.email = req.body.user.email;
  }

  if (
    req.body.user.lastPassword !== undefined &&
    req.body.user.password === undefined
  ) {
    return res.status(401).send({
      password: "cant't be blank if you want to change password!",
    });
  }

  if (req.body.user.password !== undefined) {
    if (req.body.user.lastPassword === undefined) {
      return res.status(401).send({
        lastPassword: "cant't be blank if you want to change password!",
      });
    }
    data.password = req.body.user.password;
    data.lastPassword = req.body.user.lastPassword;
  }

  User.findByIdAndUpdate(
    {
      _id: req.payload.id,
    },
    data,
    { new: true },
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        if (data.password) {
          if (result.validPassword(data.lastPassword)) {
            result.setPassword(data.password);
          } else {
            return res
              .status(401)
              .json({ error: { lastPassword: 'unmatched' } });
          }
        }
        result.save();
        return res.send(result);
      }
    }
  );
};

const createUser = (req, res, next) => {
  if (!req.body.user.username) {
    return res.status(422).json({ errors: { username: "can't be blank" } });
  }

  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  if (!req.body.user.role) {
    return res.status(422).json({ errors: { role: "can't be blank" } });
  }

  const user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);
  user.role = req.body.user.role;
  user.age = req.body.user.age;
  user.height = req.body.user.height || '0';
  user.weight = req.body.user.weight || '0';
  user.phoneNumber = req.body.user.phoneNumber || '000-0000-0000';

  user
    .save()
    .then((res) => {
      return res.json({ user: user.toJSON() });
    })
    .catch((err) => {
      return res.json(err);
    });
};

const login = (req, res, next) => {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  // login by passport local strategy
  passport.authenticate('local', { session: false }, function (
    err,
    user,
    info
  ) {
    if (err) {
      return next(err);
    }

    if (user) {
      const response = user.toJSON();
      response.token = user.generateJWT();
      return res.status(200).json({ user: response });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
};

const getAllPosts = async (req, res, next) => {};
export default {
  getAll,
  getToken,
  login,
  createUser,
  deleteUser,
  updateUser,
};
