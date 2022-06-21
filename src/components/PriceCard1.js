const PriceCard1 = ({ pricing }) => {
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
						<h4>
							Characters<span className='accent'>.</span>
						</h4>
						<h5 className='accent'>
							{characterPrice} <span className='accent-gray'>( each )</span>
						</h5>
						<div>
							<ul>
								<li>{characterDetails[2]}</li>
								<li>{characterDetails[3]}</li>
								<li>{characterDetails[4]}</li>
							</ul>
							<ul>
								<li>{characterDetails[0]}</li>
								<li>{characterDetails[1]}</li>
							</ul>
						</div>
					</div>
					<div className='pricing__content flow'>
						<h4>
							Backgrounds<span className='accent'>.</span>
						</h4>
						<h5 className='accent'>
							{backgroundPrice} <span className='accent-gray'>( each )</span>
						</h5>
						<ul>
							<li>
								<p>{backgroundDetails[0]}</p>
							</li>
							<li>
								<p>{backgroundDetails[1]}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard1;
