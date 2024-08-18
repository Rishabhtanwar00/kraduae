import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const contactData = [
	{
		id: 1,
		title: 'Call us',
		text: '971542919259',
		icon: <BsFillTelephoneFill />,
		url: 'tel:+971542919259',
		color: 'blue',
	},
	{
		id: 2,
		title: 'Mail',
		text: 'corpbiz@kraduae.com',
		icon: <GrMail />,
		url: 'mailto:corpbiz@kraduae.com?subject=Subject&body=Body%20goes%20here',
		color: 'red',
	},
	{
		id: 3,
		title: 'MOHAMED HAMED SAIF ALRUMHI BUILDING',
		text: 'Office Number B 1-106, Al Mutheena, Deira Dubai - UAE',
		icon: <FaMapMarkerAlt />,
		url: 'https://maps.app.goo.gl/5cSTFww6Lj9H2DFv5',
		color: 'green',
	},
];

const CustomLink = ({ url, color, icon, title, text }) => {
	const handleClick = () => {
		window.open(`${url}`);
	};
	return (
		<button
			onClick={handleClick}
			className='footer-link'
			style={{ '--color': `${color}` }}
		>
			<div className='footer-link-icon' style={{ '--color': `${color}` }}>
				<i>{icon}</i>
			</div>
			<div className='footer-link-text'>
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</button>
	);
};

export default CustomLink;
