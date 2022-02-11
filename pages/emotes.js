import React from 'react';
import Image from 'next/image';

import Home from '../styles/modules/home.module.scss';
import Button from '../styles/modules/button.module.scss';
import Grid from '../styles/modules/grid.module.scss';
import Emote from '../styles/modules/emotes.module.scss';

import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGrinSquintTears, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

import gooey_01 from '../img/normal/gooey1.png';
import gooey_02 from '../img/normal/gooey2.png';
import gooey_03 from '../img/normal/gooey3.png';
import proxy_01 from '../img/normal/proxy1.png';
import proxy_02 from '../img/normal/proxy2.png';
import proxy_03 from '../img/normal/proxy3.png';
import millie_01 from '../img/normal/millie1.png';
import millie_02 from '../img/normal/millie2.png';
import millie_03 from '../img/normal/millie3.png';

import gooeya_01 from '../img/animated/inochi1.gif';
import gooeya_02 from '../img/animated/inochi2.gif';
import proxya_01 from '../img/animated/proxy1.gif';
import proxya_02 from '../img/animated/proxy2.gif';
import nyacchii_01 from '../img/animated/nyacchii1.gif';
import nyacchii_021 from '../img/animated/nyacchii2.gif';
import panda_01 from '../img/animated/panda1.gif';
import panda_02 from '../img/animated/panda2.gif';

const emotes = () => {
	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div>
							<h1>
								Twitch Emotes & Animations<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								I offer static and animated emotes. Each emote goes through a process of detailed
								work, from initial sketch, to the final drawing.
							</p>
							<div className={`${Button['button']}`}>
								<a href='#emote__featured' role='button'>
									Emotes Pricing &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faGrinSquintTears} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='emote__featured' className={`${Emote['emote__featured']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<h2>
								Emotes Pricing<span className={`${Home['accent']}`}>.</span>
							</h2>
						</div>
					</div>
					<div className={`${Grid['row']} ${Emote['emote__container']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<div className={`${Grid['row']}`}>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={gooey_01} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={gooey_02} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={gooey_03} />
								</div>
							</div>
							<div className={`${Grid['row']}`}>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={proxy_01} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={proxy_02} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={proxy_03} />
								</div>
							</div>
							<div className={`${Grid['row']}`}>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={millie_01} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={millie_02} />
								</div>
								<div className={`${Grid['col_xs_1']}`}>
									<Image src={millie_03} />
								</div>
							</div>
						</div>
					</div>

					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<div className={`${Button['button']}`}>
								<a href='#hero__featured' role='button'>
									Get in touch &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faArrowRight} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default emotes;
