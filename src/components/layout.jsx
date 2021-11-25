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
	const buttonRef = useRef();
	const navRef = useRef();
	const router = useRouter();

	useEffect(() => {
		buttonRef.current.addEventListener('click', toggle);
	}, []);

	function toggle(event) {
		const visibilty = navRef.current.getAttribute('data-visible');
		if (visibilty === 'false') {
			navRef.current.setAttribute('data-visible', true);
			buttonRef.current.setAttribute('aria-expanded', true);
		} else {
			navRef.current.setAttribute('data-visible', false);
			buttonRef.current.setAttribute('aria-expanded', false);
		}
	}

	return (
		<>
			<div className='layout'>
				<div
					className={`${Grid.row}
				 ${Grid.container_fluid} 
				 ${Nav.wrapper}
				 ${Grid.middle_xs} 
				 ${Grid.between_xs}`}>
					<div className={`${Nav.Logo}`}>
						<Image src={Logo} />
					</div>

					<button
						className={`${Nav.mobile_nav_toggle}`}
						aria-controls='primary_navigation'
						ref={buttonRef}
						aria-expanded='false'>
						<span className={`${Nav.sr_only}`}>menu</span>
					</button>

					<nav>
						<ul
							id='primary_navigation'
							data-visible='false'
							ref={navRef}
							className={`${Nav.primary_navigation}`}>
							<li>
								<Link href='/'>
									<a className={router.pathname == '/' ? `${Nav.active}` : ''}>Home</a>
								</Link>
							</li>
							<li>
								<Link href='/digital'>
									<a className={router.pathname == '/digital' ? `${Nav.active}` : ''}>
										Digital Art
									</a>
								</Link>
							</li>
							<li>
								<Link href='/emotes'>
									<a className={router.pathname == '/emotes' ? `${Nav.active}` : ''}>Emotes</a>
								</Link>
							</li>
							<li>
								<a href='https://store.streamelements.com/nyacchii' target='_blank'>
									Store
								</a>
							</li>
							<li>
								<Link href='/contact'>
									<a className={router.pathname == '/contact' ? `${Nav.active}` : ''}>Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}>
					{children}
				</motion.div>
			</div>
			<footer>
				<div className={`${Grid.container_fluid}`}>
					<div className={`${Grid.row} ${Grid.between_xs}`}>
						<div className='copy_lang'>
							<p>
								<FontAwesomeIcon icon={faCopyright} />
								&nbsp; NYACCHII 2021.
							</p>
							<a className='copyright' href='#'>
								<FontAwesomeIcon icon={faGlobeAmericas} />
								&nbsp;Español
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
