import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<div className='container row'>
			<aside className='col-1'>
				<div className='lang'>
					<Link href='/'>
						<a>Español</a>
					</Link>
				</div>
				<div>
					<Link href='/'>
						<a>
							<h2>Logo</h2>
						</a>
					</Link>
				</div>

				<nav className='navi'>
					<ul>
						<li>
							<Link href='/portfolio'>
								<a>Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href='/commissions'>
								<a>Commissions</a>
							</Link>
							<ul className='navi__comissions'>
								<li>
									<Link href='/commissions/emotes'>
										<a>Emotes</a>
									</Link>
								</li>
								<li>
									<Link href='/commissions/digital'>
										<a>Digital</a>
									</Link>
								</li>
								<li>
									<Link href='/commissions/terms'>
										<a>Terms</a>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<a href='https://store.nyacchii.com/' target='_blank'>
								Store
							</a>
						</li>
						<li>
							<Link href='/contact'>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
			</aside>
			<main className='col-5'>{children}</main>
		</div>
	);
};

export default Layout;
