import FlangesBG from '../assets/flangesbg.png';
import NotchSVG from '../assets/notchleft.svg';
import IndustriesImg from '../assets/industries.png';
import OilgasImg from '../assets/oilgas.png';
import RefineryImg from '../assets/refinery.png';
import PipelineImg from '../assets/pipeline.png';
import DistillationImg from '../assets/distillation.png';
import ShipbuildingImg from '../assets/shipbuilding.png';
import QualityImg from '../assets/quality.png';
import MarketImg from '../assets/market.png';
import ClientImg from '../assets/client.png';
import DocumentTitle from '../components/DocumentTitle';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowDimensions from '../components/useWindowDimensions';

const FlangesPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const container = useRef();
	const { width } = useWindowDimensions();
	DocumentTitle('Flanges - Krad Global General Trading');
	const tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.flanges-type',
			start: width > 900 ? '5% center' : '5% center',
			// endTrigger: '.fittings-types-section',
			end: '15% center',
			scrub: 1,
			// markers: true,
		},
	});
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.flanges-other',
			start: width > 900 ? '40% center' : '45% center',
			// endTrigger: '.product-page-table-container',
			end: '50% center',
			scrub: 1,
		},
	});

	useGSAP(() => {
		gsap.from('.flanges-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease:'expo.out',
		});
		gsap.from('.flanges-types-title', {
			transform: 'translatey(100vh)',
			duration: 1,
			ease: 'power1.out',
		});
		tl1.from('.flanges-type-card', {
			scale: 0.8,
			stagger: 0.05,
			ease: 'power3.inOut',
		});
		tl2.fromTo(
			'.flanges-other-card',
			{
				boxShadow: 'none',
				ease: 'power3.inOut',
				stagger: 0.2,
			},
			{
				boxShadow: '0 2px 20px 2px #ffffff6f',
				ease: 'power3.inOut',
				stagger: 0.2,
			}
		);
	}, []);
	DocumentTitle('Flanges - Krad Global General Trading');
	return (
		<div className='product-page-container'>
			<div className='product-page-landing flanges-landing'>
				<div className='product-bg1'></div>
				<img src={FlangesBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Flanges</h1>
				</div>
			</div>
			<div className='breadcrum'>
				<div className='bredcrum-item'>
					<span>Home</span>
					<img src={NotchSVG} alt='' />
				</div>
				<div className='bredcrum-item'>
					<span>Products</span>
					<img src={NotchSVG} alt='' />
				</div>
				<div className='bredcrum-item'>
					<span>Flanges</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<div className='flanges-types-container'>
				<h1 className='flanges-types-title'>Flanges</h1>
				<div className='flanges-type flex-container' ref={container}>
					<div className='flanges-type-card'>
						<div className='flanges-type-card-title'>
							<svg
								className='flanges-type-svg'
								width='421'
								height='72'
								viewBox='0 0 421 72'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='421' height='54' fill='#ff4235' />
								<path
									d='M210.5 72L188.268 45.75H232.732L210.5 72Z'
									fill='#ff4235'
								/>
							</svg>

							<h2>Material</h2>
						</div>
						<p>Various grades</p>
					</div>
					<div className='flanges-type-card'>
						<div className='flanges-type-card-title'>
							<svg
								className='flanges-type-svg'
								width='421'
								height='72'
								viewBox='0 0 421 72'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='421' height='54' fill='rgb(5, 186, 5)' />
								<path
									d='M210.5 72L188.268 45.75H232.732L210.5 72Z'
									fill='rgb(5, 186, 5)'
								/>
							</svg>

							<h2>Types Offered</h2>
						</div>
						<p>
							Slip on, Weld neck, Blind, Socket weld, Anchor, Lap Joint, Nozzle,
							Orifice, Spectacle, Spade and Spacer, Swivel Ring, Threaded
							Flange, and custom-designed flanges
						</p>
					</div>
					<div className='flanges-type-card'>
						<div className='flanges-type-card-title'>
							<svg
								className='flanges-type-svg'
								width='421'
								height='72'
								viewBox='0 0 421 72'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='421' height='54' fill='rgb(237, 28, 237)' />
								<path
									d='M210.5 72L188.268 45.75H232.732L210.5 72Z'
									fill='rgb(237, 28, 237)'
								/>
							</svg>

							<h2>Standards</h2>
						</div>
						<p>ANSI, DIN, API</p>
					</div>
				</div>
			</div>
			<div className='industries-section'>
				<div className='industries-section-title flex-container'>
					<img src={IndustriesImg} alt='' />
					<h1>Industries Served</h1>
				</div>
				<div className='industries-card '>
					<img src={OilgasImg} alt='' />
					<h3>Oil & Gas (upstream and downstream)</h3>
				</div>
				<div className='industries-card '>
					<img src={RefineryImg} alt='' />
					<h3>Refining, Petrochemical</h3>
				</div>
				<div className='industries-card '>
					<img src={PipelineImg} alt='' />
					<h3>Marine, Power, Pipeline</h3>
				</div>
				<div className='industries-card '>
					<img src={DistillationImg} alt='' />
					<h3>Desalination, Water and Utility</h3>
				</div>
				<div className='industries-card '>
					<img src={ShipbuildingImg} alt='' />
					<h3>Shipbuilding, Heavy Industrial sectors</h3>
				</div>
			</div>
			<div className='other-details flanges-other flex-container'>
				<div className='other-details-card flanges-other-card'>
					<img src={MarketImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Market Presence</h2>
						<p>
							Leading exporter and Supplier in UAE, Middle East, GCC, and Africa
						</p>
					</div>
				</div>
				<div className='other-details-card flanges-other-card'>
					<img src={ClientImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Clientele</h2>
						<p>
							Fabricators, drilling contractors, offshore and marine engineering
							companies, shipyards, and various industrial sectors
						</p>
					</div>
				</div>
				<div className='other-details-card flanges-other-card'>
					<img src={QualityImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Quality Assurance</h2>
						<p>High-quality raw materials used for durability</p>
					</div>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Flanges</h1>
				<h2>
					<span>Size [inches]:</span> 1/2 to 120
				</h2>
				<h2>
					<span>Type:</span> Slip on / Weld neck / Blind / Socket weld / Anchor
					/ Lap Joint / Nozzle / Orifice / Spectacle / Spade and Spacer / Swivel
					Ring / Threaded Flange
				</h2>

				<table>
					<thead>
						<tr>
							<th>Material</th>
							<th>Norms</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Carbon Steel</td>
							<td>A105N A350 A694</td>
							<td>LF2 F42, F52, F60, F65; A707 L3 CL3, L5 CL3</td>
						</tr>
						<tr>
							<td>Alloy Steel</td>
							<td>A182</td>
							<td>F1, F11, F12, F22, F5, F91, F92</td>
						</tr>
						<tr>
							<td>Stainless Steel</td>
							<td>A182</td>
							<td>
								F304/304L, F316/316L F50, F51, F52, F53, F54, F55, F57, F60, F61
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FlangesPage;
