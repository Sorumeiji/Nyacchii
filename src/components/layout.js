import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faInstagram, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence, animate } from 'framer-motion';

function Layout({ children }) {
	const [words, setWords] = useState(true);

	return (
		<>
			<motion.div
				key='modal'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}>
				{children}
			</motion.div>

			<footer className='footer'>
				<div className='container flow'>
					<ul className='social'>
						<li>
							<a href='https://www.twitch.tv/nyacchii' target='_blank'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank'>
								Terms of Service
							</a>
						</li>
					</ul>
					<ul className='social'>
						<li>
							<div className='copy_lang'>
								<p>&copy; NYACCHII. 2022. All Rights Reserved.</p>
							</div>
						</li>

						<li>|</li>
						<li>
							<a href='https://www.twitch.tv/nyacchii' target='_blank'>
								<FontAwesomeIcon icon={faTwitch} />
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/nyacchii.art/?hl=en' target='_blank'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href='https://www.youtube.com/channel/UC8QRmNyX61s10GytF0CpOgw' target='_blank'>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Layout;
