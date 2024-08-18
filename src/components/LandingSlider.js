import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import Image1 from '../assets/city.jpg';
import Image2 from '../assets/working.jpg';
import Image3 from '../assets/construction-site.jpg';
import Image4 from '../assets/oil-fields.jpg';
import Image5 from '../assets/oil-refinery.jpg';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const slidesData = [
	{
		id: 1,
		title: 'Construction Industry',
		desc: 'We Serve',
		img: Image1,
	},
	{
		id: 2,
		title: 'Fabrication & Skids',
		desc: '',
		img: Image2,
	},
	{
		id: 3,
		title: 'Construction Site',
		desc: '',
		img: Image3,
	},
	{
		id: 4,
		title: 'Oil Fields',
		desc: '',
		img: Image4,
	},
	{
		id: 5,
		title: 'Oil Refinery',
		desc: '',
		img: Image5,
	},
];

const LandingSlider = () => {
	let slideList = useRef(null);
	const [slideIndex, setSlideIndex] = useState(1);
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (slideIndex >= 4) {
				setSlideIndex(0);
			} else {
				setSlideIndex(slideIndex + 1);
			}
			slidesData.map((_, i) => slideLeft(i, 1, slideIndex));

			scaleOut(slideIndex);
		}, 10000);

		return () => clearInterval(intervalId);
	}, [slideIndex]);

	const slideLeft = (index, duration, multiple = 1) => {
		var slideWidth = -100 * multiple;
		gsap.to(slideList.current.children[index], {
			duration,
			x: `${slideWidth}vw`,
			ease: 'Power3.easeOut',
		});
	};

	const slideRight = (index, duration, multiple = 1) => {
		var slideWidth = 100 * multiple;
		if (multiple === 0) setSlideIndex(slideIndex + 1);
		gsap.to(slideList.current.children[index], {
			duration,
			x: `${slideWidth}vw`,
			ease: 'Power3.easeOut',
		});
	};

	const scaleOut = (index) => {
		gsap.from(slideList.current.children[index], {
			duration: 1,
			scale: 1.2,
			ease: 'Power3.easeOut',
		});
	};

	const nextSlide = () => {
		if (slideIndex === slidesData.length) {
			return;
		} else if (slideIndex === slidesData.length - 1) {
			setSlideIndex(0);
		} else {
			setSlideIndex(slideIndex + 1);
		}
		slidesData.map((_, i) => slideLeft(i, 1, slideIndex));

		scaleOut(slideIndex);
		showContent(slideIndex);
	};

	const showContent = (index) => {
		console.log('object' + index);
		const t1 = gsap.timeline();
		t1.from(slideList.current.children[index].children[1], {
			duration: 1,
			scale: 0,
			ease: 'power3.inOut',
			delay: 0.5,
		})
			.from(
				slideList.current.children[index].children[1].children[0],
				{
					y: '100px',
					duration: 0.5,
					ease: 'power3.out',
				},
				'a1'
			)
			.from(
				slideList.current.children[index].children[1].children[0],
				{
					opacity: 0,
					duration: 0.5,
					ease: 'power3.out',
				},
				'a1'
			)
			.from(
				slideList.current.children[index].children[1].children[1],
				{
					y: '100px',
					duration: 0.5,
					ease: 'power3.out',
				},
				'a2'
			)
			.from(
				slideList.current.children[index].children[1].children[1],
				{
					opacity: 0,
					duration: 0.5,
					ease: 'power3.out',
				},
				'a2'
			);
	};

	const prevSlide = () => {
		if (slideIndex === 1) return;
		setSlideIndex(slideIndex - 1);
		slidesData.map((_, i) =>
			slideRight(i, 1, slideIndex === 0 ? 0 : 2 - slideIndex)
		);

		console.log(slideIndex);
		showContent(slideIndex);
	};

	return (
		<div className='landing-slider-container' ref={slideList}>
			{slidesData.map((slide) => (
				<div className='landing-slide' key={slide.id}>
					<img src={slide.img} alt='' />
					<div className='slider-info'>
						<h2 className='slider-info-text' style={{ textAlign: 'center' }}>
							We Serve
						</h2>
						<h2 className='slider-info-text'>{slide.title}</h2>
					</div>
				</div>
			))}
			<div className='navigation'>
				<i className='prev-btn'>
					<FaAnglesLeft onClick={() => prevSlide()} />
				</i>
				<i className='nxt-btn'>
					<FaAnglesRight onClick={() => nextSlide()} />
				</i>
			</div>
		</div>
	);
};

export default LandingSlider;
