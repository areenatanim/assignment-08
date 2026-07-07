import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("assignment-08");

export const auth = betterAuth({

    secret: process.env.BETTER_AUTH_SECRET,

    baseURL: process.env.BETTER_AUTH_URL,

    database: mongodbAdapter(MongoClient),

    trustedOrigins: [
        "http://localhost:3000",
        "https://assignment-08-brown-theta.vercel.app"
    ],

    // Optional: Add email/password or social providers here
    emailAndPassword: {
        enabled: true,
    },

    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});