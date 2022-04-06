import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div>
					<div className={`${Home['hero__content']}`}>
						<div>
							<h1>
								Contact Me<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								Want to hire me for commissions? Send me a direct message on Discord or on Twitter
								to have a chat about your idea or creative project.
							</p>
							<div>
								<a href='#' role='button'>
									Discord &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faDiscord} />
									</span>
								</a>
							</div>
							<div>
								<a href='#' role='button'>
									Twitter &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faTwitter} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default contact;
