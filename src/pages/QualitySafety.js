import QualitysafetyBG from '../assets/qualitysafetybg.jpg';
import NotchSVG from '../assets/notchleft.svg';
import DocumentTitle from '../components/DocumentTitle';
import QualitysafetyImg from '../assets/qualitysafety.png';
import SustainabilityImg from '../assets/sustainability.png';
import ImprovementImg from '../assets/improvement.png';
import TrainingImg from '../assets/training.png';
import QualitySafetyCard from '../components/QualitySafetyCard';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowDimensions from '../components/useWindowDimensions';

const CommintmentsDataArr = [
	{
		number: 1,
		color: '#3498db',
		title: 'Excellence in Project Management',
		text: "We efficiently plan and manage projects to meet our clients' expectations and deadlines.",
	},
	{
		number: 2,
		color: '#2ecc71',
		title: 'Compliance',
		text: 'We adhere strictly to all relevant statutory obligations, standards, and codes of practice, ensuring the highest levels of quality and safety.',
	},
	{
		number: 3,
		color: '#9b59b6',
		title: 'Continuous Improvement',
		text: 'We continually monitor, evaluate, and improve our QHSE management systems to meet the evolving needs of our industry and stakeholders.',
	},
	{
		number: 4,
		color: '#f1c40f',
		title: 'Resource Allocation',
		text: 'We allocate adequate resources to maintain and enhance our QHSE systems effectively.',
	},
	{
		number: 5,
		color: '#e74c3c',
		title: 'Skilled Workforce',
		text: 'We employ skilled and experienced professionals, providing ongoing training and development to ensure they remain at the forefront of industry practices.',
	},
	{
		number: 6,
		color: '#e67e22',
		title: 'Customer Focus',
		text: "We prioritize understanding and meeting our customers' needs and expectations, ensuring their satisfaction throughout our engagements.",
	},
	{
		number: 7,
		color: '#2ecc71',
		title: 'Process Optimization',
		text: 'We regularly assess our processes to identify and rectify potential errors, enhancing operational efficiency and effectiveness.',
	},
	{
		number: 8,
		color: '#3498db',
		title: 'Supplier and Partner Engagement',
		text: 'We collaborate closely with our suppliers, subcontractors, and partners, ensuring they align with our QHSE standards and values.',
	},
];

const QualitySafety = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Quality & Safetly - Krad Global General Trading');
	const container = useRef();
	const { width } = useWindowDimensions();
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.quality-safety-section',
			start: width > 900 ? '50% center' : '65% center',
			// endTrigger: '.fittings-types-section',
			end: width > 900 ? '60% center' : '80% center',
			scrub: 1,
			// markers: true,
		},
	});

	useGSAP(() => {
		gsap.from('.quality-page-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'back.out',
		});
		tl.from('.quality-safety-card', {
			y: '200px',
			stagger: 0.1,
			ease: 'power3.out',
		});
	}, [container]);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing quality-page-landing'>
				<div className='product-bg1'></div>
				<img src={QualitysafetyBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Quality & Safety</h1>
				</div>
			</div>
			<div className='breadcrum contact'>
				<div className='bredcrum-item'>
					<span>Home</span>
					<img src={NotchSVG} alt='' />
				</div>
				<div className='bredcrum-item'>
					<span>Quality & Safety</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<div className='policy-statement'>
				<h1>QHSE Policy </h1>
				<p>
					At Krad Global, we are committed to implementing robust Quality,
					Health, Safety, and Environmental (QHSE) management systems to ensure
					the delivery of exceptional products and services. Our primary
					objective is to consistently achieve high levels of customer
					satisfaction.
				</p>
			</div>
			<div className='commitments-wrapper'>
				<h1>Our Commitments</h1>
				<div className='commitments-container'>
					{CommintmentsDataArr.map((item, index) => (
						<QualitySafetyCard
							key={index}
							number={item.number}
							text={item.text}
							color={item.color}
							title={item.title}
						/>
					))}
				</div>
			</div>
			<div className='quality-safety-section flex-container'>
				<div className='quality-safety-cards flex-container' ref={container}>
					<div className='quality-safety-card'>
						<span className='quality-safety-card-decor'></span>
						<div className='quality-safety-card-content'>
							<div className='quality-safety-card-icon'>
								<img src={SustainabilityImg} alt='' />
							</div>
							<div className='quality-safety-card-text'>
								<h2>Commitment to Sustainability</h2>
								<p>
									We are dedicated to minimizing our environmental impact and
									promoting sustainable practices in all our operations.
								</p>
							</div>
						</div>
					</div>
					<div className='quality-safety-card'>
						<span className='quality-safety-card-decor'></span>
						<div className='quality-safety-card-content'>
							<div className='quality-safety-card-icon'>
								<img src={ImprovementImg} alt='' />
							</div>
							<div className='quality-safety-card-text'>
								<h2>Continuous Review and Improvement</h2>
								<p>
									We regularly review and improve our services to optimize
									cost-effectiveness and timely delivery, enhancing value for
									all our stakeholders.
								</p>
							</div>
						</div>
					</div>
					<div className='quality-safety-card'>
						<span className='quality-safety-card-decor'></span>
						<div className='quality-safety-card-content'>
							<div className='quality-safety-card-icon'>
								<img src={TrainingImg} alt='' />
							</div>
							<div className='quality-safety-card-text'>
								<h2>Training and Development</h2>
								<p>
									We invest in the ongoing training and development of our team
									members, empowering them to uphold our QHSE policies and
									deliver excellence in every aspect of their work.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='quality-safety-section-img'>
					<img src={QualitysafetyImg} alt='' />
				</div>
			</div>
			<div className='quality-safety-conclusion'>
				<p>
					At Krad Global, we are steadfast in our commitment to QHSE excellence,
					ensuring that our practices align with industry best practices and
					exceed the expectations of our customers and partners.
				</p>
			</div>
		</div>
	);
};

export default QualitySafety;
