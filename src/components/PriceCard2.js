import { useEffect, useState } from 'react';
const PriceCard2 = ({ pricing }) => {
	return (
		<div>
			<h1>{pricing[1].fields.title}</h1>
		</div>
	);
};

export default PriceCard2;
