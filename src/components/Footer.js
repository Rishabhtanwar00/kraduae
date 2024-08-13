import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink, { contactData } from './CustomLink';
import { TbArrowBarRight } from 'react-icons/tb';

const ServicesData = [
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
	// {
	// 	id: '04',
	// 	name: 'Gaskets',
	// 	to: '/products/gaskets',
	// },
	// {
	// 	id: '05',
	// 	name: 'Valves',
	// 	to: '/products/valves',
	// },
];
const OtherLinksData = [
	{
		id: '01',
		name: 'Contact us',
		to: '/contact-us',
	},
	{
		id: '02',
		name: 'Quality & Safety',
		to: '/quality-safety',
	},
	{
		id: '03',
		name: 'Home',
		to: '/',
	},
];

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-top flex-container'>
				<div className='footer-top-left'>
					<h1>KRAD GLOBAL</h1>
					<h6>General Trading</h6>
					{/* <p>
						We are capable to supply a wide range of fittings like Elbow, Tee,
						Reducer, Coupling, Nipples, Union, Weldolet, Sockolet, Plug, Bend,
						Barred Tee, Threadolet and Cap etc.
					</p> */}
				</div>
				<div className='flex-container footer-top-middle-wrapper'>
					<div className='footer-top-middle'>
						<h1>Products</h1>
						<div className='flex-container'>
							<div className='footer-services'>
								{ServicesData.map((service) => (
									<Link
										to={service.to}
										key={service.id}
										className='footer-service'
									>
										<i>
											<TbArrowBarRight />
										</i>
										<p>{service.name}</p>
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className='footer-top-middle'>
						<h1>Other Links</h1>
						<div className='flex-container'>
							<div className='footer-services'>
								{OtherLinksData.map((link) => (
									<Link to={link.to} key={link.id} className='footer-service'>
										<i>
											<TbArrowBarRight />
										</i>
										<p>{link.name}</p>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='footer-top-right'>
					<h1>Contact Us</h1>
					<div className='footer-contact flex-container'>
						{contactData.map((item, index) => (
							<CustomLink
								key={index}
								title={item.title}
								text={item.text}
								url={item.url}
								icon={item.icon}
								color={item.color}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				© 2024 Krad Global, LCC. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
