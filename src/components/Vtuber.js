import { useEffect, useState } from 'react';
const Vtuber = ({ pricing }) => {
	let background = pricing[0].fields.assets;
	let backgroundDetails = pricing[0].fields.details;
	let backgroundPrice = pricing[0].fields.price;

	let character = pricing[1].fields.assets;
	let characterDetails = pricing[1].fields.details;
	let characterPrice = pricing[1].fields.price;

	return (
		<div>
			<div className='pricing__content container'>
				{/* <h3>
					Vtubers<span className='accent'>.</span>
				</h3> */}

				<div className='pricing__details'>
					<div>
						<p>
							Vtubers / Pngtubers are coming soon! Prices and speficiations are still being decided
							upon, with no planned release date. I ask on your patience on this. Keep an eye on my
							Twitter, Discord, or Trollo waiting list for updates.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vtuber;
