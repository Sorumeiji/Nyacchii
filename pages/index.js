import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';
import Navigation from '../src/components/Navigation';

import feature01 from '../img/featured/01.png';
import feature02 from '../img/featured/02.png';
import feature03 from '../img/featured/03.png';
import feature04 from '../img/featured/04.png';
import feature05 from '../img/animated/inochi2.gif';
import feature06 from '../img/featured/05.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const Index = () => {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<article className='container'>
					<h1>
						Digital Creative & Twitch Partner<span className='accent'>.</span>
					</h1>
					<p>
						Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner from
						Mexico. Expertise in digital and traditional art.
					</p>
					<ul>
						<li>
							<a href='#featured' role='button'>
								Preview Works &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faHeart} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://www.twitch.tv/nyacchii' target='_blank' role='outlineButton'>
								Follow on Twitch &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitch} />
								</span>
							</a>
						</li>
					</ul>
				</article>
			</section>

			<section className='featured'>
				<article className='container'>
					<h2>
						Works on Display<span className='accent'>.</span>
					</h2>
					<div className='displayGallery'>
						<div className='displayGallery__item image-container'>
							<Image src={feature01} />
						</div>
						<div className='displayGallery__item'>
							<Image src={feature02} />
						</div>
						<div className='displayGallery__item image-padding'>
							<Image src={feature03} />
						</div>
						<div className='displayGallery__item image-padding'>
							<Image src={feature04} />
						</div>
						<div className='displayGallery__item image-padding'>
							<Image className='img' layout='fixed' src={feature05} />
						</div>
						<div className='displayGallery__item image-padding'>
							<Image src={feature06} />
						</div>
					</div>
				</article>

				<article className='container'>
					<div className='title'>
						<h2>
							Stream Schedule<span className='accent'>.</span>
						</h2>
						<a>
							<span className='link-style'>Twitch.tv</span>/Nyacchii
						</a>
					</div>
					<div className='schedule'>
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
