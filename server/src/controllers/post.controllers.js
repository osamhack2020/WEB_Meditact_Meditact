import db from '../models';

const Post = db.posts;
const User = db.users;

const getPost = (req, res, next) => {
  let query = {};

  if (req.query.id !== undefined) {
    query._id = req.query.id;
  }

  if (req.query.category !== undefined) {
    query.category = req.query.category;
  }

  Post.find(query)
    .then((posts) => {
      return res.json(posts);
    })
    .catch((err) => {
      return res.json({ error: err });
    });
};

const createPost = async (req, res, next) => {
  if (!req.body.title) {
    return res.status(422).json({ errors: { title: "can't be blank" } });
  }

  if (!req.body.contents) {
    return res.status(422).json({ errors: { contents: "can't be blank" } });
  }

  if (!req.body.category) {
    return res.status(422).json({ errors: { category: "can't be blank" } });
  }

  const post = new Post();
  post.title = req.body.title;
  post.contents = req.body.contents;
  post.author = req.payload.id;
  post.category = req.body.category;

  post
    .save()
    .then(async () => {
      // put post in user array
      await User.findById(req.payload.id, (err, user) => {
        if (err) {
          return res.json(err);
        }
        user.posts.push(post._id);
        user.save();
      });
      const ret = post.toJSON();
      ret.username = req.payload.username;
      return res.json(ret);
    })
    .catch(next);
};

const updatePost = (req, res, next) => {
  let data = {};
  if (req.body.title !== undefined) {
    data.title = req.body.title;
  }
  if (req.body.contents !== undefined) {
    data.contents = req.body.contents;
  }
  if (req.body.category !== undefined) {
    data.category = req.body.category;
  }
  Post.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    data,
    { new: true },
    (err, result) => {
      if (err) {
        return res.send(err);
      }
      if (!result) {
        return res.send({ erros: 'cannot find post' });
      }
      return res.send(result);
    }
  );
};

const deletePost = async (req, res, next) => {
  let flag = false;

  await User.findById(req.payload.id).then((user) => {
    if (!user) {
      return res.json({ error: 'cannot find user' });
    }
    user.posts.forEach((post) => {
      if (post.toString() === req.body.id) {
        flag = true;
      }
    });
    user.posts = user.posts.filter((post) => post.toString() !== req.body.id);
    console.log(user.posts);
    user.save();
  });

  if (!flag) {
    return res
      .status(422)
      .json({ errors: 'this post cannot be deleted by this user' });
  }

  Post.deleteOne({ _id: db.mongoose.Types.ObjectId(req.body.id) }).then(
    (post) => {
      if (!post) {
        return res.sendStatus(401);
      }
      return res.sendStatus(200);
    }
  );
};

export default {
  createPost,
  getPost,
  updatePost,
  deletePost,
};
