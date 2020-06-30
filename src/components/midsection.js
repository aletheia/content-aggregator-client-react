import React from 'react';
import {
	FaRocket,
	FaRss,
	FaVideo,
	FaSlideshare,
	FaGithub,
	FaUser,
} from 'react-icons/fa';

import { graphql } from "gatsby"

import './style.scss';
import Emoji from './emoji';

export const query = graphql`
query IndexMD {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          title
        }
        excerpt
      }
    }
  }
}
`

const Midsection = ({data}) => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRocket size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Why this site?</h1>
									<p className="subtitle is-size-5 ">
										This space is a collection of personal resources about Serverless and modern app development throught years of work on software architectures.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRss size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Articles</h1>
									<p className="subtitle is-size-5">
										Deep dive articles, How-Tos and discussion papers about modern apps. Both in <a href="">english</a> and  <a href="">italian</a> language.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaVideo size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Videos</h1>
									<p className="subtitle is-size-5">
										Introductory sessions about modern apps, architecture talks and Live coding videos, for the audio-visual folks.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaSlideshare size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Slides</h1>
									<p className="subtitle is-size-5">
										Slide decks and presentation material about serverless, AI and decentralized apps.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaGithub size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Open Source</h1>
									<p className="subtitle is-size-5">
										Open source code, libraries and tools built to support the coommunity and some PoC projects built for fun.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaUser size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">About Me</h1>
									<p className="subtitle is-size-5">
										I am Luca Bianchi, Chief Technology Officer at <a href="https://www.neosperience.com">Neosperience</a> and modern software architecture passionate. In this section, a brief unofficial bio and my contacts.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
