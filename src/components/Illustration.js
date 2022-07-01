import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Illustration = ({ pricing }) => {
	let background = pricing[0].fields.assets;
	let backgroundDetails = pricing[0].fields.details;
	let backgroundPrice = pricing[0].fields.price;

	let character = pricing[1].fields.assets;
	let characterDetails = pricing[1].fields.details;
	let characterPrice = pricing[1].fields.price;

	const [toggler, setToggler] = useState(false);

	return (
		<div>
			<div className='pricing__content container'>
				<div className='pricing__example'>
					<div className='pricing__gallery'>
						<img onClick={() => setToggler(!toggler)} src={character[0].fields.file.url} />
						<img src={character[1].fields.file.url} />
						<img src={character[2].fields.file.url} />
						<img src={character[3].fields.file.url} />
					</div>
					<div className='pricing__gallery'>
						<img src={background[0].fields.file.url} />
						<img src={background[1].fields.file.url} />
						<img src={background[2].fields.file.url} />
						<img src={background[2].fields.file.url} />
					</div>
					<FsLightbox toggler={toggler} sources={['https://i.imgur.com/fsyrScY.jpg']} />
				</div>
				<div className='pricing__details'>
					<div className='pricing__content flow'>
						<h4 className='price__subtitle accent-lightgray'>
							Characters<span className='accent'>.</span>
						</h4>
						<ul className='price'>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Headshot:{' '}
									</span>
									$60 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Half Body:{' '}
									</span>
									$90 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Full Body:{' '}
									</span>
									$120 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
						</ul>

						<div>
							<ul className='pricing__info'>
								<li>
									<p>
										Size: <span className='accent-lightgray'>1000px</span>
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
						<h4 className='accent-lightgray'>
							Backgrounds<span className='accent'>.</span>
						</h4>
						<ul className='price'>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Simple:{' '}
									</span>
									$100 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Complex:{' '}
									</span>
									$300 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
						</ul>
						<ul className='pricing__info'>
							<li>
								<p>
									Size: <span className='accent-lightgray'>1000px</span>
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

export default Illustration;
