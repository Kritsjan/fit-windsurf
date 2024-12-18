import { BASE_URL, SITE_NAME, SEPARATOR, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './constants';

export const getPageTitle = (title?: string) => {
  if (!title) return DEFAULT_TITLE;
  return `${title}${SEPARATOR}${SITE_NAME}`;
};

export const getCanonicalUrl = (path: string) => {
  return `${BASE_URL}${path}`;
};

export const updateMetaTags = (title?: string, description: string = DEFAULT_DESCRIPTION) => {
  document.title = getPageTitle(title);
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};