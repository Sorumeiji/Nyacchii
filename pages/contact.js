import Navigation from '../src/components/Navigation';

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
					<p>
						Want to hire me for commissions? Send me a direct message on Discord or on Twitter to
						have a chat about your idea or creative project.
					</p>
					<ul>
						<li>
							<a href='#featured' role='outlineButton'>
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
