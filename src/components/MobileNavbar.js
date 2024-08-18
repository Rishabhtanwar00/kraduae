import React, { useRef } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import Logo from '../assets/KU.png';
import Hamburger from '../assets/hamburger.svg';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DropdownSVG from '../assets/notchupper.svg';

gsap.registerPlugin(useGSAP);

const arr = [
	{
		id: 1,
		name: 'Home',
		to: '/',
	},
	{
		id: 2,
		name: 'Our Products',
		data: [
			{
				id: 1,
				name: 'Piping Solutions',
				subdata: [
					{
						id: '01',
						name: 'Pipes',
						to: '/products/pipes',
					},
					{
						id: '02',
						name: 'Fittings',
						to: '/products/fittings',
					},
					{
						id: '03',
						name: 'Flanges',
						to: '/products/flanges',
					},
					{
						id: '04',
						name: 'Valves',
						to: '/products/valves',
					},
					{
						id: '05',
						name: 'Fastners',
						to: '/products/fastners',
					},
					{
						id: '06',
						name: 'Gaskets',
						to: '/products/gaskets',
					},
				],
			},
			{
				id: 2,
				name: 'Scaffolding Products',
				to: '/products/scaffolding-product',
			},
			{
				id: 3,
				name: 'Plates & Structural Steel',
				to: '/products/plates-structural-steel',
			},
			{
				id: 4,
				name: 'Industrial Safety Products',
				to: '/products/safety-product',
			},

			{
				id: 5,
				name: 'Industrial Machines & Tools',
				to: '/products/tools-machines',
			},
			{
				id: 6,
				name: 'Chain Link Fence System',
				to: '/products/chain-link-fence',
			},
		],
	},

	{
		id: 3,
		name: 'Quality & Safety',
		to: '/quality-safety',
	},
	{
		id: 4,
		name: 'Contact',
		to: '/contact-us',
	},
];

const MobileNavbar = () => {
	const container = useRef();

	const { contextSafe } = useGSAP({ scope: container });

	const handleClick = contextSafe(() => {
		gsap.to('.mobile-menu-bg', {
			top: '0',
			ease: 'power4.inOut',
			duration: 1,
		});
		gsap.to('.menu-links', {
			top: '0',
			ease: 'power4.inOut',
			duration: 1,
			delay: 0.5,
		});
	});
	const handleClose = contextSafe(() => {
		gsap.to('.menu-links', {
			top: '-150vh',
			ease: 'power4.inOut',
			duration: 1,
		});
		gsap.to('.mobile-menu-bg', {
			top: '-150vh',
			ease: 'power4.inOut',
			duration: 1,
			delay: 0.5,
		});
	});

	return (
		<nav className='mobile-navbar flex-container' ref={container}>
			<div className='nav-slider-container flex-container'>
				<div className='nav-slider'>
					<p>
						<span className='dot'></span>
						&nbsp;&nbsp;&nbsp;KRAD GLOBAL&nbsp;
						<span className='dot'></span>
						&nbsp;&nbsp;&nbsp;KRAD GLOBAL&nbsp;
						<span className='dot'></span>
						&nbsp;&nbsp;&nbsp;KRAD GLOBAL&nbsp;
						<span className='dot'></span>
					</p>
				</div>
			</div>
			<div className='mobile-nav-container flex-container'>
				<Link to='/'>
					<img src={Logo} alt='' className='logo' />
				</Link>
				<button onClick={handleClick}>
					<img src={Hamburger} alt='' className='hamburger' />
				</button>
			</div>
			<div className='mobile-nav-buttons flex-container'>
				<button
					className='nav-button'
					onClick={() => window.open('tel:+971542919259')}
				>
					<i>
						<BiSolidPhoneCall />
					</i>
					971542919259
				</button>
				<button
					className='nav-button nav-button1'
					onClick={() =>
						window.open(
							'mailto:corpbiz@kraduae.com?subject=Subject&body=Body%20goes%20here'
						)
					}
				>
					<i>
						<HiMail />
					</i>
					corpbiz@kraduae.com
				</button>
			</div>
			<div className='mobile-menu'>
				<div className='mobile-menu-bg'></div>
				<div className='menu-links flex-container'>
					<button className='close-button' onClick={handleClose}>
						CLOSE
					</button>
					<ul className='links'>
						{arr.map((navlink, index) =>
							navlink.id === 2 ? (
								<li className='dropdown link' key={navlink.id}>
									{navlink.name}

									<div className='dropdown-content'>
										<img src={DropdownSVG} alt='' className='dropdown-svg' />
										{navlink.data.map((datalink) =>
											datalink.id === 1 ? (
												<div className='dropdown1' key={datalink.id}>
													{datalink.name}
													<div className='dropdown-content1'>
														{datalink.subdata.map((sublink) => (
															<Link
																key={sublink.id}
																to={sublink.to}
																style={{ textDecoration: 'none' }}
																onClick={handleClose}
															>
																{sublink.name}
															</Link>
														))}
													</div>
												</div>
											) : (
												<Link
													key={datalink.id}
													to={datalink.to}
													style={{ textDecoration: 'none' }}
													onClick={handleClose}
												>
													{datalink.name}
												</Link>
											)
										)}
									</div>
								</li>
							) : (
								<Link
									key={navlink.id}
									to={navlink.to}
									className='link'
									style={{ textDecoration: 'none' }}
									onClick={handleClose}
								>
									<li>{navlink.name}</li>
								</Link>
							)
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MobileNavbar;
