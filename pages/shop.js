import Navigation from '../src/components/Navigation';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function shop() {
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
						Merchanidise &<br /> Goodies<span className='accent'>.</span>
					</h1>
					<p>
						Want to grab a shirt, mousepad or a couple of cute stickers of my orginal characters? I
						have a Stream Elements shop avaiable! Click below to go to the shop.
					</p>
					<ul>
						<li>
							<a href='https://store.streamelements.com/nyacchii' target='_blank' role='button'>
								Visit the Shop &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faShoppingBag} />
								</span>
							</a>
						</li>
					</ul>
				</motion.div>
			</section>
		</>
	);
}

export default shop;
