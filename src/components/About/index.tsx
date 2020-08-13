import React from 'react';

import './about.scss';
import aboutData from './about.json';

import {SocialBar} from './SocialBar';

export const About = () => {
  const {name, picture, bio, intro, social} = aboutData;
  return (
    <>
      <div className="about">
        <div className="picture">
          <img src={picture} />
        </div>

        <h2> {name} </h2>
        <p dangerouslySetInnerHTML={{__html: intro}}></p>
        <SocialBar
          twitter={social.twitter}
          linkedin={social.linkedin}
          speakerdeck={social.speakerdeck}
          github={social.github}
          medium={social.medium}
        />
        <p dangerouslySetInnerHTML={{__html: bio}}></p>
      </div>
    </>
  );
};
