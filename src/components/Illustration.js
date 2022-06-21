const Illustration = ({ pricing }) => {
	console.log(pricing);
	let background = pricing[0].fields.assets;
	let backgroundDetails = pricing[0].fields.details;
	let backgroundPrice = pricing[0].fields.price;

	let character = pricing[1].fields.assets;
	let characterDetails = pricing[1].fields.details;
	let characterPrice = pricing[1].fields.price;

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
						<h4 className='price__subtitle'>
							Characters<span className='accent'>.</span>
						</h4>
						<ul className='price'>
							<li>
								<h6>
									Headshot: <span className='accent'>$60</span> USD
								</h6>
							</li>
							<li>
								<h6>
									Half Body: <span className='accent'>$90</span> USD
								</h6>
							</li>
							<li>
								<h6>
									Full Body: <span className='accent'>$120</span> USD
								</h6>
							</li>
						</ul>

						<div>
							<ul className='pricing__info'>
								<li>
									<p className='accent-gray'>{characterDetails[0]}</p>
								</li>
								<li>
									<p className='accent-gray'>{characterDetails[1]}</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='pricing__content flow'>
						<h4>
							Backgrounds<span className='accent'>.</span>
						</h4>
						<h6>
							Starting at <span className='accent'>$60</span> USD
						</h6>
						<ul className='pricing__info'>
							<li>
								<p className='accent-gray'>{backgroundDetails[0]}</p>
							</li>
							<li>
								<p className='accent-gray'>{backgroundDetails[1]}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Illustration;
