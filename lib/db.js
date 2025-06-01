import "server-only";
import { MongoClient, ServerApiVersion } from 'mongodb';
  
  if( !process.env.MONGODB_URI ) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  async function getDB(dbName){
      try{
      await client.connect();
      console.log("Connected to MongoDB");
      return client.db(dbName);

      }catch( error){
          console.error("Error connecting to MongoDB:", error);
          throw new Error("Failed to connect to the database");
      }
  }

  export async function getCollection(collectionName) {

      const db = await getDB("next-blog-db");
        if(db) return db.collection(collectionName);
      
      return null;

  }