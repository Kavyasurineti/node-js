const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const Client = new MongoClient(url);
let collections;
async function connectDB(dbname, table) {
      let result = await client.connect ();
      let db = result.db(dbname);
      collection = db.collection(table);
      console.log("Database connected...");
      return collection;
}
exports.getData = async function (email) {
      collection = await connectDB("userDB","users");
      let response = await collection.find({ email : email }).toArray();
      return JSON.stringify(response);
};
exports.insertData = async function (user) {
      
      collection = await connectDB("userDB","user");
      let response = await collection.insertOne({ name: user.name, email: user.email, password: user.password });
      return JSON.stringify(response);
};
