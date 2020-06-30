import React from 'react';
import {
	FaRocket,
	FaRss,
	FaVideo,
	FaSlideshare,
	FaGithub,
	FaUser,
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRocket size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Why this site?</h1>
									<p className="subtitle is-size-5">
										This corner on the web is about modern apps and architectures that  can be built using tools available on  cloud.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRss size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Articles</h1>
									<p className="subtitle is-size-5">
										A collection of articles about serverless technologies and architectures.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaVideo size="fa-2x" className="has-text-primary-dark" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Videos</h1>
									<p className="subtitle is-size-5">
										Live coding videos, talks and architecture presentations recorded on various occasions.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaSlideshare size="fa-2x" className="has-text-info" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Slides</h1>
									<p className="subtitle is-size-5">
										Bulma is based on the Flexbox model and built with Sass. The
										simplest grid system Just add columns, they will resize
										themselves, like this website.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
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
										This starter kit is MIT Licensed. Need I say more?
										<Emoji emoji="🤑" />
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaUser size="fa-2x" className="has-text-blue" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">About Me</h1>
									<p className="subtitle is-size-5">
										This starter kit is target to developers who are looking
										forward to use Bulma along with GatsbyJS. You can read more
										in the <a href="https://gatsbyjs.org">documentation</a> on
										how to get started.
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
