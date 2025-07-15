const BusinessSchema = new mongoose.Schema({
  name: String,
  description: String,
  lat: Number,
  lng: Number,
  isPiAccepted: Boolean,
  daoScore: Number,
  email: String,
  // Yeni eklenenler
  packageLevel: { type: String, enum: ['basic', 'advanced', 'premium'], default: 'basic' },
  isFeatured: { type: Boolean, default: false },
  paymentTx: String
});

