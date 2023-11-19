import { i18n } from '@constants';

import { PageId } from './routes.types';

export type Locale = (typeof i18n)['locales'][number];

export type Pathnames = Record<PageId, Record<Locale, string>>;
