import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const bond = await mongoose.connect(process.env.MONGODB);
    console.log(`Data base sucessfully connected!! at:${bond.connection.host}`);
  } catch (error) {
    console.log(`Data Base Not Connected:${error}`);
  }
};
