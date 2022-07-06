import Image from 'next/image';
import Navigation from '../src/components/Navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Index = () => {
	const router = useRouter();
	useEffect(() => {});
	return (
		<>
			<section className='hero'>
				<Navigation />

				<motion.article
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
					className='container flow hero__content'>
					<div>
						<h1>
							Digital Creative & Twitch Partner<span className='accent'>.</span>
						</h1>
					</div>
					<p>
						Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner from
						Mexico. Expertise in digital and traditional art.
					</p>
					<ul>
						<li>
							<a href='https://www.twitch.tv/nyacchii' role='button' target='_blank'>
								Twitch &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitch} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank' role='button'>
								Twitter &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/nyacchii.art/' target='_blank' role='button'>
								Instagram &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faInstagram} />
								</span>
							</a>
						</li>
					</ul>
					<div className='schedule flow'>
						<div>
							<h4>
								Stream Schedule<span className='accent'>.</span>
							</h4>
						</div>
						<ul className='schedule-item'>
							<li>
								<strong className='accent'>+</strong> Monday: Day off
							</li>
							<li>
								<strong className='accent'>+</strong> Tue - Sun: 5pm to 9pm CST (Mexico City time)
							</li>
						</ul>
						<a href='https://www.twitch.tv/nyacchii/schedule' target='_blank'>
							See Full Schedule &nbsp; <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</div>
				</motion.article>
			</section>
		</>
	);
};

export default Index;
