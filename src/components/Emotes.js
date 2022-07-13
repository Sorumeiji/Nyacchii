import { useEffect, useState } from 'react';
const Emotes = ({ normalEmotes, animatedEmotes }) => {
	let animated = animatedEmotes[0].fields.assets;
	let normal = normalEmotes[0].fields.assets;

	return (
		<div>
			<div className='pricing__content container'>
				<div className='pricing__example_emotes emoteContainer'>
					<div className='pricing__gallery_emotes'>
						{normal.map((normal, index) => (
							<img key={index} src={normal.fields.file.url} />
						))}
					</div>
					<div className='pricing__gallery_emotes'>
						{animated.map((animated, index) => (
							<img key={index} src={animated.fields.file.url} />
						))}
					</div>
				</div>
				<div className='pricing__details'>
					<div className='pricing__content flow'>
						<div>
							<h4 className='accent-lightgray'>
								Normal<span className='accent'>.</span>
							</h4>
						</div>
						<div className='price'>
							<h5 className='accent openSansRegular'>
								<span style={{ color: '#fafafa' }} className='openSansLight'>
									Each:{' '}
								</span>
								$30 <span className='priceFormat accent-lightgray'> usd </span>
							</h5>
						</div>
						<div>
							<ul className='pricing__info'>
								<li>
									<p>
										Size: <span className='accent-lightgray'>112px, 56px & 28px</span>
									</p>
								</li>
								<li>
									<p>
										Resolution: <span className='accent-lightgray'>72ppi</span>
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='pricing__content flow'>
						<div>
							<h4 className='accent-lightgray'>
								Animated<span className='accent'>.</span>
							</h4>
						</div>
						<div className='price'>
							<h5 className='accent openSansRegular'>
								<span style={{ color: '#fafafa' }} className='openSansLight'>
									Each:{' '}
								</span>
								$75 - $120 <span className=' priceFormat accent-lightgray'> USD </span>
							</h5>
						</div>
						<ul className='pricing__info'>
							<li>
								<p>
									Twitch: <span className='accent-lightgray'>112px at 30fps</span>
								</p>
							</li>
							<li>
								<p>
									Discord: <span className='accent-lightgray'>56px at 60fps</span>
								</p>
							</li>
							<li>
								<p>
									Thumbnail: <span className='accent-lightgray'>112px, 56px & 28px</span>
								</p>
							</li>
							<li>
								<p>
									Resolution: <span className='accent-lightgray'>72ppi</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Emotes;
