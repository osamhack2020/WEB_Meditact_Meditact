import '../env';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Schema res toJSON methods
postSchema.methods.toJSON = function () {
  return {
    id: this._id,
    title: this.title,
    contents: this.contents,
    category: this.category,
    images: this.images,
    author: this.author,
  };
};

export default mongoose.model('Post', postSchema);
