import React, { useRef } from 'react';
import ImageReveal from './ImageReveal';
import Image from '../assets/metal-work.png';
import { useGSAP } from '@gsap/react';
import useWindowDimensions from './useWindowDimensions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ timeline }) => {
	const container = useRef();
	const { width } = useWindowDimensions();

	useGSAP(() => {
		timeline && width > 900
			? timeline
					.to('.about-heading-clone', {
						width: '100%',
						delay: '-0.5',
					})
					.fromTo(
						'.about-text-para',
						{
							opacity: 0,
						},
						{ opacity: 1, stagger: 0.3, delay: '-0.5' },
						'a1'
					)
					.from(
						'.about-text-para',
						{ y: '100px', stagger: 0.1, delay: '-0.5' },
						'a1'
					)
			: timeline
					.to('.about-heading-clone', {
						width: '100%',
						delay: -1.5,
					})
					.fromTo(
						'.about-text-para',
						{
							opacity: 0,
						},
						{ opacity: 1, stagger: 0.1, delay: '-1', ease: 'power3.inOut' }
					);
		ScrollTrigger.refresh();
	}, [timeline, container]);
	return (
		<div className='about-wrapper' ref={container}>
			<div className='heading-wrapper'>
				<div className='heading-container'>
					<h1 className='heading'>About us</h1>
					<h1 className='heading heading-clone about-heading-clone'>
						About us
					</h1>
				</div>
			</div>
			<div className='about-container'>
				<div className='about-text'>
					<p className='about-text-para'>
						Krad Global, stands as the premier supplier and distributor of a
						diverse range of{' '}
						<span>
							Engineering, Industrial and Construction products, including Steel
							Pipes, Valves, Fittings, Flanges, Gaskets, Fasteners, Casing &
							Tubing, Scaffolding, Structural Steel, Marine Products, Electrical
							& Instruments Cables and Products and more.
						</span>{' '}
						We are a multinational corporation headquartered in{' '}
						<span>Dubai</span> and Present in <span>USA, India</span> also, we
						serve a wide spectrum of industries such as Oil & Gas,
						Petrochemical, Power, Water, and construction sectors.
					</p>
					<p className='about-text-para'>
						We take pride in offering high-quality products sourced from
						approved manufacturers globally. Our strategic partnerships with
						these manufacturers enable us to maintain superior pricing and
						stringent quality control, giving us a competitive edge in the
						market.
					</p>
					<p className='about-text-para'>
						At Krad Global, our reputation is built on our commitment to
						excellence in quality, timely delivery, and competitive pricing.
						Beyond being suppliers, our team of highly qualified personnel and
						extensive industry experience allows us to collaborate closely with
						EPC contractors, end users, and traders. This collaborative approach
						ensures we deliver tailored solutions that meet and exceed our
						clients' specific requirements.
					</p>
					<p className='about-text-para'>
						Whether you're looking for reliable sourcing of industrial materials
						or seeking strategic supply chain solutions, Krad Global is your
						trusted partner dedicated to delivering results that drive success
						in your projects.
					</p>
				</div>
				<div className='about-img-container'>
					<ImageReveal revealImage={Image} timeline={timeline} />
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
