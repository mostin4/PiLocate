import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  sender: String,
  content: String,
  businessId: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
