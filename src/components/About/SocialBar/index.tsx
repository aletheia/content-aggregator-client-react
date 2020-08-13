import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSpeakerDeck} from '@fortawesome/free-brands-svg-icons';
import {faMedium} from '@fortawesome/free-brands-svg-icons';
import {faTwitch} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

import './social-bar.scss';

export interface SocialBarProperties {
  twitter?: string;
  linkedin?: string;
  github?: string;
  speakerdeck?: string;
  medium?: string;
  twitch?: string;
  youtube?: string;
}

export const SocialBar = ({
  twitter,
  linkedin,
  github,
  speakerdeck,
  medium,
  twitch,
  youtube,
}: SocialBarProperties) => {
  return (
    <div className="bar">
      <h1>follow me on:</h1>
      {medium && (
        <a href={medium}>
          <FontAwesomeIcon className="icon" icon={faMedium} size="2x" />
        </a>
      )}
      {twitter && (
        <a href={twitter}>
          <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin}>
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
        </a>
      )}
      {github && (
        <a href={github}>
          <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
        </a>
      )}
      {speakerdeck && (
        <a href={github}>
          <FontAwesomeIcon className="icon" icon={faSpeakerDeck} size="2x" />
        </a>
      )}
      {twitch && (
        <a href={twitch}>
          <FontAwesomeIcon className="icon" icon={faTwitch} size="2x" />
        </a>
      )}
      {youtube && (
        <a href={youtube}>
          <FontAwesomeIcon className="icon" icon={faYoutube} size="2x" />
        </a>
      )}
    </div>
  );
};
