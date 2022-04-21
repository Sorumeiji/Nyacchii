import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section className='contact'>
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
							<a href='#featured' role='button'>
								My Discord &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faDiscord} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://www.twitch.tv/nyacchii' target='_blank' role='button'>
								My Twitter &nbsp;
								<span className='accent'>
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
