import { useEffect, useRef } from 'react';
import Image from 'next/dist/client/image';
import { gsap } from 'gsap/dist/gsap';

import Grid from '../styles/modules/grid.module.scss';
import Home from '../styles/modules/home.module.scss';
import Button from '../styles/modules/button.module.scss';

import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import art_01 from '../img/featured/01.png';
import art_02 from '../img/featured/02.png';
import art_03 from '../img/featured/03.png';
import art_04 from '../img/featured/04.png';
import art_05 from '../img/featured/05.png';
import art_06 from '../img/featured/06.png';

const index = () => {
	return (
		<>
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
							<div className={`${Button['button']}`}>
								<a href='#hero__featured' role='button'>
									Preview My Art &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faHeart} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='hero__featured' className={`${Home['hero__featured']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<h2>
								Featured Works<span className={`${Home['accent']}`}>.</span>
							</h2>
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<div className={`${Grid['row']} ${Home['gallery__container']}`}>
								<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']} ${Home['gallery__col']}`}>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_01} />
									</div>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_04} />
									</div>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_05} />
									</div>
								</div>
								<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']} ${Home['gallery__col']}`}>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_02} />
									</div>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_03} />
									</div>
									<div className={`${Home['gallery__item']}`}>
										<Image src={art_06} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;
