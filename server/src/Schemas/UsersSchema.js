import mongoose from "../Services/MongoDbService.js";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('user', userSchema, 'users');