import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import useWindowDimensions from './useWindowDimensions';

const ImageReveal = ({ timeline, revealImage }) => {
	let container = useRef();
	let image = useRef();
	const { width } = useWindowDimensions();
	useGSAP(() => {
		timeline && width > 900
			? timeline
					.to(container, {
						visibility: 'visible',
						delay: 1,
					})
					.to('.img-container-clone', {
						width: '0%',
						ease: 'power3.inOut',
					})
					.from(image, {
						scale: 1.6,
						ease: 'power3.inOut',
					})
			: timeline
					.to(container, {
						visibility: 'visible',
						delay: 0.5,
					})
					.to('.img-container-clone', {
						width: '0%',
						ease: 'power3.inOut',
					})
					.from(image, {
						scale: 1.6,
						ease: 'power3.inOut',
					});
	}, [container, timeline]);

	return (
		<>
			<div className='imgreveal-container' ref={(el) => (container = el)}>
				<div className='img-container'>
					<img src={revealImage} alt='' ref={(el) => (image = el)} />
					<div className='img-container-clone'></div>
				</div>
			</div>{' '}
		</>
	);
};

export default ImageReveal;
