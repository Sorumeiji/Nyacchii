import { useEffect, useState } from 'react';
const Emotes = ({ pricing }) => {
	console.log(pricing);
	let background = pricing[2].fields.assets;
	let backgroundDetails = pricing[2].fields.details;
	let backgroundPrice = pricing[2].fields.price;

	let character = pricing[3].fields.assets;
	let characterDetails = pricing[3].fields.details;
	let characterPrice = pricing[3].fields.price;

	return (
		<div>
			<div className='pricing__content container flow'>
				<h3>
					Emotes<span className='accent'>.</span>
				</h3>
				<div className='pricing__example_emotes'>
					<div className='pricing__gallery_emotes'>
						<img src={character[0].fields.file.url} />
						<img src={character[1].fields.file.url} />
						<img src={character[2].fields.file.url} />
						<img src={character[4].fields.file.url} />
						<img src={character[5].fields.file.url} />
						<img src={character[6].fields.file.url} />
						<img src={character[7].fields.file.url} />
						<img src={character[8].fields.file.url} />
						<img src={character[9].fields.file.url} />
						<img src={character[10].fields.file.url} />
						<img src={character[11].fields.file.url} />
						<img src={character[12].fields.file.url} />
						<img src={character[13].fields.file.url} />
						<img src={character[14].fields.file.url} />
						<img src={character[15].fields.file.url} />
						<img src={character[16].fields.file.url} />
						<img src={character[17].fields.file.url} />
						<img src={character[18].fields.file.url} />
					</div>
					<div className='pricing__gallery_emotes'>
						<img src={background[0].fields.file.url} />
						<img src={background[1].fields.file.url} />
						<img src={background[2].fields.file.url} />
						<img src={background[4].fields.file.url} />
						<img src={background[5].fields.file.url} />
						<img src={background[6].fields.file.url} />

						<img src={background[8].fields.file.url} />
						<img src={background[9].fields.file.url} />
						<img src={background[10].fields.file.url} />
						<img src={background[11].fields.file.url} />
						<img src={background[12].fields.file.url} />
						<img src={background[13].fields.file.url} />
						<img src={background[14].fields.file.url} />
						<img src={background[15].fields.file.url} />
						<img src={background[16].fields.file.url} />
						<img src={background[17].fields.file.url} />
						<img src={background[18].fields.file.url} />
						<img src={background[19].fields.file.url} />
					</div>
				</div>
				<div className='pricing__details'>
					<div className='pricing__content flow'>
						<div>
							<h4 className='accent-lightgray'>
								Normal<span className='accent'>.</span>
							</h4>
						</div>
						<div>
							<h5 className='accent'>
								$30 <span className='priceFormat accent-lightgray'> usd ( Each )</span>
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
						<div>
							<h5 className='accent'>
								$75 - $120 <span className=' priceFormat accent-lightgray'> usd ( each )</span>
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
