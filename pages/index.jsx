import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import Layout from '../src/components/layout';
import Grid from '../styles/modules/grid.module.scss';
import Home from '../styles/modules/home.module.scss';
import Button from '../styles/modules/button.module.scss';

import Vector from '../img/Vector.svg';

const Homepage = () => {
	return (
		<Layout>
			<section className={`${Home.intro_container}`}>
				<div className={`${Grid.intro_container} ${Grid.container} ${Grid.margin_center}`}>
					<div className={`${Grid.row}`}>
						<div className={`${Grid.col_lg_offset_2} ${Grid.col_lg__6}`}>
							<p>
								Hello, my name is Nyacchii. I am a Full-Time Creative Streamer & Twitch Partner from
								Mexico. Expertise in digital and traditional art.
							</p>
							<div className={`${Button.button_filled}`}>
								<a href='https://www.twitch.tv/nyacchii' target='_blank'>
									WATCH ON TWITCH
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={`${Home.bg}`}>
				<div className={`${Home.intro_container2} ${Grid.container} ${Grid.margin_center}`}>
					<div className={`${Grid.row}`}>
						<div
							className={`${Home.preview} ${Grid.row} ${Grid.col_lg_offset_2} ${Grid.col_lg__2}`}>
							<div className={`${Home.preview_small} `}>
								<Image src='/img/home_01.png' width={130} height={145} />
								<Image src='/img/home_02.png' width={130} height={145} />
							</div>
							<div className={`${Home.preview_large}`}>
								<Image src='/img/home_03.png' width={127} height={298} />
							</div>
						</div>
						<div className={`${Home.preview} ${Grid.col_lg__3}`}>
							<p>
								I mainly draw detailed simple illustrations and create cute emotes with or without
								animation. Check commissions for more information.
							</p>
							<div className={`${Button.button_outline}`}>
								<Link href='/digital'>
									<a>Digital Art</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Homepage;
