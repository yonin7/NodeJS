// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'test2';

//! Create
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

//!Read

//!Update by Promises

//! Delete

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('unable');
    }
    const db = client.db(databaseName);
    //! Create
    //     db.collection('users').insertOne(
    //       {
    //         name: 'Yoni',
    //         age: 29,
    //       },
    //       (error, result) => {
    //         if (error) {
    //           return console.log('unable user');
    //         }

    //         console.log(result.ops);
    //       }
    //     );

    db.collection('users').insertMany(
      [
        {
          userID: id,
          userName: 'Yoni',
          age: 29,
          password: '123456',
        },
        {
          userID: id,
          userName: 'Roi',
          age: 27,
          password: '123456',
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('unable user');
        }

        console.log(result.ops);
      }
    );
    db.collection('posts').insertMany(
      [
        {
          _id: id,
          userID: id,
          autherName: 'Yoni',
          comment: 'ddsadsad',
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('unable user');
        }

        console.log(result.ops);
      }
    );
    db.collection('comments').insertMany(
      [
        {
          commentID: id,
          auther: 'Yoni',
          postID: id,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('unable user');
        }

        console.log(result.ops);
      }
    );
    //!Read
    // db.collection('users').findOne({ name: 'Roi' }, (error, user) => {
    //   if (error) {
    //     return console.log('fetch');
    //   }

    //   console.log(user);
    // });

    // db.collection('users')
    //   .find({ name: 'Yoni' })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log('fetch');
    //     }

    //     console.log(users);
    //   });
    //!Update by Promises
    // db.collection('users')
    //   .updateOne(
    //     { _id: new ObjectID('61e630cf97120ddac833bd17') },
    //     { $inc: { age: 2 } }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //! Delete
    // db.collection('users')
    //   .deleteOne({ name: 'Jeyk' })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .deleteMany({ name: 'Yoni' })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
