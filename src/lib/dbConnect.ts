import { MongoClient, ServerApiVersion } from "mongodb";

export async function dbConnect(collectionName: string) {
  const uri = process.env.MONGO_URI!;
  const dbName = process.env.DB_NAME!;
  
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(dbName).collection(collectionName);
}
