export interface SocialContacts {
  twitter?: string;
  linkedin?: string;
  github?: string;
  speakerdeck?: string;
  medium?: string;
  twitch?: string;
  youtube?: string;
}

export interface Contributor {
  name: string;
  picture: string;
  intro: string;
  badges?: string[];
  social: SocialContacts;
}
export const loadContributors = async () => {
  const contributors: Contributor[] = (
    await import('../../data/contributors/list.json')
  ).contributors;
  console.log(contributors);
  return contributors;
};
