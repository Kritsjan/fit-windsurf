export const updateMetaTags = (title: string, description: string) => {
  document.title = `${title} - MyHealthCalculator.fit`;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

export const getCanonicalUrl = (path: string) => {
  return `https://myhealthcalculator.fit${path}`;
};