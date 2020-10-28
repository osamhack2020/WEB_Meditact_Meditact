import '../env';
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import db from './index';

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  time: {
    type: Date,
    required: true,
  },
  medic: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  confirm: {
    type: Boolean,
    default: false,
  },
});

appointmentSchema.methods.toJSON = function () {
  return {
    id: this._id,
    time: this.time,
    medic: this.medic,
    patient: this.patient,
    confirm: this.confirm,
  };
};

// unique validator plugin setting
appointmentSchema.plugin(uniqueValidator, { message: 'is already taken.' });

export default mongoose.model('Appointment', appointmentSchema);
