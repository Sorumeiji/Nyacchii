import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion, AnimatePresence, animate } from 'framer-motion';

import Nav from '../../styles/modules/nav.module.scss';
import Grid from '../../styles/modules/grid.module.scss';

import Logo from '../../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

function Layout({ children }) {
	return (
		<>
			<div className='layout'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}>
					{children}
				</motion.div>
			</div>
			<footer>
				<div className={`${Grid.container} ${Grid.margin_center}`}>
					<div className={`${Grid.row}  ${Grid.between_xs}`}>
						<div className='copy_lang'>
							<p>&copy; NYACCHII. 2022. All Rights Reserved.</p>
							<a className='copyright' href='#'>
								Privacy Policy
							</a>
							<a className='copyright' href='#'>
								Terms of Service
							</a>
						</div>

						<ul className='social'>
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
				</div>
			</footer>
		</>
	);
}

export default Layout;
