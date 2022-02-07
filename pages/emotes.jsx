import React from 'react';
import Layout from '../src/components/layout';
import Home from '../styles/modules/home.module.scss';
import Navigation from '../src/components/Navigation';
import Grid from '../styles/modules/grid.module.scss';
import Digital from '../styles/modules/digital.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGrinSquintTears, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const emotes = () => {
	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div>
							<h1>
								Twitch Emotes<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								I offer static and animated emotes. Each emote goes through a process of detailed
								work, from initial sketch, to the final drawing.
							</p>
							<a href='' role='button'>
								See Emotes &nbsp;
								<span className={`${Home['accent']}`}>
									<FontAwesomeIcon icon={faGrinSquintTears} />
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className={`${Digital['digital_content']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_8_xs']}`}>
							<h3>
								Twitch Emote Examples<span className={`${Home['accent']}`}>.</span>
							</h3>
						</div>
					</div>

					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/870/580/380' />
						</div>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/872/580/380' />
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/874/580/380' />
						</div>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/876/580/380' />
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/878/580/380' />
						</div>
						<div className={`${Grid['col_xs_4']}`}>
							<img src='https://picsum.photos/id/880/580/380' />
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_8_xs']}`}>
							<h3>
								Twitch Emotes Pricing<span className={`${Home['accent']}`}>.</span>
							</h3>
							<p>
								<span className={`${Home['accent']}`}>x</span> Static Emotes: $25 USD/ PER
							</p>
							<p>
								<span className={`${Home['accent']}`}>x</span> Animated Emotes: $75 - 115 USD / PER
							</p>
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_8_xs']}`}>
							<a href='#' role='button'>
								Contact Me &nbsp; <FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default emotes;
