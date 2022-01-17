//! 1. Crud
//1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
db.restaurants.find();

//1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine.
db.restaurants.find({ cuisine: 'asian' });

//1.3 - Write a MongoDb query that displays only kosher restaurants.
db.restaurants.find({ kosher: true });

//1.4 - Write a MongoDb query that displays only a specific cities restaurants
db.restaurants.find({ 'address.city': 'Holon' }).pretty();

//1.5 - Write a MongoDb query to display a specific restaurants address
db.restaurants.find({ 'address.street': 'Herzel 15' }).pretty();

//1.6 - Write a MongoDb query to display a specific restaurants coordinates
db.restaurants.find({ 'address.coordinates': [20.46574, 10.6774] }).pretty();

//1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
db.restaurants.find().sort({ name: 1 }).pretty();

//1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
db.restaurants.find().sort({ 'address.city': 1 }).pretty();

//1.9 - Update a specific restaurant's name
db.restaurants
  .updateOne(
    { _id: ObjectId('61e54214ce1ebdc869ebb542') },
    { $set: { name: "Yoni's rest" } }
  )
  .pretty();

//1.10 - Update a specific restaurant by adding a new review.
db.restaurants
  .updateOne(
    { _id: ObjectId('61e54214ce1ebdc869ebb542') },
    { $push: { reviews: { date: new Date(), score: 5 } } }
  )
  .pretty();

//1.11 - Update all restaurants to be kosher
db.restaurants.updateMany({ kosher: false }, { $set: { kosher: true } });

//1.12 - Delete a specific restaurant
db.restaurants
  .deleteOne({ _id: ObjectId('61e54214ce1ebdc869ebb542') })
  .pretty();

//1.13 - Delete all restaurants
db.restaurants.deleteMany({});

//! 2. forEach Queries
// 2.1 - Write a MongoDb query to print all restaurant names.
db.restaurants.find().forEach((restaurant) => {
  print('restaurant name: ' + restaurant.name);
});

// 2.2 - Write a MongoDb query to print all restaurant cities
db.restaurants.find().forEach((restaurant) => {
  print('restaurant city: ' + restaurant.address.city);
});

// 2.3 - Write a MongoDb query to print all restaurant coordinates
db.restaurants.find().forEach((restaurant) => {
  print('restaurant coordinates: ' + restaurant.address.coordinates);
});

//! 3. Advanced Queries
// 3.1 - Query for restaurant names that start with a specific alphabet
db.restaurants.find({ name: /^b/i });
db.restaurants.find({ name: { $regex: '^t', $options: 'i' } });

// 3.2 - Query how many documents you have from the restaurant collection.
db.restaurants.find().count();

// 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
db.restaurants.find({ 'reviews.date': new Date('2020-01-01') });

//! 4. Aggregation operations
// 4.1- Write a mongoDb query to display all restaurants average score.
db.restaurants.aggregate([
  { $project: { averageScore: { $avg: '$reviews.score' } } },
]);

// 4.2 - Write a mongoDb query to display a specific restaurant average score
db.restaurants.aggregate([
  { $unwind: '$reviews' },
  { $match: { _id: ObjectId('61e54214ce1ebdc869ebb542') } },
  {
    $group: {
      _id: '$name',
      avgRating: { $avg: '$reviews.score' },
    },
  },
]);
