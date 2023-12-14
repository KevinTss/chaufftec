import { Pathnames, Locale, Dictionary } from '@types';
import { en, fr } from '@constants';

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
  about: {
    en: '/en/about',
    fr: '/fr/a-propos',
  },
  service: {
    en: '/en/services',
    fr: '/fr/services',
  },
};

export const dictionariesMap: Record<Locale, Dictionary> = {
  en,
  fr,
};
