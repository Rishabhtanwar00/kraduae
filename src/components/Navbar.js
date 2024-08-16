import { Link } from 'react-router-dom';
import Logo from '../assets/KU.png';
import { HiMail } from 'react-icons/hi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import DropdownSVG from '../assets/notchupper.svg';

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

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/' className='nav-logo flex-container'>
				<img src={Logo} alt='' />
			</Link>
			<div className='nav-container'>
				<div className='nav-slider-container flex-container'>
					<div className='nav-slider'>
						<p>
							Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp; Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp; Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp;
						</p>
						<p>
							Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp; Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp; Timings : Mon - Sat 8.00 - 18.00 Sunday{' '}
							<span className='status'>CLOSED</span>{' '}
							<span className='dot'></span>
							&nbsp;&nbsp;&nbsp;
						</p>
					</div>
				</div>

				<div className='menu flex-container'>
					<ul className='links'>
						{arr.map((navlink) =>
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
								>
									<li>{navlink.name}</li>
								</Link>
							)
						)}
						<button
							className='nav-button'
							onClick={() => window.open('tel:+18881234567')}
						>
							<i>
								<BiSolidPhoneCall />
							</i>
							1-888-123-4567
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
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
