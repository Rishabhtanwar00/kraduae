import DocumentTitle from '../components/DocumentTitle';
import LandingSlider from '../components/LandingSlider';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import QualitySection from '../components/QualitySection';
import MissionVision from '../components/MissionVision';
import AboutSection from '../components/AboutSection';
import Products from '../components/Products';
import useWindowDimensions from '../components/useWindowDimensions';
const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { width } = useWindowDimensions();
	const container = useRef();
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.homepage-container',
			start: width > 900 ? '-15% center' : '-25% center',
			// endTrigger: '.end-trigger',
			end: width > 900 ? '90% 100%' : '90% 100%',
			scrub: 1,
		},
	});
	useGSAP(() => {
		gsap.from('.home-landing', {
			scale: 0,
			ease: 'expo.out',
			duration: 1,
		});
	}, [container]);

	DocumentTitle('Krad Global General Trading');
	return (
		<div className='homepage-container' ref={container}>
			<div className='home-landing'>
				<LandingSlider />
			</div>
			<AboutSection timeline={tl} />
			<Products timeline={tl} />
			<QualitySection timeline={tl} />
			<MissionVision timeline={tl} />
		</div>
	);
};

export default Homepage;
