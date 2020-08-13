import React, {Component, ComponentProps} from 'react';

import './about.scss';
import {loadAboutInfo} from '../../actions/about';

import {SocialBar, SocialBarProperties} from './SocialBar';

interface AboutProps {
  about?: string;
}
interface AboutState {
  about?: {
    name: string;
    picture: string;
    bio: string;
    intro: string;
    social: SocialBarProperties;
  };
}

export class About extends Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const about = await loadAboutInfo();
    this.setState(Object.assign(this.state, {about}));
  }

  render() {
    if (!this.state.about) {
      return (
        <>
          <div className="about">
            <h2> Loading... </h2>
          </div>
        </>
      );
    } else {
      const {name, picture, bio, intro, social} = this.state.about;
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
    }
  }
}
