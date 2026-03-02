import { SocialLink, AdSenseConfig } from '../types';

export const ADSENSE_CONFIG: AdSenseConfig = {
  clientId: 'ca-pub-6735039970151788',
  format: 'auto',
  responsive: true,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:allankayan@hotmail.com',
    label: 'Email',
    icon: 'mail',
  },
  {
    href: 'https://allankayan.cv/',
    label: 'Curriculo',
    icon: 'description',
  },
  {
    href: 'https://github.com/allankayan',
    label: 'GitHub',
    icon: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/allankayan/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://x.com/kayan_allan',
    label: 'X / Twitter',
    icon: 'twitter',
  },
];

export const ANALYTICS_CONFIG = {
  counterDevId: 'f30df6f3-776d-4154-959d-0210ac8a8325',
  utcOffset: '-3',
};

export const THEME_STORAGE_KEY = 'theme';
export const LANG_STORAGE_KEY = 'app_lang';
export const VISITED_STORAGE_KEY = 'has_visited';

export const COMPANY_LINKS = {
  shiddotech: '#',
  onnechat: '#',
  oliquo: '#',
};
