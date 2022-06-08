import Navigation from '../src/components/Navigation';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<div className='container'>
					<h1>
						Contact Me<span className='accent'>.</span>
					</h1>
					<h4>Status: Closed</h4>
					<p>
						Need more info regarding commissions? Send me a direct message on Discord or on Twitter
						to have a chat about your idea or creative project.
					</p>
					<ul>
						<li>
							<a href='https://discordapp.com/invite/T5xDbqd' target='_blank' role='outlineButton'>
								My Discord &nbsp;
								<span>
									<FontAwesomeIcon icon={faDiscord} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank' role='outlineButton'>
								My Twitter &nbsp;
								<span>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default contact;
