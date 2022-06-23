const Illustration = ({ pricing }) => {
	console.log(pricing);
	let background = pricing[0].fields.assets;
	let backgroundDetails = pricing[0].fields.details;
	let backgroundPrice = pricing[0].fields.price;

	let character = pricing[1].fields.assets;
	let characterDetails = pricing[1].fields.details;
	let characterPrice = pricing[1].fields.price;

	//  May be a good idea to make the
	// type lighter for text
	// and leave the price on a heavy weght
	// - Text White and Regular.

	return (
		<div>
			<div className='pricing__content container flow'>
				<h3>
					Illustrations<span className='accent'>.</span>
				</h3>
				<div className='pricing__example'>
					<div className='pricing__gallery'>
						<img src={character[0].fields.file.url} />
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
									$60 <span className='priceFormat accent-lightgray'>usd</span>
								</h5>
							</li>
							<li>
								<h5 className='accent'>
									<span style={{ color: '#fafafa' }} className='openSansRegular'>
										Complex:{' '}
									</span>
									$120 <span className='priceFormat accent-lightgray'>usd</span>
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
