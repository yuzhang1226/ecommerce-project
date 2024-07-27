const mongoose = require('mongoose');

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://zyu2818:zy%401234A@cluster0.ni3evew.mongodb.net/cluster0?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority";

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);