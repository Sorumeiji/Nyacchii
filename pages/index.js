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

				<article className='container flow hero__content'>
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
						}}>
						<h1>
							Digital Creative & Twitch Partner<span className='accent'>.</span>
						</h1>
					</motion.div>
					<motion.p
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
									delay: 1,
								},
							},
						}}>
						Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner from
						Mexico. Expertise in digital and traditional art.
					</motion.p>
					<motion.ul
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
									delay: 1.5,
								},
							},
						}}>
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
					</motion.ul>

					<motion.div
						className='schedule flow'
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
									delay: 1.5,
								},
							},
						}}>
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
					</motion.div>
				</article>
			</section>
		</>
	);
};

export default Index;
