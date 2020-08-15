export interface SocialContacts {
  twitter?: string;
  linkedin?: string;
  github?: string;
  speakerdeck?: string;
  medium?: string;
  twitch?: string;
  youtube?: string;
}

export interface AboutInfo {
  name: string;
  picture: string;
  bio: string;
  intro: string;
  social: SocialContacts;
}
export const loadAboutInfo = async () => {
  const aboutInfo = await import('../../data/about/luca.json');
  return aboutInfo;
};
