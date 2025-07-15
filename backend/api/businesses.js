export const upgradePackage = async (req, res) => {
  const { id, packageLevel, paymentTx } = req.body;
  const business = await Business.findById(id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  business.packageLevel = packageLevel;
  business.isFeatured = packageLevel !== 'basic';
  business.paymentTx = paymentTx;
  await business.save();
  res.json({ success: true, business });
};
export {
  getBusinesses,
  addBusiness,
  upgradePackage // ✅ Yeni eklenen fonksiyon
};

