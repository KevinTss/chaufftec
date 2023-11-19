import { Pathnames } from '@types';

export const i18n = {
  defaultLocale: 'en',
  locales: ['fr', 'en'],
} as const;

export const pathnames: Pathnames = {
  index: {
    en: '/en',
    fr: '/fr',
  },
  energy: {
    en: '/en/renewable-energies',
    fr: '/fr/energies-renouvelables',
  },
  gaz: {
    en: '/en/gaz',
    fr: '/fr/gaz',
  },
  heating: {
    en: '/en/heating',
    fr: '/fr/chauffages',
  },
  sanitary: {
    en: '/en/sanitary',
    fr: '/fr/sanitaires',
  },
  water: {
    en: '/en/water-treatment',
    fr: '/fr/traitement-des-eaux',
  },
};
