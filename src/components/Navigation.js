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

                        <Image src={Logo} />

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
<<<<<<< HEAD
							<Link href='/' className={router.pathname == '/' ? `${Nav.active}` : ''}>
=======
							<Link className={router.pathname == '/' ? `${Nav.active}` : ''} href='/'>
>>>>>>> 8068b67a33ffb7db44c0470a32ae88f4e2a63eb4
								Home
							</Link>
						</li>
						<li>
							<Link
<<<<<<< HEAD
                                href='/commission'
                                className={router.pathname == '/commission' ? `${Nav.active}` : ''}>
								
									Commission
								
=======
								className={router.pathname == '/commission' ? `${Nav.active}` : ''}
								href='/commission'>
								Commission
>>>>>>> 8068b67a33ffb7db44c0470a32ae88f4e2a63eb4
							</Link>
						</li>
						<li>
							<Link
<<<<<<< HEAD
                                href='/portfolio'
                                className={router.pathname == '/portfolio' ? `${Nav.active}` : ''}>
=======
								className={router.pathname == '/portfolio' ? `${Nav.active}` : ''}
								href='/portfolio'>
>>>>>>> 8068b67a33ffb7db44c0470a32ae88f4e2a63eb4
								Portfolio
							</Link>
						</li>
						<li>
<<<<<<< HEAD
							<Link
                                href='/shop'
                                className={router.pathname == '/shop' ? `${Nav.active}` : ''}>
=======
							<Link className={router.pathname == '/shop' ? `${Nav.active}` : ''} href='/shop'>
>>>>>>> 8068b67a33ffb7db44c0470a32ae88f4e2a63eb4
								Shop
							</Link>
						</li>
						<li>
							<Link
<<<<<<< HEAD
                                href='/contact'
                                className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
=======
								className={router.pathname == '/contact' ? `${Nav.active}` : ''}
								href='/contact'>
>>>>>>> 8068b67a33ffb7db44c0470a32ae88f4e2a63eb4
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</section>
    );
};

export default Navigation;
