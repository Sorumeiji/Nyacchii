import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section>
				<Navigation />
				<div>
					<div>
						<div>
							<h1>
								Contact Me<span>.</span>
							</h1>
							<p>
								Want to hire me for commissions? Send me a direct message on Discord or on Twitter
								to have a chat about your idea or creative project.
							</p>
							<div>
								<a href='#' role='button'>
									Discord &nbsp;
									<span>
										<FontAwesomeIcon icon={faDiscord} />
									</span>
								</a>
							</div>
							<div>
								<a href='#' role='button'>
									Twitter &nbsp;
									<span>
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
