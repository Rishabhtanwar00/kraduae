import { useEffect } from 'react';
import ToolsBG from '../assets/toolsbg.png';
import NotchSVG from '../assets/notchleft.svg';
import DocumentTitle from '../components/DocumentTitle';

const PlatesStructuralSteelPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle(
		'Steel Plates & Structural Steel Products - Krad Global General Trading'
	);
	return (
		<div className='product-page-container'>
			<div className='product-page-landing fastners-landing'>
				<div className='product-bg1'></div>
				<img src={ToolsBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Steel Plates & Structural Steel</h1>
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
					<span>Plates & Structural Steel</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>

			<p className='valves-para fastners-para'>
				Welcome to <span>Krad Global's</span> Steel Plates and Structural
				Materials Division. We are your trusted partner in providing
				high-quality steel plates and structural materials for diverse
				industries. Our extensive range includes top-grade carbon steel,
				stainless steel, alloy steel, aluminum, brass, and bronze products. With
				a focus on excellence and customer satisfaction, Krad Global ensures you
				receive reliable, durable materials tailored to your project needs.
				Partner with us for superior products and unparalleled service in steel
				solutions.
			</p>
		</div>
	);
};

export default PlatesStructuralSteelPage;
