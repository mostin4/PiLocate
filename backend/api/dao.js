import Business from '../models/Business.js';

export const updateDaoScore = async (req, res) => {
  const { id, delta } = req.body;
  const business = await Business.findById(id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  business.daoScore += delta;
  await business.save();
  res.json({ success: true, daoScore: business.daoScore });
};
