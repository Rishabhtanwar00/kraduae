import ContactBG from '../assets/contactbg.jpg';
import NotchSVG from '../assets/notchleft.svg';
import Image1 from '../assets/phone.png';
import Image2 from '../assets/mail.png';
import Image3 from '../assets/location.png';
import ContactForm from '../components/ContactForm';
import DocumentTitle from '../components/DocumentTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

const ContactUs = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Contact - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.contact-landing', {
			transform: 'translateX(-100vw)',
			duration: 1,
			ease: 'back.out',
		});
		gsap.from('#contact-us', {
			transform: 'translatey(100vh)',
			duration: 1,
			ease: 'back.out',
		});
	}, []);
	return (
		<div className='product-page-container'>
			<div className='product-page-landing contact-landing'>
				<div className='product-bg1'></div>
				<img src={ContactBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Contact Us</h1>
				</div>
			</div>
			<div className='breadcrum contact contact-breadcrum'>
				<div className='bredcrum-item contact-breadcrum-item'>
					<span>Home</span>
					<img src={NotchSVG} alt='' />
				</div>
				<div className='bredcrum-item contact-breadcrum-item'>
					<span>Contact us</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>
			<div className='contactus-conatiner' id='contact-us'>
				<div className='contactus-content'>
					<h1>Contact Us</h1>
					<p>
						Let us know your queries, feedbacks and enquiries. We are here to
						support you 24/7.
					</p>
					<div className='contactus-cards'>
						<button
							className='contactus-card'
							onClick={() => window.open('tel:+971542919259')}
						>
							<img src={Image1} alt='' />
							<div className='contactus-card-info'>
								<h6>Give us a call</h6>
								<p>+971-542919259</p>
							</div>
						</button>
						<button
							className='contactus-card'
							onClick={() =>
								window.open(
									'mailto:corpbiz@kraduae.com?subject=Subject&body=Body%20goes%20here'
								)
							}
						>
							<img src={Image2} alt='' />
							<div className='contactus-card-info'>
								<h6>Write to us</h6>
								<p>Corpbiz@kraduae.com</p>
							</div>
						</button>
						<button
							className='contactus-card'
							onClick={() =>
								window.open('https://maps.app.goo.gl/5cSTFww6Lj9H2DFv5')
							}
						>
							<img src={Image3} alt='' />
							<div className='contactus-card-info'>
								<h6>Visit us at </h6>
								<p>
									MOHAMED HAMED SAIF ALRUMHI BUILDING <br />
									Office Number B 1-106, Al Mutheena, Deira Dubai - UAE
								</p>
							</div>
						</button>
					</div>
				</div>
				<div className='contactus-form-container'>
					<div className='contactus-form'>
						<h1>
							Say <span>Hello !</span>
						</h1>
						<p>Feel free to stop by and say hi !</p>
					</div>

					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
