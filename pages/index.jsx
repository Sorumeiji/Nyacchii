import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import Layout from '../src/components/layout';
import Grid from '../styles/modules/grid.module.scss';
import Home from '../styles/modules/home.module.scss';
import Nav from '../styles/modules/nav.module.scss';
import Navigation from '../src/components/Navigation';
import Button from '../styles/modules/button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Vector from '../img/Vector.svg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const index = () => {
	return (
		<Layout>
			<div className={`${Nav['grey_line']}`}>&nbsp;</div>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<h1>
								Digital Creative & Twitch Partner<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner
								from Mexico. Expertise in digital and traditional art.
							</p>
							<a href='' role='button'>
								Featured Art &nbsp;
								<span className={`${Home['accent']}`}>
									<FontAwesomeIcon icon={faHeart} />
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className={`${Home['hero__featured']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div>
						<p>Click on Images for full preview.</p>
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
				</div>
			</section>
		</Layout>
	);
};

export default index;
