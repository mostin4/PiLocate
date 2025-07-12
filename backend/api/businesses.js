import Business from '../models/Business.js';

export const getBusinesses = async (req, res) => {
  const list = await Business.find({});
  res.json(list);
};

export const addBusiness = async (req, res) => {
  const newBusiness = new Business(req.body);
  await newBusiness.save();
  res.json({ success: true });
};
