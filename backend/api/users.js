export const getUser = async (req, res) => {
  const mockUser = {
    username: 'tayfun',
    kyc: true,
    lang: 'tr'
  };
  res.json(mockUser);
};
