import mongoose from 'mongoose';

const BusinessSchema = new mongoose.Schema({
  name: String,
  description: String,
  lat: Number,
  lng: Number,
  isPiAccepted: Boolean,
  daoScore: Number,
  email: String
});

export default mongoose.models.Business || mongoose.model('Business', BusinessSchema);
