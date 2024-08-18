import { useEffect } from 'react';
import FenceBG from '../assets/fencebg.png';
import NotchSVG from '../assets/notchleft.svg';
import FenceImg from '../assets/fenceimg.png';
import DocumentTitle from '../components/DocumentTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FencePage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Chain Link Fence - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.fence-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'expo.out',
		});
	}, []);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing fence-landing'>
				<div className='product-bg1'></div>
				<img src={FenceBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Chain Link Fence System</h1>
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
					<span>Chain Link Fence</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<p className='valves-para fastners-para'>
				<span>Krad Global</span> presents a high-security Chain Link Fence
				System designed for robust protection in demanding environments. This
				system is built with premium materials and advanced manufacturing
				techniques to ensure exceptional durability and security. It includes
				all required accessories and features to provide a comprehensive fencing
				solution for high-security zones.
			</p>
			<h1 className='valves-title' style={{ margin: '20px 0' }}>
				Technical Specifications
			</h1>
			<div
				className='flex-container'
				style={{ padding: '40px 20px', gap: '40px', flexWrap: 'wrap-reverse' }}
			>
				<div className='material-info-card'>
					<h2>Chain Link Mesh</h2>
					<p>
						<span>Material:</span>High-carbon steel wire
					</p>
					<p>
						<span>Wire Diameter:</span>4 mm
					</p>
					<p>
						<span>Mesh Size:</span>50.8 mm x 50.8 mm
					</p>
					<p>
						<span>Height:</span>2.4 meters
					</p>
					<p>
						<span>Galvanization:</span>Heavy galvanized
					</p>
					<p>
						<span>Compliance:</span>ASTM A 392 Class 2
					</p>
					<p>
						<span>Zinc Coating:</span>610 grams per square meter (g/m²)
					</p>
				</div>
				<img
					src={FenceImg}
					alt=''
					style={{ height: '327px', maxWidth: '450px' }}
				/>
			</div>
			<div
				className='flex-container'
				style={{ padding: '40px 20px', gap: '20px', flexWrap: 'wrap' }}
			>
				<div className='material-info-card fence-card'>
					<h2>Posts and Supports</h2>
					<p>
						<span>Line/Corner Post Dimensions:</span>90 mm x 80 mm x 6 mm
					</p>
					<p>
						<span>Material:</span>Heavy-duty galvanized steel
					</p>
					<p>
						<span>Footings: </span>Concrete footings as required for stability
					</p>
				</div>
				<div className='material-info-card fence-card'>
					<h2>Barbed Wire</h2>
					<p>
						<span>Number of Rows:</span>6 rows
					</p>
					<p>
						<span>Material:</span>Galvanized steel
					</p>
					<p>
						<span>Design:</span>Securely attached for effective deterrence
					</p>
				</div>
				<div className='material-info-card fence-card'>
					<h2>Concertina Barbed Wire</h2>
					<p>
						<span>Number of Rows:</span>1 row
					</p>
					<p>
						<span>Material:</span>Galvanized steel
					</p>
					<p>
						<span>Design:</span>Provides additional security and barrier
					</p>
				</div>
			</div>
		</div>
	);
};

export default FencePage;
