import React from 'react';
import Layout from '../src/components/layout';
import Home from '../styles/modules/home.module.scss';
import Navigation from '../src/components/Navigation';
import Grid from '../styles/modules/grid.module.scss';
import Digital from '../styles/modules/digital.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGrinSquintTears, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div>
							<h1>
								Contact Me<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								Want to hire me for commissions? Send me a direct message on Discord or on Twitter
								to have a chat about your idea or creative project.
							</p>
							<a href='' role='button'>
								Discord &nbsp;
								<span className={`${Home['accent']}`}>
									<FontAwesomeIcon icon={faDiscord} />
								</span>
							</a>
							<a href='' role='button'>
								Twitter &nbsp;
								<span className={`${Home['accent']}`}>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default contact;
