import mongoose from 'mongoose';

const CargoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  destination: { type: String, required: true },
  status: {
    type: String,
    enum: ['checked-in', 'checked-out'],
    default: 'checked-in',
  },
  checkInDate: { type: Date, default: Date.now },
  checkOutDate: Date,
  handledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Cargo', CargoSchema);
