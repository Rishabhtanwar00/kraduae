import PipesImg from '../assets/pipes.png';
import FittingsImg from '../assets/fittings.png';
import FlangesImg from '../assets/flanges.png';
import GasketsImg from '../assets/gaskets.png';
import ValvesImg from '../assets/valves.png';
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
			? timeline
					.from(
						'.hexagon-item',
						{
							y: '200px',
							stagger: 0.05,
							ease: 'power3.out',
							delay: 0.3,
						},
						'p1'
					)
					.from(
						'.products-title',
						{ scale: 0, ease: 'power3.out', delay: 0.3 },
						'p1'
					)
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
						<Link to='/products/pipes' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={PipesImg} alt='' />
								</span>
								<span className='title'>Pipes</span>
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
						<Link to='/products/fittings' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={FittingsImg} alt='' />
								</span>
								<span className='title'>Fittings</span>
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
						<Link to='/products/flanges' className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={FlangesImg} alt='' />
								</span>
								<span className='title'>Flanges</span>
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
						<Link className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={GasketsImg} alt='' />
								</span>
								<span className='title'>Gaskets</span>
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
						<Link className='hex-content'>
							<span className='hex-content-inner'>
								<span className='icon'>
									<img src={ValvesImg} alt='' />
								</span>
								<span className='title'>Valves</span>
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
