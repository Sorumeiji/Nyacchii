import Image from 'next/image';
import Navigation from '../src/components/Navigation';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Index = () => {
	const router = useRouter();
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
							<a href='#prices' role='button'>
								View my Prices &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitch} />
								</span>
							</a>
						</li>
						<li>
							<a
								href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
								target='_blank'
								role='outlineButton'>
								Waiting List &nbsp;
								<span>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</li>
					</ul>
				</article>
			</section>

			<section id='featured' className='featured'>
				<article className='container'>
					<div className='schedule'>
						<a className='twitch-link' href='https://www.twitch.tv/nyacchii' target='_blank'>
							<span className='link-style'> Visit Twitch.tv</span>/Nyacchii
						</a>
						<ul className='schedule-item'>
							<li>
								<strong className='accent'>+</strong> Monday: Day off
							</li>
							<li>
								<strong className='accent'>+</strong> Tue - Sun: 5pm to 9pm CST (Mexico City time)
							</li>
						</ul>
					</div>

					<a href='https://www.twitch.tv/nyacchii/schedule' target='_blank'>
						See Full Schedule &nbsp; <FontAwesomeIcon icon={faArrowRight} />
					</a>
				</article>
			</section>
		</>
	);
};

export default Index;
