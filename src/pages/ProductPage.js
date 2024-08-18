import PipesBG from '../assets/pipesbg.jpg';
import NotchSVG from '../assets/notchleft.svg';
import MaterialImg from '../assets/material.png';
import ProductRange from '../components/ProductRange';
// import IndustriesImg from '../assets/industries.png';
// import OilgasImg from '../assets/oilgas.png';
// import RefineryImg from '../assets/refinery.png';
// import PipelineImg from '../assets/pipeline.png';
// import DistillationImg from '../assets/distillation.png';
// import ShipbuildingImg from '../assets/shipbuilding.png';
import CustomerbaseImg from '../assets/customerbase.png';
import MissionImg from '../assets/mission.png';
import QualityImg from '../assets/quality.png';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import DocumentTitle from '../components/DocumentTitle';
import useWindowDimensions from '../components/useWindowDimensions';

gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Pipes - Krad Global General Trading');
	const { width } = useWindowDimensions();
	const container = useRef();
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.pipes-industries',
			start: width > 900 ? '50% center' : '60% center',
			end: width > 900 ? '55% 100%' : '65% center',
			scrub: 1,
			// markers: true,
		},
	});
	useGSAP(() => {
		gsap.from('.pipes-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'back.out',
		});
		gsap.from('.material-used', {
			transform: 'translatey(100vh)',
			duration: 1,
			ease: 'power3.out',
		});
		tl.fromTo(
			'.pipe-other-card',
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
	}, [tl, container]);
	return (
		<div className='product-page-container pipes-page'>
			<div className='product-page-landing pipes-landing'>
				<div className='product-bg'></div>
				<img src={PipesBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Steel Pipes & Tubes</h1>
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
					<span>Pipes</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<div className='product-page-data'>
				<div className='material-used flex-container'>
					<div className='material-used-title flex-container'>
						<img src={MaterialImg} alt='' />
						<h3>Material Used</h3>
						<svg
							className='material-svg'
							width='38'
							height='89'
							viewBox='0 0 38 89'
							fill='#51a6c0'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.50001 2C1.50001 2 36 29 36 44C36 59 1.50001 87 1.50001 87'
								stroke='white'
								strokeWidth='3'
							/>
						</svg>
					</div>
					<div className='material-used-content flex-container'>
						<p>Carbon Steel</p>
						<p>Stainless Steel</p>
						<p>Alloy Steel</p>
						<p>Duplex and Super Duplex</p>
						<p>Copper Nickel Pipes</p>
						<p>Chrome Moly</p>
						<p>Clad materials</p>
					</div>
				</div>
			</div>
			<ProductRange />
			{/* <div className='industries-section pipes-industries' ref={container}>
				<div className='industries-section-title flex-container'>
					<img src={IndustriesImg} alt='' />
					<h1>Industries Served</h1>
				</div>
				<div className='industries-card'>
					<img src={OilgasImg} alt='' />
					<h3>Oil & Gas (upstream and downstream)</h3>
				</div>
				<div className='industries-card'>
					<img src={RefineryImg} alt='' />
					<h3>Refining, Petrochemical</h3>
				</div>
				<div className='industries-card'>
					<img src={PipelineImg} alt='' />
					<h3>Marine, Power, Pipeline</h3>
				</div>
				<div className='industries-card'>
					<img src={DistillationImg} alt='' />
					<h3>Desalination, Water and Utility</h3>
				</div>
				<div className='industries-card'>
					<img src={ShipbuildingImg} alt='' />
					<h3>Shipbuilding, Heavy Industrial sectors</h3>
				</div>
			</div> */}
			<div className='other-details flex-container'>
				<div className='other-details-card pipe-other-card'>
					<img src={CustomerbaseImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Customer Base</h2>
						<p>
							Local and international clients including fabricators, drilling
							contractors, offshore and marine engineering companies, shipyards,
							and various industrial sectors in UAE, Middle East, GCC, and
							Africa
						</p>
					</div>
				</div>
				<div className='other-details-card pipe-other-card'>
					<img src={MissionImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Mission</h2>
						<p>
							To maintain global standards in the Piping Industry and provide
							cost-effective solutions based on international codes and
							standards
						</p>
					</div>
				</div>
				<div className='other-details-card pipe-other-card'>
					<img src={QualityImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Quality Assurance</h2>
						<p>
							Committed to excellent quality and building lasting customer
							relationships
						</p>
					</div>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Pipes</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Types</th>
								<th>Standards</th>
								<th>Steel Grades</th>
								<th>Sizes</th>
								<th>Schedules</th>
								<th>Thickness</th>
								<th>Ends</th>
								<th>Lengths</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Carbon Steel – Seamless Pipes & Low Temperature</td>
								<td>ASTM, DIN, EN</td>
								<td>
									A333 Gr.6, A106 Gr B/A/C, API 5L X42, X46, X52, X60, X65, X70
									(PSL1 & PSL2), P235HG, P265GH (TC1 & TC2), S355J2H, P355N,
									P420N, L245NB, L290NB, ST37.8, ST35.8
								</td>
								<td>3/8” to 24” (10.2mm to 610.0mm)</td>
								<td>
									SCH STD, SCH XS, SCH XXS, SCH20, SCH40, SCH60, SCH80, SCH100,
									SCH120, SCH140, SCH160
								</td>
								<td>1.5mm to 60.0mm</td>
								<td>Beveled/Plain</td>
								<td>SRL 5-8m, DRL 9-13m</td>
							</tr>
							<tr>
								<td>Carbon Steel – Welded Pipes ERW/ LSAW/ SPW</td>
								<td>ASTM, DIN, EN</td>
								<td>
									A333 Gr.6, A106 Gr B/A/C, API 5L X42, X46, X52, X60, X65, X70
									(PSL1 & PSL2), P235HG, P265GH (TC1 & TC2), S355J2H, P355N,
									P420N, L245NB, L290NB, ST37.8, ST35.8
								</td>
								<td>1/8” to 120” (10.29mm to 3048mm)</td>
								<td>
									Various including SCH STD, SCH XS, SCH XXS, SCH 5S, SCH 10/10,
									SCH 20, SCH 30, SCH 40/40S, SCH60, SCH80/80S, SCH 100, SCH
									120, SCH 140, SCH 160
								</td>
								<td>1.5mm to 80.0mm</td>
								<td>Beveled/Plain</td>
								<td>SRL 5-8m, DRL 9-13m</td>
							</tr>
							<tr>
								<td>Carbon Steel – Casing & Tubing</td>
								<td>API 5CT all specs</td>
								<td>
									J/K55, N80, L80, P110, Q125, C90, T95, L80 13Cr, P110 13Cr,
									All grades
								</td>
								<td>2 3/8″ to 20″</td>
								<td></td>
								<td>3 mm to 55 mm</td>
								<td>Beveled/Plain</td>
								<td>SRL 5-8m, DRL 9-13m</td>
							</tr>
							<tr>
								<td>Stainless Steel – Welded Pipes ERW/ LSAW/ SPW</td>
								<td>ASTM, DIN, EN</td>
								<td>
									TP304L, TP316L, TP316TI, TP304H, TP310S, TP321H, TP347H,
									TP904L, UNS S31803 (DUPLEX), UNS S32760 (SUPER DUPLEX)
								</td>
								<td>1/8” to 36” (10.29mm to 914.40mm)</td>
								<td>
									Various including SCH STD, SCH XS, SCH XXS, SCH 5S, SCH 10/10,
									SCH 20, SCH 30, SCH 40/40S, SCH60, SCH80/80S, SCH 100, SCH
									120, SCH 140, SCH 160
								</td>
								<td>1.5mm to 80.0mm</td>
								<td>Beveled/Plain</td>
								<td>SRL 5-8m, DRL 9-13m</td>
							</tr>
							<tr>
								<td>Alloy Pipes – Seamless / Boiler Tubes</td>
								<td>ASTM, DIN, EN</td>
								<td>
									A335-P5, P9, P11, P22, P91, 16Mo3, 13CrMo4-5, 10CrMo9-10
									X11CrMo5, X10CrMoVNb9-1 X 20 CrMo V 11-1
								</td>
								<td>1/2” to 24” (10.2mm to 813.0mm)</td>
								<td>SCH STD – SCH160/XXS</td>
								<td>1.5mm to 80.0mm</td>
								<td>Beveled/Plain</td>
								<td>SRL 5-8m, DRL 9-13m</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='pageend-trigger'></div>
		</div>
	);
};

export default ProductPage;
