import mongoose from "mongoose";
const dbConnection = async () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) =>
      console.log(`Some error occured while connected to database ${err}`)
    );
};

export default dbConnection;
