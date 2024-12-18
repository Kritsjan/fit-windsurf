import { BASE_URL } from './constants';

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${BASE_URL}${item.url}`
    }))
  };
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.description,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'datePublished': article.datePublished,
    'image': article.image,
    'url': `${BASE_URL}${article.url}`
  };
};