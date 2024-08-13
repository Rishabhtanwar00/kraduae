import { useEffect } from 'react';
import GasketsBG from '../assets/gasketsbg.jpg';
import NotchSVG from '../assets/notchleft.svg';
import IndustriesImg from '../assets/industries.png';
import OilgasImg from '../assets/oilgas.png';
import RefineryImg from '../assets/refinery.png';
import PipelineImg from '../assets/pipeline.png';
import DistillationImg from '../assets/distillation.png';
import ShipbuildingImg from '../assets/shipbuilding.png';
import DocumentTitle from '../components/DocumentTitle';

const GasketsPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Gaskets - Krad Global General Trading');
	return (
		<div className='product-page-container'>
			<div className='product-page-landing gaskets-landing'>
				<div className='product-bg1'></div>
				<img src={GasketsBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Gaskets</h1>
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
					<span>Gaskets</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<p className='valves-para fastners-para'>
				<span>Krad Global</span>, based in Dubai, UAE, stands as a prominent
				leader in the field of Export and Supply of Gasket tailored to meet
				diverse industry needs
			</p>
			<h1 className='valves-title' style={{ margin: '20px 0' }}>
				Types of Gasket
			</h1>
			<div className='gaskets-types flex-container'>
				<div className='fittings-material-card'>
					<h2>Ring Joint gasket</h2>
				</div>
				<div className='fittings-material-card'>
					<h2>Spiral Wound gasket</h2>
				</div>
				<div className='fittings-material-card'>
					<h2>Soft cut gasket</h2>
				</div>
				<div className='fittings-material-card'>
					<h2>Flange Insulation kit</h2>
				</div>
				<div className='fittings-material-card'>
					<h2>Several other type of Gaskets</h2>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Gaskets</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th>Material</th>
								<th>Construction</th>
								<th>Range</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Spiral Wound Gaskets</td>
								<td>
									Carbon Steel/Stainless Steel with Outer, Inner Ring & Winding
								</td>
								<td>Spiral Wound Gaskets</td>
								<td>1/4” - 48”</td>
							</tr>
							<tr>
								<td>Non-Asbestos Soft cut Gaskets</td>
								<td>
									Compressed Fibre Jointing Material - Neoprene, Epdm, Viton,
									NBR & Silicon
								</td>
								<td>Non-Asbestos Soft cut Gaskets</td>
								<td>1/4” - 48”</td>
							</tr>
							<tr>
								<td>Ring Joint Gaskets</td>
								<td>
									Soft Iron, Stainless Steel - 304, 316/316l in R, RX, BX, API
									16.20 & API 6A
								</td>
								<td>Ring Joint Gaskets</td>
								<td>1/2” - 24”</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h1 className='valves-title' style={{ margin: 0 }}>
				Customer Base
			</h1>
			<div className='industries-section'>
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
			</div>
		</div>
	);
};

export default GasketsPage;
