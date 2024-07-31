var app = require('./App.js');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://zyu2818:zy%401234A@cluster0.ni3evew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/** gets products from database */
async function openDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db('cluster0');
    const products = database.collection('products');
    // Query for a movie that has the name 'Shirt'
    const query = { price: 5.99 };
    const allProducts = products.find();
    app.processProducts(allProducts);
    
    // console.log(product);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);
