import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';
import Navigation from '../src/components/Navigation';

import feature01 from '../img/featured/01.png';
import feature02 from '../img/featured/02.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const Index = () => {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<article>
					<h1>
						Digital Creative & Twitch Partner<span className='accent'>.</span>
					</h1>
					<p>
						Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner from
						Mexico. Expertise in digital and traditional art.
					</p>
					<div>
						<a href='#featured' role='button'>
							Preview Works &nbsp;
							<span className='accent'>
								<FontAwesomeIcon icon={faHeart} />
							</span>
						</a>
					</div>
					<div>
						<a href='https://www.twitch.tv/nyacchii' target='_blank' role='outlineButton'>
							Follow on Twitch &nbsp;
							<span className='accent'>
								<FontAwesomeIcon icon={faTwitch} />
							</span>
						</a>
					</div>
				</article>
			</section>

			<section className='featured'>
				<article>
					<h2 className='gradient'>Works on Dispay.</h2>
					<div className='displayGallery'>
						<div className='displayGallery__item image-container'>
							<img src='https://res.cloudinary.com/dhclgoera/image/upload/v1649251744/Nyacchii/Featured/02_knhpx2.png' />
						</div>
						<div className='displayGallery__item'></div>
						<div className='displayGallery__item'></div>
						<div className='displayGallery__item'></div>
						<div className='displayGallery__item'></div>
						<div className='displayGallery__item'></div>
					</div>
				</article>

				<article>
					<h2>Stream Schedule</h2>
					<a>Twitch.tv/Nyacchii</a>
					<div>
						<div>
							<p>Mon Tue Wed Fri Sat</p>
							<p>Regular: 5PM - 9PM CST</p>
						</div>
						<div>
							<p>Thursday</p>
							<p>Gaming: 5PM - 9PM CST</p>
						</div>
						<div>
							<p>Sunday</p>
							<p>Traditional Raffle: 5PM - 9PM CST</p>
						</div>
					</div>
					<a href='#'>
						View Commissions <FontAwesomeIcon icon={faArrowRight} />
					</a>
				</article>
			</section>
		</>
	);
};

export default Index;
