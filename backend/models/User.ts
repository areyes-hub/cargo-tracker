import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ['admin', 'staff'], default: 'staff' }
});

export default mongoose.model('User', UserSchema);
