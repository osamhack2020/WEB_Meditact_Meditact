import '../env';
import mongoose from 'mongoose';
import userModel from './user.model';
import postModel from './post.model';
import apptModel from './appt.model';

// model schema and connection definition

const db = {
  mongoose,
  url: process.env.DB_URL,
  users: userModel,
  posts: postModel,
  appts: apptModel,
};

export default db;
