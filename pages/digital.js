import React from 'react';
import Image from 'next/image';

import Home from '../styles/modules/home.module.scss';
import Button from '../styles/modules/button.module.scss';
import Grid from '../styles/modules/grid.module.scss';
import DigitalArt from '../styles/modules/digital.module.scss';

import Navigation from '../src/components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

import bust from '../img/pricing/bust.png';
import halfbody from '../img/pricing/halfbody.png';
import fullbody from '../img/pricing/fullbody.png';

const digital = () => {
	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div>
							<h1>
								Digital Art & Illustrations<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p>
								Digital drawings are my speciality. They are created in my own cute and simplistic
								style with soft, and warm colors.
							</p>
							<div className={`${Button['button']}`}>
								<a href='#digital__featured' role='button'>
									View Digital Pricing &nbsp;
									<span className={`${Home['accent']}`}>
										<FontAwesomeIcon icon={faPaintBrush} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='digital__featured' className={`${DigitalArt['digital__featured']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_xs_8']} ${DigitalArt['pricing__title']}`}>
							<h2>
								Digital Pricing<span className={`${Home['accent']}`}>.</span>
							</h2>
						</div>
					</div>

					<div className={`${Grid['row']} ${DigitalArt['pricing']}`}>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__prices']}`}>
							<div className={`${DigitalArt['pricing__example']}`}>
								<Image src={bust} />
							</div>
						</div>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__text']}`}>
							<h4>
								<span className={`${Home['accent']}`}>x</span> Bust: $35 USD
							</h4>
							<p>
								A bust is a portrait of a character which includes the head, neck, and part of the
								shoulders.
							</p>
						</div>
					</div>

					<div className={`${Grid['row']} ${DigitalArt['pricing']}`}>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__prices']}`}>
							<div className={`${DigitalArt['pricing__example']}`}>
								<Image src={halfbody} />
							</div>
						</div>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__text']}`}>
							<h4>
								<span className={`${Home['accent']}`}>x</span> Half-Body: $45 USD
							</h4>
							<p>
								A half-body is a portrait of a character which is showing only the body from the
								waist up and including the hands.
							</p>
						</div>
					</div>

					<div className={`${Grid['row']} ${DigitalArt['pricing']}`}>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__prices']}`}>
							<div className={`${DigitalArt['pricing__example']}`}>
								<Image src={fullbody} />
							</div>
						</div>
						<div className={`${Grid['col_xs_4']} ${DigitalArt['pricing__text']}`}>
							<h4>
								<span className={`${Home['accent']}`}>x</span> Full-body: $55 USD
							</h4>
							<p>A Full-body is a portrait of a character which is showing the whole body.</p>
						</div>
					</div>

					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col_8_xs']}`}>
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

export default digital;
