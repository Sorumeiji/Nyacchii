import React from 'react';
import Layout from '../src/components/layout';
import Home from '../styles/modules/home.module.scss';
import Navigation from '../src/components/Navigation';
import Grid from '../styles/modules/grid.module.scss';
import Digital from '../styles/modules/digital.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const digital = () => {
	return (
		<Layout>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div>
							<h1>
								Digital Art<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								Digital drawings are my speciality. They are created in my own cute and simplistic
								style with soft, and warm colors.
							</p>
							<a href='' role='button'>
								Preview Art &nbsp;
								<span className={`${Home['accent']}`}>
									<FontAwesomeIcon icon={faPaintBrush} />
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
								Digital Art Examples<span className={`${Home['accent']}`}>.</span>
							</h3>
							<p>Click on Images for full preview.</p>
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
								Digital Art Pricing<span className={`${Home['accent']}`}>.</span>
							</h3>
							<p>
								<span className={`${Home['accent']}`}>x</span> Bust: $35 USD
							</p>
							<p>
								<span className={`${Home['accent']}`}>x</span> Half-Body: $45 USD
							</p>
							<p>
								<span className={`${Home['accent']}`}>x</span> Full-Body: $55 USD
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
		</Layout>
	);
};

export default digital;
