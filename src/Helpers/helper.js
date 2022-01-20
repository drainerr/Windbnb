export const getCityAndCountry = (string) => {
  const cityAndCountry = string.split(',');
  return { city: cityAndCountry[0], country: cityAndCountry[1] };
};
