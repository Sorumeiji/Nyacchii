import Image from 'next/image';
import Navigation from '../src/components/Navigation';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Index = () => {
	const router = useRouter();
	return (
		<>
			<section className='hero'>
				<Navigation />
				<article className='container flow'>
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
								Twitch &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitch} />
								</span>
							</a>
						</li>
						<li>
							<a
								href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
								target='_blank'
								role='button'>
								Twitter &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faTwitter} />
								</span>
							</a>
						</li>
						<li>
							<a
								href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
								target='_blank'
								role='button'>
								Instagram &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faInstagram} />
								</span>
							</a>
						</li>
					</ul>
					<div>
						<h4>
							Stream Schedule<span className='accent'>.</span>
						</h4>
					</div>
					<div className='schedule flow'>
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
				</article>
			</section>
		</>
	);
};

export default Index;
