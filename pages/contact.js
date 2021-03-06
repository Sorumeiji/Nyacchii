import Navigation from '../src/components/Navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function contact() {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.5,
							},
						},
					}}
					className='container flow contact__content'>
					<h1>
						Contact Me<span className='accent'>.</span>
					</h1>
					<div>
						<h4 className='status'>
							<span className='accent-gray'>Status: </span> Closed
						</h4>
					</div>
					<p>
						Need more info regarding commissions? Send me a direct message on Discord or on Twitter
						to have a chat about your idea or creative project.
					</p>
					<ul>
						<li>
							<a
								href='https://discordapp.com/users/250100895084183562'
								target='_blank'
								role='button'>
								My Discord &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faDiscord} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank' role='button'>
								My Twitter &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</li>
					</ul>
				</motion.div>
			</section>
		</>
	);
}

export default contact;
