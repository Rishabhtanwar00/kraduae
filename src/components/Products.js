import PipesImg from '../assets/pipes.png';
import ScaffoldingImg from '../assets/scaffolding.png';
import PlatesImg from '../assets/plates.png';
import SafetyProductImg from '../assets/safetyproduct.png';
import ToolsImg from '../assets/tools.png';
import FenceImg from '../assets/fence.png';
import ProductsBG from '../assets/roundedlines.png';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import useWindowDimensions from './useWindowDimensions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Products = ({ timeline }) => {
	const container = useRef();
	const { width } = useWindowDimensions();

	useGSAP(() => {
		timeline && width > 900
			? timeline.from('.hexagon-item', {
					y: '200px',
					stagger: 0.05,
					ease: 'power3.out',
					delay: 0,
			  })
			: timeline
					// .from('.products-title', { scale: 0, ease: 'power3.inOut',delay: '-0.5' })
					.fromTo(
						'.hexagon-item',
						{
							scale: 0,
						},
						{ scale: 1, stagger: 0.1, delay: '-0.5', ease: 'power3.inOut' }
					);
		ScrollTrigger.refresh();
	}, [timeline, container]);

	return (
		<section className='products-section flex-container' ref={container}>
			<div className='produts-card'>
				<img src={ProductsBG} alt='' className='products-svg' />
				<h1 className='products-title'>Our Products</h1>
			</div>
			<div className='hexagon-menu clear'>
				<div className='hexagon-menu-new'>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link to='/products/pipes' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={PipesImg} alt='' />
								</span>
								<span className='title'>Piping Solutions</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className='hexagon-menu-top'>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link to='/products/scaffolding-product' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={ScaffoldingImg} alt='' />
								</span>
								<span className='title'>Scaffolding Products</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link
							to='/products/plates-structural-steel'
							className='hex-content'
						>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={PlatesImg} alt='' />
								</span>
								<span className='title'>Plates & Structural Steel</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className='hexagon-menu-bottom'>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link to='/products/safety-product' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={SafetyProductImg} alt='' />
								</span>
								<span className='title'>Industrial Safety Products</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link className='hex-content' to='/products/tools-machines'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={ToolsImg} alt='' />
								</span>
								<span className='title'>Industrial Tools & Machines</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
					<div className='hexagon-item'>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='hex-item'>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<Link className='hex-content' to='/products/chain-link-fence'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={FenceImg} alt='' />
								</span>
								<span className='title'>Chain Link Fence System</span>
							</span>
							<svg
								viewBox='0 0 173.20508075688772 200'
								height='200'
								width='174'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
									fill='#1e2530'
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
