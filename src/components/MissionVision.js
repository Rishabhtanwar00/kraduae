import BackgroundSVG from '../assets/wave.svg';
import { useGSAP } from '@gsap/react';
import useWindowDimensions from '../components/useWindowDimensions';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const MissionVision = ({ timeline }) => {
	const { width } = useWindowDimensions();
	let container = useRef();
	
	useGSAP(() => {
		timeline && width > 900
			? timeline
					.to('.mission-heading-clone', {
						width: '100%',
						delay: 0.5,
					})
					.fromTo(
						'.mission-desc',
						{
							opacity: 0,
						},
						{ opacity: 1, ease: 'power1.out', delay: 0.2, },
						'a2'
					)
					.from(
						'.mission-desc',
						{
							y: '100px',
							ease: 'power1.out',
							delay: 0.2,
						},
						'a2'
					)
					.from(
						'.vision-left',
						{
							transform: 'translateX(100%)',
							ease: 'power1.inOut',
						},
						'a3'
					)
					.from(
						'.vision-right',
						{
							scale: 0,
							ease: 'power1.inOut',
						},
						'a3'
					)
			: timeline
					.to('.mission-heading-clone', {
						width: '100%',
					})
					.fromTo(
						'.mission-desc',
						{
							opacity: 0,
						},
						{ opacity: 1, ease: 'power1.out', delay: -0.5 }
					)
					.from('.vision-right', {
						scale: 0,
						ease: 'power3.inOut',
					});
		ScrollTrigger.refresh();
	}, [timeline, container]);

	return (
		<div
			className='mission-section flex-container'
			ref={(el) => (container = el)}
		>
			<img className='mission-svg' src={BackgroundSVG} alt='' />
			<div className='heading-wrapper'>
				<div className='heading-container'>
					<h1 className='heading'>Our Mission</h1>
					<h1 className='heading heading-clone mission-heading-clone'>
						Our Mission
					</h1>
				</div>
			</div>
			<div className='mission-cards'>
				<div className='mission-card'>
					<h1 className='mission-title'>
						Building <br /> Relationships
					</h1>
					<p className='mission-desc'>
						We prioritize forging meaningful connections with our clients,
						partners, and communities. By understanding their needs and
						aspirations, we foster long-lasting relationships built on mutual
						respect and collaboration.
					</p>
				</div>
				<div className='mission-card'>
					{/* <img className='mission-svg' src={TrustSVG} alt='' /> */}
					<h1 className='mission-title'>
						Cultivating <br /> Trust
					</h1>
					<p className='mission-desc'>
						Trust forms the bedrock of our interactions. We uphold the highest
						standards of integrity, transparency, and reliability in all our
						endeavors. Our stakeholders can rely on us to consistently deliver
						on our promises.
					</p>
				</div>
				<div className='mission-card'>
					{/* <img className='mission-svg' src={ValueSVG} alt='' /> */}
					<h1 className='mission-title'>
						Adding <br /> Value
					</h1>
					<p className='mission-desc'>
						We are dedicated to creating tangible value for our stakeholders.
						Through innovative solutions, exceptional service, and a relentless
						pursuit of excellence, we aim to exceed expectations and drive
						sustainable growth.
					</p>
				</div>
			</div>
			<div className='vision-section flex-container'>
				<div className='vision-left flex-container'>
					<h2>Our</h2>
					<h2>Vision</h2>
				</div>
				<div className='vision-right'>
					<p>
						At Krad Global, our vision is to be the foremost supplier of
						engineering, industrial, and construction products worldwide. We
						aspire to set the standard for excellence in our industry by
						providing innovative solutions, unmatched quality, and exceptional
						service. Through strategic partnerships and a commitment to
						sustainability, we aim to empower global industries and communities,
						driving progress and prosperity across every project we undertake.
					</p>
				</div>
			</div>
			<div className='end-trigger'></div>
		</div>
	);
};

export default MissionVision;
