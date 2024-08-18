import { useEffect } from 'react';
import scaffoldingBG from '../assets/scaffoldingbg.png';
import NotchSVG from '../assets/notchleft.svg';
import UsesImg from '../assets/uses.png';
import FeaturesImg from '../assets/features.png';
// import IndustriesImg from '../assets/industries.png';
// import RefineryImg from '../assets/refinery.png';
// import PipelineImg from '../assets/pipeline.png';
import CuplockStandardImg from '../assets/cuplockstandard.png';
import CuplockLedgerImg from '../assets/cuplockledger.png';
import CuplockTransomImg from '../assets/cuplocktransom.png';
import ScaffoldingTubeImg from '../assets/scaffoldingtubes.png';
import SteelBoardImg from '../assets/steelboard.png';
import AluminiumLadderImg from '../assets/aluminiumladder.png';
import DoubleCouplerImg from '../assets/doublecoupler.png';
import BoardCouplerImg from '../assets/boardcoupler.png';
import SwivelCouplerImg from '../assets/swivelcoupler.png';
import SingleCouplerImg from '../assets/singlecoupler.png';
import SleeveCouplerImg from '../assets/sleevecoupler.png';
import BeamClampImg from '../assets/beamclamp.png';
import LadderClampImg from '../assets/ladderclamp.png';
import BasePlateImg from '../assets/baseplate.png';
import SpigotImg from '../assets/spigot.png';
import DocumentTitle from '../components/DocumentTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ScaffoldingProductPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Scaffolding Product - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.scaffolding-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'expo.out',
		});
	}, []);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing scaffolding-landing'>
				<div className='product-bg1'></div>
				<img src={scaffoldingBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Scaffolding Product</h1>
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
					<span>Scaffolding</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<p className='valves-para fastners-para'>
				<span>Krad Global</span> is a leading organization and prominent
				exporter of high-quality scaffolding materials to the Middle East and
				African countries. Renowned for our excellence, we specialize in
				providing reliable and innovative scaffolding solutions, including the
				Cuplock scaffolding system. Our commitment to quality and customer
				satisfaction has established us as a trusted partner in the scaffolding
				industry, offering tailored solutions to meet diverse industry needs.
			</p>
			<h1 className='valves-title' style={{ margin: '20px 0' }}>
				Cuplock Scaffolding System
			</h1>
			<div className='features-section flex-container'>
				<div className='features-title-card flex-container'>
					<img src={FeaturesImg} alt='' />
					<h1>
						Key
						<br />
						Features
					</h1>
				</div>
				<div className='features-cards flex-container'>
					<div className='features-card'>
						<h2>Node Point Locking</h2>
						<p>
							Rigid and stable with four horizontal components fastened
							simultaneously.
						</p>
					</div>
					<div className='features-card'>
						<h2>No Loose Parts</h2>
						<p>Enhances safety and simplifies assembly.</p>
					</div>
					<div className='features-card'>
						<h2>High-Quality Steel</h2>
						<p>Durable and lightweight.</p>
					</div>
					<div className='features-card'>
						<h2>Versatility</h2>
						<p>
							Suitable for formwork, support, access, mobile towers, and more.
						</p>
					</div>
					<div className='features-card'>
						<h2>Ease of Use</h2>
						<p>Quick assembly, even for unskilled labor.</p>
					</div>
					<div className='features-card'>
						<h2>Durability</h2>
						<p> Withstands tough conditions, extending lifespan.</p>
					</div>
					<div className='features-card'>
						<h2>Cost Efficiency</h2>
						<p>Saves on labor and time.</p>
					</div>
				</div>
			</div>
			<div className='material-used uses-container flex-container'>
				<div className='material-used-title uses-title flex-container'>
					<img src={UsesImg} alt='' />
					<h3>Uses</h3>
					<svg
						className='material-svg uses-svg'
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
				<div className='material-used-content uses-content flex-container'>
					<p>Formwork</p>
					<p>Support</p>
					<p>General Access</p>
					<p>Mobile Towers</p>
					<p>Landing Towers</p>
				</div>
			</div>
			{/* <h1 className='valves-title' style={{ margin: 0 }}>
				Industries
			</h1>
			<div className='industries-section'>
				<div className='industries-card'>
					<img src={IndustriesImg} alt='' />
					<h3>Construction</h3>
				</div>
				<div className='industries-card '>
					<img src={RefineryImg} alt='' />
					<h3>Refinaries</h3>
				</div>
				<div className='industries-card '>
					<img src={PipelineImg} alt='' />
					<h3>Power Plants</h3>
				</div>
			</div> */}
			<div className='benefits-container flex-container'>
			<div className='product-range-card benefit-card'>
					<svg
						width='220'
						height='250'
						viewBox='0 0 282 312'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M209.935 36.6243L209.92 36.6154L209.904 36.6066L159.245 7.89271C147.927 1.47802 134.073 1.47802 122.755 7.89271L72.0957 36.6066L72.075 36.6183L72.0544 36.6304L21.8577 66.146C10.6437 72.7398 3.71638 84.7382 3.61297 97.7467L3.15009 155.976L3.1499 156L3.15009 156.024L3.61297 214.253C3.71638 227.262 10.6437 239.26 21.8577 245.854L72.0544 275.37L72.075 275.382L72.0957 275.393L122.755 304.107C134.073 310.522 147.927 310.522 159.245 304.107L209.904 275.393L209.925 275.382L209.946 275.37L260.142 245.854C271.356 239.26 278.284 227.262 278.387 214.253L278.85 156.024L278.85 156.012V156V98.0405C278.85 84.8739 271.853 72.6992 260.476 66.0709L209.935 36.6243Z'
							fill='#51a6c0'
							stroke='#51a6c0'
							strokeWidth='6'
						/>
					</svg>
					<div className='product-range-info'>
						<h3 style={{color: "#000"}}>Benefits</h3>
					</div>
				</div>				
				<div className='product-range-card benefit-card'>
					<svg
						width='220'
						height='250'
						viewBox='0 0 282 312'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M209.935 36.6243L209.92 36.6154L209.904 36.6066L159.245 7.89271C147.927 1.47802 134.073 1.47802 122.755 7.89271L72.0957 36.6066L72.075 36.6183L72.0544 36.6304L21.8577 66.146C10.6437 72.7398 3.71638 84.7382 3.61297 97.7467L3.15009 155.976L3.1499 156L3.15009 156.024L3.61297 214.253C3.71638 227.262 10.6437 239.26 21.8577 245.854L72.0544 275.37L72.075 275.382L72.0957 275.393L122.755 304.107C134.073 310.522 147.927 310.522 159.245 304.107L209.904 275.393L209.925 275.382L209.946 275.37L260.142 245.854C271.356 239.26 278.284 227.262 278.387 214.253L278.85 156.024L278.85 156.012V156V98.0405C278.85 84.8739 271.853 72.6992 260.476 66.0709L209.935 36.6243Z'
							fill='#1e2530'
							stroke='#51a6c0'
							strokeWidth='6'
						/>
					</svg>
					<div className='product-range-info'>
						<h3>Speed</h3>
						<p>Fast assembly and disassembly.</p>
					</div>
				</div>
				<div className='product-range-card benefit-card'>
					<svg
						width='220'
						height='250'
						viewBox='0 0 282 312'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M209.935 36.6243L209.92 36.6154L209.904 36.6066L159.245 7.89271C147.927 1.47802 134.073 1.47802 122.755 7.89271L72.0957 36.6066L72.075 36.6183L72.0544 36.6304L21.8577 66.146C10.6437 72.7398 3.71638 84.7382 3.61297 97.7467L3.15009 155.976L3.1499 156L3.15009 156.024L3.61297 214.253C3.71638 227.262 10.6437 239.26 21.8577 245.854L72.0544 275.37L72.075 275.382L72.0957 275.393L122.755 304.107C134.073 310.522 147.927 310.522 159.245 304.107L209.904 275.393L209.925 275.382L209.946 275.37L260.142 245.854C271.356 239.26 278.284 227.262 278.387 214.253L278.85 156.024L278.85 156.012V156V98.0405C278.85 84.8739 271.853 72.6992 260.476 66.0709L209.935 36.6243Z'
							fill='#1e2530'
							stroke='#51a6c0'
							strokeWidth='6'
						/>
					</svg>
					<div className='product-range-info'>
						<h3>Safety</h3>
						<p>No loose parts.</p>
					</div>
				</div>
				<div className='product-range-card benefit-card'>
					<svg
						width='220'
						height='250'
						viewBox='0 0 282 312'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M209.935 36.6243L209.92 36.6154L209.904 36.6066L159.245 7.89271C147.927 1.47802 134.073 1.47802 122.755 7.89271L72.0957 36.6066L72.075 36.6183L72.0544 36.6304L21.8577 66.146C10.6437 72.7398 3.71638 84.7382 3.61297 97.7467L3.15009 155.976L3.1499 156L3.15009 156.024L3.61297 214.253C3.71638 227.262 10.6437 239.26 21.8577 245.854L72.0544 275.37L72.075 275.382L72.0957 275.393L122.755 304.107C134.073 310.522 147.927 310.522 159.245 304.107L209.904 275.393L209.925 275.382L209.946 275.37L260.142 245.854C271.356 239.26 278.284 227.262 278.387 214.253L278.85 156.024L278.85 156.012V156V98.0405C278.85 84.8739 271.853 72.6992 260.476 66.0709L209.935 36.6243Z'
							fill='#1e2530'
							stroke='#51a6c0'
							strokeWidth='6'
						/>
					</svg>
					<div className='product-range-info'>
						<h3>Cost Savings</h3>
						<p>Reduced labor and maintenance.</p>
					</div>
				</div>
				<div className='product-range-card benefit-card'>
					<svg
						width='220'
						height='250'
						viewBox='0 0 282 312'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M209.935 36.6243L209.92 36.6154L209.904 36.6066L159.245 7.89271C147.927 1.47802 134.073 1.47802 122.755 7.89271L72.0957 36.6066L72.075 36.6183L72.0544 36.6304L21.8577 66.146C10.6437 72.7398 3.71638 84.7382 3.61297 97.7467L3.15009 155.976L3.1499 156L3.15009 156.024L3.61297 214.253C3.71638 227.262 10.6437 239.26 21.8577 245.854L72.0544 275.37L72.075 275.382L72.0957 275.393L122.755 304.107C134.073 310.522 147.927 310.522 159.245 304.107L209.904 275.393L209.925 275.382L209.946 275.37L260.142 245.854C271.356 239.26 278.284 227.262 278.387 214.253L278.85 156.024L278.85 156.012V156V98.0405C278.85 84.8739 271.853 72.6992 260.476 66.0709L209.935 36.6243Z'
							fill='#1e2530'
							stroke='#51a6c0'
							strokeWidth='6'
						/>
					</svg>
					<div className='product-range-info'>
						<h3>Versatility</h3>
						<p>Flexible for various applications</p>
					</div>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Details of Scaffolding Products</h1>
				<div className='table-wrapper'>
					<table>
						<thead>
							<tr>
								<th>Description</th>
								<th>Size</th>
								<th>Pictures</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									CUPLOCK STANDARD
								</td>
							</tr>
							<tr>
								<td>Cup lock Standard</td>
								<td>3 Mtr.</td>
								<td rowSpan='5'>
									<div className='flex-container'>
										<img src={CuplockStandardImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Cup lock Standard</td>
								<td>2.5 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Standard</td>
								<td>2 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Standard</td>
								<td>1.5 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Standard</td>
								<td>1 Mtr.</td>
							</tr>

							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									CUPLOCK LEDGER
								</td>
							</tr>
							<tr>
								<td>Cup lock Ledger</td>
								<td>2.5 Mtr.</td>
								<td rowSpan='5'>
									<div className='flex-container'>
										<img src={CuplockLedgerImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Cup lock Ledger</td>
								<td>1.8 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Ledger</td>
								<td>1.3 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Ledger</td>
								<td>1.2 Mtr.</td>
							</tr>
							<tr>
								<td>Cup lock Ledger</td>
								<td>0.9 Mtr.</td>
							</tr>

							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									CUPLOCK TRANSOM
								</td>
							</tr>
							<tr>
								<td>Intermediate transom</td>
								<td>2.5 Mtr.</td>
								<td rowSpan='4'>
									<div className='flex-container'>
										<img src={CuplockTransomImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Intermediate transom</td>
								<td>1.8 Mtr.</td>
							</tr>
							<tr>
								<td>Intermediate transom</td>
								<td>1.3 Mtr.</td>
							</tr>
							<tr>
								<td>Intermediate transom</td>
								<td>1.2 Mtr.</td>
							</tr>

							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									SCAFFOLDING TUBE
								</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>6 Mtr.</td>
								<td rowSpan='7'>
									<div className='flex-container'>
										<img src={ScaffoldingTubeImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>4 Mtr.</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>3 Mtr.</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>2 Mtr.</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>1.5 Mtr.</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>1 Mtr.</td>
							</tr>
							<tr>
								<td>Scaffolding tube</td>
								<td>0.5 Mtr.</td>
							</tr>

							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									STEEL BOARD
								</td>
							</tr>
							<tr>
								<td>Steel board</td>
								<td>3 Mtr.</td>
								<td rowSpan='5'>
									<div className='flex-container'>
										<img src={SteelBoardImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Steel board</td>
								<td>2.5 Mtr.</td>
							</tr>
							<tr>
								<td>Steel board</td>
								<td>2 Mtr.</td>
							</tr>
							<tr>
								<td>Steel board</td>
								<td>1.5 Mtr.</td>
							</tr>
							<tr>
								<td>Steel board</td>
								<td>1 Mtr.</td>
							</tr>

							<tr>
								<td
									colSpan='3'
									style={{
										textAlign: 'center',
										backgroundColor: '#51a6c0',
										color: '#000',
										fontWeight: 800,
									}}
								>
									ALUMINIUM LADDER
								</td>
							</tr>
							<tr>
								<td>Aluminium ladder</td>
								<td>6 Mtr.</td>
								<td rowSpan='3'>
									<div className='flex-container'>
										<img src={AluminiumLadderImg} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>Aluminium ladder</td>
								<td>4 Mtr.</td>
							</tr>
							<tr>
								<td>Aluminium ladder</td>
								<td>3 Mtr.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='scaffolding-accessories-section'>
				<h1 className='valves-title' style={{ margin: '20px 0' }}>
					Scaffolding Accessories
				</h1>
				<div className='scaffolding-accessories flex-container'>
					<div className='scaffolding-accessories-card'>
						<h2>Double Coupler Electroplated</h2>
						<img src={DoubleCouplerImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Board Coupler Electroplated</h2>
						<img src={BoardCouplerImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Swivel Coupler</h2>
						<img src={SwivelCouplerImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Single coupler</h2>
						<img src={SingleCouplerImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Sleeve Coupler</h2>
						<img src={SleeveCouplerImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Beam clamp</h2>
						<img src={BeamClampImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Ladder Clamp</h2>
						<img src={LadderClampImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Adjustable Base Jack</h2>
						<img src={BasePlateImg} alt='' />
					</div>
					<div className='scaffolding-accessories-card'>
						<h2>Spigot Pin with Nut&Bolt</h2>
						<img src={SpigotImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScaffoldingProductPage;
