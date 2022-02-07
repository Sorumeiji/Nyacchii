import { useEffect, useRef } from 'react';
import Image from 'next/dist/client/image';
import Grid from '../styles/modules/grid.module.scss';
import Home from '../styles/modules/home.module.scss';
import Navigation from '../src/components/Navigation';
import { gsap } from 'gsap/dist/gsap';
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
	const boxRef = useRef();
	const box2Ref = useRef();
	const box3Ref = useRef();

	useEffect(() => {
		gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
	});

	useEffect(() => {
		gsap.fromTo(box2Ref.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
	});

	useEffect(() => {
		gsap.fromTo(box3Ref.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
	});

	return (
		<>
			<section className={`${Home['hero']}`}>
				<Navigation />
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']} ${Home['hero__content']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<h1 ref={boxRef}>
								Digital Creative & Twitch Partner<span className={`${Home['accent']}`}>.</span>
							</h1>
							<p ref={box2Ref}>
								Hello, my name is Nyacchii. I am a Full-Time Creative Streamer and Twitch Partner
								from Mexico. Expertise in digital and traditional art.
							</p>
							<div ref={box3Ref} className={`${Button['button']}`}>
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
							<h3>
								Featured Works<span className={`${Home['accent']}`}>.</span>
							</h3>
						</div>
					</div>
					<div className={`${Grid['row']} ${Home['gallery']}`}>
						<div className={`${Grid['col_xs_8']}`}>
							<div className={`${Grid['grid']}`}>
								<img src='https://picsum.photos/200/300' />
								<img src='https://picsum.photos/200/300' />
								<img src='https://picsum.photos/200/300' />
								<img src='https://picsum.photos/200/300' />
								<img src='https://picsum.photos/200/300' />
								<img src='https://picsum.photos/200/300' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;
