import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Layout({ children }) {
	return (
		<>
			<div className='layout'>{children}</div>
			<footer className='footer'>
				<div className='container'>
					<div className='copy_lang'>
						<p>&copy; NYACCHII. 2022. All Rights Reserved.</p>
					</div>

					<ul className='social'>
						<li>
							<a href='https://www.twitch.tv/nyacchii' target='_blank'>
								<FontAwesomeIcon icon={faTwitch} />
							</a>
						</li>
						<li>
							<a href='https://twitter.com/nyacchii_art' target='_blank'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/nyacchii.art/?hl=en' target='_blank'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href='https://www.youtube.com/channel/UC8QRmNyX61s10GytF0CpOgw' target='_blank'>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Layout;
