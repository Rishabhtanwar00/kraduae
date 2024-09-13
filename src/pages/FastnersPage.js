import { useEffect } from 'react';
import FastnersBG from '../assets/fastnersbg.jpg';
import NotchSVG from '../assets/notchleft.svg';
// import IndustriesImg from '../assets/industries.png';
// import OilgasImg from '../assets/oilgas.png';
// import RefineryImg from '../assets/refinery.png';
// import PipelineImg from '../assets/pipeline.png';
// import DistillationImg from '../assets/distillation.png';
// import ShipbuildingImg from '../assets/shipbuilding.png';

import DocumentTitle from '../components/DocumentTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FastnersPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Fastners - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.fastners-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'expo.out',
		});
	}, []);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing fastners-landing'>
				<div className='product-bg1'></div>
				<img src={FastnersBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Fastners</h1>
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
					<span>Fastners</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<p className='valves-para fastners-para'>
				<span>Krad Global</span>, headquartered in Dubai, UAE and Present in USA,
				India also, stands as a prominent leader in the field of Export and
				Supply of fasteners tailored to meet diverse industry needs.
			</p>
			<h1 className='valves-title' style={{ margin: '20px 0' }}>
				Fastner Types
			</h1>
			<div className='fastners-types flex-container'>
				<p>Anchor Bolts</p>
				<p>Stud Bolts and Nuts</p>
				<p>Eye Bolts</p>
				<p>Hexagon Bolts and Nuts</p>
				<p>U-Bolts Studs</p>
				<p>Washers</p>
				<p>Several other Fasteners</p>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Fastners</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th>Norms</th>
								<th>Grade</th>
								<th>Range</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Stud Bolts</td>
								<td>A193 A320</td>
								<td>B7, B7M, B8, B8M L7, L7M</td>
								<td> 1/4” - 3” and 1/4” - 2”</td>
							</tr>
							<tr>
								<td>Nuts</td>
								<td>A194</td>
								<td>2H, 2HM, Gr4, Gr8, Gr8M</td>
								<td>1/4” - 48”</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <h1 className='valves-title' style={{ margin: 0 }}>
				Customer Base
			</h1> */}
			{/* <div className='industries-section'>
				<div className='industries-card'>
					<img src={IndustriesImg} alt='' />
					<h3>Local and international clients</h3>
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
		</div>
	);
};

export default FastnersPage;
