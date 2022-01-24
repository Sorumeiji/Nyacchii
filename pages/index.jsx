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
import art_01 from '../img/featured/01.png';
import art_02 from '../img/featured/02.png';
import art_03 from '../img/featured/03.png';
import art_04 from '../img/featured/04.png';
import art_05 from '../img/featured/05.png';
import art_06 from '../img/featured/06.png';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const index = () => {
	return (
		<Layout>
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
							<p>
								Click on Images for full preview<span className={`${Home['accent']}`}>.</span>
							</p>
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_01} />
						</div>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_02} />
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_03} />
						</div>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_04} />
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_05} />
						</div>
						<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
							<Image src={art_06} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default index;
