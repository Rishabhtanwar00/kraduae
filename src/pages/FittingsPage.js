import FittingsBG from '../assets/fittingsbg.png';
import NotchSVG from '../assets/notchleft.svg';
// import IndustriesImg from '../assets/industries.png';
// import OilgasImg from '../assets/oilgas.png';
// import RefineryImg from '../assets/refinery.png';
// import PipelineImg from '../assets/pipeline.png';
// import DistillationImg from '../assets/distillation.png';
// import ShipbuildingImg from '../assets/shipbuilding.png';
import FittingsImg from '../assets/fittingsimg.png';
import SpecialityImg from '../assets/speciality.png';
import MissionImg from '../assets/mission.png';
import QualityImg from '../assets/quality.png';
import MarketImg from '../assets/market.png';
import ClientImg from '../assets/client.png';
import DocumentTitle from '../components/DocumentTitle';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowDimensions from '../components/useWindowDimensions';

const FittingsPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const { width } = useWindowDimensions();
	DocumentTitle('Fittings - Krad Global General Trading');
	const container = useRef();
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.fittings-material-section',
			start: width > 900 ? '3% center' : '1% center',
			end: '10% center',
			scrub: 1,
			// markers: true,
		},
	});
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.fittings-other',
			start: width > 900 ? '40% center' : '45% center',
			end: width > 900 ? '50% center' : '60% center',
			scrub: 1,
		},
	});
	useGSAP(() => {
		gsap.from('.fittings-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'circ.out',
		});
		gsap.from('.fittings-material-title', {
			transform: 'translatey(100vh)',
			duration: 1,
			ease: 'expo.out',
		});
		tl.from('.fittings-material-card', {
			scale: 1.2,
			stagger: 0.05,
			ease: 'power3.inOut',
		});
		tl2.fromTo(
			'.fittings-other-card',
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
		<div className='product-page-container'>
			<div className='product-page-landing fittings-landing'>
				<div className='product-bg1'></div>
				<img src={FittingsBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Pipe and Tube Fittings</h1>
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
					<span>Fittings</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<div className='fittings-material-section' ref={container}>
				<h1 className='fittings-material-title'>Material Offered</h1>
				<div className='fittings-material-cards flex-container'>
					<div className='fittings-material-card'>
						<h2>Carbon Steel</h2>
						<p>Various grades</p>
					</div>
					<div className='fittings-material-card'>
						<h2>Stainless Steel</h2>
						<p>
							Various grades (e.g., S304/L, S316/L, S31803, S32205, S32750,
							S32760)
						</p>
					</div>
					<div className='fittings-material-card'>
						<h2>Alloy Steel</h2>
						<p>Various grades</p>
					</div>
					<div className='fittings-material-card'>
						<h2>Duplex and Super Duplex</h2>
						<p>Various grades (e.g., S31803, S32205, S32750, S32760)</p>
					</div>
					<div className='fittings-material-card'>
						<h2>Nickel Alloys</h2>
						<p>
							Inconel, Incoloy, Hastelloy, Monel, Alloy 825, Alloy 625, Alloy
							600, Alloy 400, Alloy 201
						</p>
					</div>
				</div>
			</div>
			<div className='fittings-types-section flex-container'>
				<div className='fitting-types'>
					<h2 className='fittings-types-title'>
						<span>Types of Fittings:</span> Seamless, Butt Weld, Forged, Outlet
					</h2>
					<h2 className='fittings-types-title'>
						<span>Key Fittings:</span> Elbows, Bends, Caps, Reducers, Tees,
						Couplings, Unions, Plugs, Bushings, Inserts, Pipe Nipples, Swag
						Nipples, Weld-Outlet, Sock-Outlet, Thread-Outlet, Nip-Outlet,
						Sweep-Outlet, Elb-Outlet, Lat-Outlet
					</h2>
				</div>
				<img className='fittings-types-img' src={FittingsImg} alt='' />
			</div>
			{/* <div className='industries-section'>
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
			</div> */}
			<div className='other-details fittings-other flex-container'>
				<div className='other-details-card fittings-other-card'>
					<img src={SpecialityImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Speciality</h2>
						<p>Products designed for highly corrosive operating conditions</p>
					</div>
				</div>
				<div className='other-details-card fittings-other-card'>
					<img src={MarketImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Market Presence</h2>
						<p>
							Leading Exporter and Supplier in UAE, Middle East, GCC, and Africa
						</p>
					</div>
				</div>
				<div className='other-details-card fittings-other-card'>
					<img src={ClientImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Clientele</h2>
						<p>
							Fabricators, drilling contractors, offshore and marine engineering
							companies, shipyards, and various industrial sectors
						</p>
					</div>
				</div>
				<div className='other-details-card fittings-other-card'>
					<img src={MissionImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Mission</h2>
						<p>
							Provide reliable, tailored solutions to meet specific industrial
							needs with adherence to international standards and codes
						</p>
					</div>
				</div>
				<div className='other-details-card fittings-other-card'>
					<img src={QualityImg} alt='' />
					<div className='other-details-card-content'>
						<h2>Quality Assurance</h2>
						<p>
							Products manufactured to meet standard specifications (API, ASTM,
							ASME, ISO, DIN, EN)
						</p>
					</div>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Pipes Fittings</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th colSpan='2'>Elbows</th>
								<th colSpan='2'>Bends</th>
								<th colSpan='2'>Caps</th>
								<th colSpan='2'>Reducers</th>
								<th colSpan='2'>Tees</th>
							</tr>
							<tr>
								<th></th>
								<th>Sizes</th>
								<th>Grades</th>
								<th>Sizes</th>
								<th>Grades</th>
								<th>Sizes</th>
								<th>Grades</th>
								<th>Sizes</th>
								<th>Grades</th>
								<th>Sizes</th>
								<th>Grades</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Carbon Steel Fittings</td>
								<td>1/2″ to 96″ OD</td>
								<td>WPB, WPL6, WPHY52-65, WPC</td>
								<td>1/2″ to 96″ OD</td>
								<td>WPB, WPL6, WPHY52-65, WPC</td>
								<td>1″ to 96″ OD</td>
								<td>WPB, WPL6, WPHY52-65, WPC</td>
								<td>3/4″ to 96″ OD</td>
								<td>WPB, WPL6, WPHY52-65, WPC</td>
								<td>1/2″ to 96″ OD</td>
								<td>WPB, WPL6, WPHY52-65, WPC</td>
							</tr>
							<tr>
								<td>Stainless / Duplex / Super Duplex Steel Fittings</td>
								<td>1/2″ to 5″ OD</td>
								<td>S304/L, S316/L, S31803, S32205, S32750, S32760</td>
								<td></td>
								<td></td>
								<td>1″ to 14″ OD</td>
								<td>S304/L, S316/L, S31803, S32205, S32750, S32760</td>
								<td>3/4″ to 16″ OD</td>
								<td>S304/L, S316/L, S31803, S32205, S32750, S32760</td>
								<td>1/2″ to 16″ OD</td>
								<td>S304/L, S316/L, S31803, S32205, S32750, S32760</td>
							</tr>
						</tbody>
					</table>
				</div>
				<table>
					<thead>
						<tr>
							<th>Types</th>
							<th colSpan='2'>
								Elbows, Tees, Couplings, Unions, Caps, Plugs, Bushings, Inserts
							</th>
						</tr>
						<tr>
							<th></th>
							<th>Size</th>
							<th>Grades</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Forged Fittings – Carbon Steel</td>
							<td>1/8″ to 6″ OD</td>
							<td>ASTM / ANSI A105, 350LF 2</td>
						</tr>
						<tr>
							<td>Forged Fittings – Stainless Steel</td>
							<td>1/8″ to 6″ OD</td>
							<td>ASTM 182/182M-F304/304L/316/316L</td>
						</tr>
					</tbody>
				</table>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Types</th>
								<th>Sub Types</th>
								<th>Size</th>
								<th>Grades</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Outlet Fittings</td>
								<td>
									Weld-Outlet, Sock-Outlet, Thread-Outlet, Nip-Outlet,
									Sweep-Outlet, Elb-Outlet and Lat-Outlet, Lat-Outlet,
									Sweep-Outlet, Nipoflanges
								</td>
								<td>1/2″ to 36″ OD (depending on type)</td>
								<td>
									ASTM / ANSI A105, 350LF 2 / ASTM 182/182M-F304/304L/316/316L
								</td>
							</tr>
							<tr>
								<td>Pipe Nipples</td>
								<td>Pipe Nipples, Swage Nipples</td>
								<td>1/8″ to 10″ OD</td>
								<td>
									ASTM / ANSI A105, 350LF 2 / ASTM 182/182M-F304/304L/316/316L
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Types</th>
								<th>Description</th>
								<th>Process</th>
								<th>Steel Grades</th>
								<th>Sizes</th>
								<th>Schedules</th>
								<th>Thickness</th>
								<th>Ends</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Nickel Alloy Steel Fittings</td>
								<td>
									45°/90°/180° LR or SR Elbows, Concentric Reducers, Eccentric
									Reducers, Equal Tees, Reducing Tees, Caps
								</td>
								<td>Seamless and Welded</td>
								<td>
									Alloy 825, Alloy 625, Alloy 600, Alloy 400, Alloy 201, Inconel
									C276, Alloy 200
								</td>
								<td>3/8″ to 24″ OD (10.2mm to 609.6mm)</td>
								<td>SCH STD – SCH160/XXS</td>
								<td>1.5mm to 60.0mm</td>
								<td>Bevelled/Plain</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div id='end-trigger'></div>
		</div>
	);
};

export default FittingsPage;
