import db from '../models';
import { Role } from '../utils';

const User = db.users;
const Appt = db.appts;

const createAppt = (req, res, next) => {
  if (!req.body.time) {
    return res.status(422).json({ errors: { time: "can't be blank" } });
  }
  if (!req.body.medic) {
    return res.status(422).json({ errors: { medic: "can't be blank" } });
  }

  const appt = new Appt();
  appt.time = req.body.time;
  appt.patient = req.payload.id;
  appt.medic = req.body.medic;

  appt
    .save()
    .then(() => {
      const result = appt.toJSON();
      return res.json({ appt: result });
    })
    .catch((err) => {
      return res.json(err);
    });
};

const getAll = (req, res, next) => {
  if (req.payload.role !== Role.Admin && req.payload.role !== Role.Medic) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  Appt.find().then((appts) => {
    return res.json(appts);
  });
};

const confirmAppt = (req, res, next) => {
  if (req.payload.role !== Role.Admin && req.payload.role !== Role.Medic) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!req.body.id) {
    return res.status(422).json({ errors: { id: "can't be blank" } });
  }

  Appt.findById(req.body.id).then((appt) => {
    if (!appt) {
      return res.status(401).json({ errors: { id: 'cannot find!' } });
    }
    appt.confirm = !appt.confirm;
    appt.save();
    return res.json({ appt: appt.toJSON() });
  });
};

export default {
  createAppt,
  getAll,
  confirmAppt,
};
