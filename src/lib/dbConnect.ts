import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
const dbName = process.env.DB_NAME!;

let client: MongoClient | null = null;

export async function dbConnect(collectionName: string) {
  // if client already connected, reuse it
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Connected to MongoDB");
  }

  return client.db(dbName).collection(collectionName);
}
