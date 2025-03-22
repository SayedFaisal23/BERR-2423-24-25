const { MongoClient } = require('mongodb');

async function main() {
//Replace <connection-string> with your MongoDB URI
const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri);

try {
console.time("time");
await client.connect();
console. log("Connected to MongoDB!");
console.timeEnd("time");

const db = client.db("testDB");
const collection = db.collection("users");

// Insert a document
await collection. insertOne({ name: "Ali", age: 55 });
console. log("Document inserted!") ;

// Query the document
const result = await collection. findOne({ name: "Ali" });
console. log("Query result:", result);
} catch (err) {
console.error("Error:", err) ;
} 
finally {
await client.close();
}
}

main ();