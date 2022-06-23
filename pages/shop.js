import Navigation from '../src/components/Navigation';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function shop() {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<div className='container flow contact__content'>
					<h1>
						Merchanidise and Goodies<span className='accent'>.</span>
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
				</div>
			</section>
		</>
	);
}

export default shop;
