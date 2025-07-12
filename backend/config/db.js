import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/daoverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB bağlantısı başarılı'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));
};
