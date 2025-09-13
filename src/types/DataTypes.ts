import type { PortableTextBlock } from '@portabletext/types';

export interface Nav {
  home: string;
  about: string;
  projects: string;
}

export interface Theme {
  light: string;
  dark: string;
}

export interface Footer {
  copyright: string;
}

export interface CurrentSkill {
  title: string;
  description: string;
}

export interface Skills {
  title: string;
  intro: string;
  currentSkills: Array<CurrentSkill>;
}

export interface Interests {
  title: string;
  description: string;
}

export interface Travel {
  title: string;
  description: string;
}

export interface About {
  title: string;
  intro: string;
  background: string;
  skills: Skills;
  interests: Interests;
  travel: Travel;
}

export interface DataTypes {
  mainTitle: string;
  mainText: PortableTextBlock[];
  nav: Nav;
  theme: Theme;
  footer: Footer;
  about: About;
}

export interface SlugType {
  _type: string;
  current: string;
}

export interface AboutPageTypes {
  content: PortableTextBlock[];
  slug: SlugType;
  title: string;
  _id: string;
}

export interface SocialLinkTypes {
  platform: string;
  url: string;
}

export interface FooterTypes {
  copyrightText: string;
  description: string;
  logo: HTMLImageElement | null;
  socialLinks: SocialLinkTypes[];
}
