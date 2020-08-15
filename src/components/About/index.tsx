import React, {Component} from 'react';

import './about.scss';
import {loadAboutInfo, AboutInfo} from '../../actions';

import {SocialBar} from './SocialBar';

interface AboutProps {
  about?: string;
}
interface AboutState {
  about?: AboutInfo;
}

export class About extends Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const aboutInfo = await loadAboutInfo();
    this.setState(Object.assign(this.state, {about: aboutInfo}));
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
