export const loadAboutInfo = async () => {
  const aboutInfo = await import('../../data/about/luca.json');
  return aboutInfo;
};
