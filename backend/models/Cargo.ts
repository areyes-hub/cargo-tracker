import mongoose from 'mongoose';

const CargoSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  status: { type: String, enum: ['checked-in', 'checked-out'] },
  checkInDate: Date,
  checkOutDate: Date,
  handledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Cargo', CargoSchema);
