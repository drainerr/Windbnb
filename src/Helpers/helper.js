export const getSelectedCountry = (string) => {
  const cityAndCountry = string.split(',');
  return cityAndCountry[1];
};
