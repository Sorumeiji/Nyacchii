import { useEffect, useState } from 'react';
const Vtuber = ({ pricing }) => {
	return (
		<div className='pricing__content container'>
			<div className='pricing__details'>
				<div className='flow'>
					<h3>
						Soon for purchase<span className='accent'>!</span>
					</h3>
					<p className='openSansBold'>Vtubers / Pngtubers almost here!</p>
					<p className='accent-gray '>
						My prices and speficiations are still being decided upon, with no planned release date!
						I ask on your patience on this. Keep an eye on my{' '}
						<a href='https://twitter.com/nyacchii_art' target='_blank' className='accent'>
							{' '}
							Twitter
						</a>
						,
						<a
							className='accent'
							href='https://discordapp.com/users/250100895084183562'
							target='_blank'>
							{' '}
							Discord
						</a>
						, or{' '}
						<a
							href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
							target='_blank'
							className='accent'>
							{' '}
							Trello waiting list
						</a>{' '}
						for updates.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Vtuber;
