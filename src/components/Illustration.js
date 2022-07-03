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

	function toString(sample) {
		return sample + '';
	}

	console.log(character[1].fields.file.url);

	return (
		<div>
			<div className='pricing__content container'>
				<div className='pricing__example'>
					<div className='pricing__gallery'>
						<img onClick={() => setToggler(!toggler)} src={character[0].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={character[1].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={character[2].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={character[3].fields.file.url} />
					</div>
					<div className='pricing__gallery'>
						<img onClick={() => setToggler(!toggler)} src={background[0].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={background[1].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={background[2].fields.file.url} />
						<img onClick={() => setToggler(!toggler)} src={background[2].fields.file.url} />
					</div>
					<FsLightbox
						toggler={toggler}
						sources={[
							'https://images.ctfassets.net/wpd16o1h1n58/17Ty2XrG1wn0No5EPeYrQ1/ddb4fe5a5cff735b914943cd3b1d4dab/01_72ppi_-_Watermark.png',
							'https://images.ctfassets.net/wpd16o1h1n58/14nNpDKrlGoSQUws4gXvZU/01205409dfefe57d81c0c428281ffde0/Doushin_002_72ppi_-_Watermark.png',
							'https://images.ctfassets.net/wpd16o1h1n58/2GkdeW5SFE48HVbC91HoZ9/2bf81ac869b38e295fa4bde9d60d9375/VENTI_002_POST.png',
							'https://images.ctfassets.net/wpd16o1h1n58/2koV2oPMdRhXSpHuFiEYEe/02f66bf301df96dd934a2e75ee07a9fa/HEXTURNAL_002_72ppi_-_Watermark.png',
							'https://images.ctfassets.net/wpd16o1h1n58/5wJuWLOFJPSwKp0WTMOuse/3f3860990d387b997fb1a1074c6d84dd/KITARG_001_72ppi_-_Watermark.png',
							'https://images.ctfassets.net/wpd16o1h1n58/4FgSbXKXg2P2fV7aNMe7Ew/7005347108e77fc8294e5c2e76160ff2/VENTI_002_72ppi_-_Watermark.png',
							'https://images.ctfassets.net/wpd16o1h1n58/7tCC2m96lxjd5rU7iNhwce/7fa5b3aeee0412f456b15c732c3c9627/INOCHI_001_72ppi_-_Watermark.png',
						]}
					/>
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
