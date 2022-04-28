import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Nav from '../../styles/modules/nav.module.scss';
import Logo from '../../img/logo.svg';
import Image from 'next/image';

const Navigation = () => {
	const buttonRef = useRef();
	const navRef = useRef();
	const router = useRouter();

	useEffect(() => {
		buttonRef.current.addEventListener('click', toggle);
	}, []);

	function toggle(event) {
		const visibilty = navRef.current.getAttribute('data-visible');
		if (visibilty === 'false') {
			navRef.current.setAttribute('data-visible', true);
			buttonRef.current.setAttribute('aria-expanded', true);
		} else {
			navRef.current.setAttribute('data-visible', false);
			buttonRef.current.setAttribute('aria-expanded', false);
		}
	}
	return (
		<section className='navigation'>
			<div className='navigation-container'>
				<div className={`${Nav.Logo}`}>
					<Link href='/'>
						<a>
							<Image src={Logo} />
						</a>
					</Link>
				</div>

				<button
					className={`${Nav.mobile_nav_toggle}`}
					aria-controls='primary_navigation'
					ref={buttonRef}
					aria-expanded='false'>
					<span className={`${Nav.sr_only}`}>menu</span>
				</button>

				<nav>
					<ul
						id='primary_navigation'
						data-visible='false'
						ref={navRef}
						className={`${Nav.primary_navigation}`}>
						<li>
							<Link href='/'>
								<a className={router.pathname == '/' ? `${Nav.active}` : ''}>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/commission'>
								<a className={router.pathname == '/commission' ? `${Nav.active}` : ''}>
									Commission
								</a>
							</Link>
						</li>
						<li>
							<a href='https://www.instagram.com/nyacchii.art/' target='_blank'>
								Portfolio
							</a>
						</li>
						<li>
							<a href='https://store.streamelements.com/nyacchii' target='_blank'>
								Shop
							</a>
						</li>
						<li>
							<Link href='/contact'>
								<a className={router.pathname == '/contact' ? `${Nav.active}` : ''}>Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default Navigation;
