import React, {Component} from 'react';

import './about.scss';
import {loadContributors, Contributor} from '../../actions';

import {SocialBar} from './SocialBar';

interface ContributorsProps {
  about?: string;
}
interface ContributorsState {
  contributors?: Contributor[];
}

export class Contributors extends Component<
  ContributorsProps,
  ContributorsState
> {
  constructor(props: ContributorsProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const contributors = await loadContributors();
    console.log(contributors);
    this.setState(Object.assign(this.state, {contributors}));
  }

  render() {
    const renderContributor = (contributor: Contributor) => {
      const {name, picture, intro, social, badges} = contributor;
      return (
        <div className="about" key={name + '-' + picture}>
          <div className="picture">
            <img src={picture} />
          </div>

          <h2> {name} </h2>
          <p dangerouslySetInnerHTML={{__html: intro}}></p>
          <div className="badges">
            {badges?.map(badge => (
              <img src={badge} key={badge} />
            ))}
          </div>
          <SocialBar
            twitter={social.twitter}
            linkedin={social.linkedin}
            speakerdeck={social.speakerdeck}
            github={social.github}
            medium={social.medium}
          />
        </div>
      );
    };

    if (!this.state.contributors) {
      return (
        <>
          <div className="about">
            <h2> Loading... </h2>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="contributors">
            {this.state.contributors.map(contributor =>
              renderContributor(contributor)
            )}
          </div>
        </>
      );
    }
  }
}
