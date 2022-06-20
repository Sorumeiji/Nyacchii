const PriceCard1 = ({ pricing }) => {
	// console.log(pricing);
	// console.log(pricing[0].fields.assets);
	let image = pricing[0].fields.assets;
	let image1 = pricing[3].fields.assets;
	console.log(image);
	return (
		<div>
			{/* <h1>{pricing[0].fields.assets}</h1> */}
			<div className='pricing__content container flow'>
				<h3>
					Illustrations<span className='accent'>.</span>
				</h3>
				<div className='pricing__example container'>
					<div className='pricing__gallery'>
						<img src={image[0].fields.file.url} />
						<img src={image[1].fields.file.url} />
						<img src={image[2].fields.file.url} />
					</div>
					<div className='pricing__gallery'>
						<img src={image1[0].fields.file.url} />
						<img src={image1[1].fields.file.url} />
						<img src={image1[2].fields.file.url} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard1;
