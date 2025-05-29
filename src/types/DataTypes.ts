export interface Intro {
  greeting: string;
  description: string;
}

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

export interface About {
  title: string;
  intro: string;
  background: string;
  skills: Skills;
  interests: Interests;
}

export interface DataTypes {
  title: string;
  intro: Intro;
  nav: Nav;
  theme: Theme;
  footer: Footer;
  about: About;
}
