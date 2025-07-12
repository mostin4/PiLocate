import Message from '../models/Message.js';

export const sendMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  await newMessage.save();
  res.json({ success: true });
};
