import ValvesBG from '../assets/valvesbg.jpeg';
import NotchSVG from '../assets/notchleft.svg';
import ValvesImg from '../assets/valvesimg.png';
// import IndustriesImg from '../assets/industries.png';
// import OilgasImg from '../assets/oilgas.png';
// import RefineryImg from '../assets/refinery.png';
// import PipelineImg from '../assets/pipeline.png';
// import DistillationImg from '../assets/distillation.png';
// import ShipbuildingImg from '../assets/shipbuilding.png';
import ValvesTypesImg from '../assets/valves.png';
import { useEffect } from 'react';
import DocumentTitle from '../components/DocumentTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ValvesPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Valves - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.valves-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'expo.out',
		});
	}, []);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing valves-landing'>
				<div className='product-bg1'></div>
				<img src={ValvesBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Valves</h1>
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
					<span>Valves</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			{/* <h1 className='valves-title'>Valves</h1> */}
			<div className='valves-section-container flex-container'>
				<div className='valves-section'>
					<p className='valves-section-para'>
						<span>Krad Global</span> stands as your premier destination for a
						comprehensive range of high-quality valves in Dubai. As renowned
						Exporter and supplier, we offer a diverse selection including gate
						valves, globe valves, check valves, ball valves, and butterfly
						valves available in various materials such as carbon steel,
						stainless steel, duplex, and specialized alloys. Serving as Exporter
						and Supplier, our reach spans across the UAE, Gulf Countries and
						African Market, making us your reliable partner for all valve
						solutions.
					</p>
					<p className='valves-section-para'>
						Valves are critical Products for every Industries and Krad Global’s
						extensive experience enables us to meet diverse and challenging
						product specifications tailored to your exact needs. We source our
						valves from globally recognized and approved manufacturers, ensuring
						quality standards.
					</p>
				</div>
				<img className='valves-section-img' src={ValvesImg} alt='' />
			</div>
			<h1 className='valves-title' style={{margin:'20px auto'}}>Our Range of Valves</h1>
			{/* <p className='valves-para fastners-para' style={{margin:'20px auto'}}>
				<span>Manual and Automated Valves:</span> MOV, SSV, ESDV and more
			</p> */}
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
			<div className='valves-types flex-container'>
				<div className='industries-section-title flex-container valve-types-title'>
					<img src={ValvesTypesImg} alt='' />
					<h1>Valves Types</h1>
				</div>
				<div className='valves-type flex-container'>
					<p>Gate Valve</p>
					<p>Check Valve</p>
					<p>Ball Valve</p>
					<p>Globe Valve</p>
					<p>Check Valve Ball Type</p>
					<p>Butterfly Valve</p>
					<p>Needle Valve</p>
					<p>Plug Valve</p>
					<p>API 6A Valve (Gate/Globe/Check/Ball/Plug)</p>
					<p>Choke Valve</p>
					<p>Motor Operated Valve – MOV</p>
					<p>Gas Operated Valves – GOV</p>
					<p>Shut Down – SDV & ESDV Valve</p>
					<p>Several Other Types of Valves</p>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Valves Types</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Material</th>
								<th>Size Range</th>
								<th>Class Range</th>
								<th>End Type Range</th>
								<th>Standard/Specification</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									Carbon steel forged <br />
									Carbon steel casting
									<br />
									Stainless steel
									<br />
									Super Duplex stainless steel
									<br />
									Ductile Iron
									<br />
									Bronze
								</td>
								<td>2” to 72” </td>
								<td>150# - 2500#</td>
								<td>
									Flanged End <br />
									Welded End <br />
									Threaded End
								</td>
								<td>
									API 6A <br />
									API 6D
									<br />
									API 600
									<br />
									API 602
									<br />
									API 603
									<br />
									And Several Others
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ValvesPage;
