// src/appwriteConfig.js
import { Client, Databases, Storage, ID } from "appwrite";

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") //  Appwrite endpoint
  .setProject("683158d600169d6459da");              // Appwrite project ID

// Exported services
const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage, ID };

export const DATABASE_ID = '68315955000699eb50de';
export const Feedback_COLLECTION_ID = '6831596d001f5328516b';
export const BUCKET_ID  =  '68315b85000c84a27180'  