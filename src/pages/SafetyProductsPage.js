import React from 'react';
import Tabs from '../components/Tabs';
import { useEffect } from 'react';
import SafetyBG from '../assets/safetybg.png';
import NotchSVG from '../assets/notchleft.svg';
import DocumentTitle from '../components/DocumentTitle';
import FlameCoverallImg from '../assets/flamecoverall.png';
import FireCoverallImg from '../assets/firecoverall.png';
import CottonCoverallImg from '../assets/cottoncoverall.png';
import SafetyShoesImg from '../assets/safetyshoes.png';
import SafetyHelmetImg from '../assets/safetyhelmet.png';
import SafetyGlovesImg from '../assets/safetygloves.png';
import SafetyGogglesImg from '../assets/safetygoggles.png';

const TabList = ({ children }) => <ul className='TabList'>{children}</ul>;

const Tab = ({ _onClick, _isActive, children }) => (
	<li className={`Tab  ${_isActive ? 'is-active' : ''}`} onClick={_onClick}>
		{children}
	</li>
);

const TabPanel = ({ _isActive, children }) => (
	<div className={`TabPanel  ${_isActive ? 'is-active' : ''}`}>{children}</div>
);

const Button = ({ children }) => <button className='Button'>{children} <svg
className='tab-svg'
width='38'
height='89'
viewBox='0 0 38 89'
fill='#0091ea'
xmlns='http://www.w3.org/2000/svg'
>
<path
    d='M1.50001 2C1.50001 2 36 29 36 44C36 59 1.50001 87 1.50001 87'
    stroke='#0091ea'
    strokeWidth='3'
/>
</svg></button>;

const SafetyProductsPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Safety Products - Krad Global General Trading');
	return (
		<div className='product-page-container'>
			<div className='product-page-landing fastners-landing'>
				<div className='product-bg1'></div>
				<img src={SafetyBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Industrial Safety Products</h1>
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
					<span>Safety Products</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>

			<p className='valves-para fastners-para'>
				<span>Krad Global's</span> Safety Products Division specializes in
				delivering high-quality protective gear designed to enhance worker
				safety across various industries. Offering a comprehensive range of
				products including safety helmets, gloves, eye protection, and
				flame-resistant clothing, the division ensures robust protection and
				compliance with international safety standards.
			</p>

			<div className='safety-tabs-container'>
				<Tabs selected={0}>
					<TabList>
						<Tab>
							<Button>Inherent Flame Retardant Coveralls (IFR Coverall)</Button>
						</Tab>
						<Tab>
							<Button>Flame Retardant Coverall (FR Coverall)</Button>
						</Tab>
						<Tab>
							<Button>General Purpose Cotton Coverall</Button>
						</Tab>
						<Tab>
							<Button className='button-tag'>
								Safety Shoes for Construction and Oil/Petrochemical Industries
							</Button>
						</Tab>
						<Tab>
							<Button>Head Protection - Safety Helmets</Button>
						</Tab>
						<Tab>
							<Button>Hand Protection - Safety Gloves</Button>
						</Tab>
						<Tab>
							<Button>Eye Protection – Safety Goggles</Button>
						</Tab>
					</TabList>

					<TabPanel>
						<div className='tab-content'>
							<h1>Inherent Flame Retardant Coveralls (IFR Coverall)</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Inherent flame retardant coveralls are designed to provide
										superior protection against flames and heat by utilizing
										fabrics with flame-resistant properties built into the
										fibers, rather than relying on chemical treatments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<div className='tab-section-feature'>
											<h3>
												Inherent Protection:{' '}
												<span>
													The flame retardancy is woven into the fabric,
													ensuring that the coveralls retain their protective
													qualities throughout their lifespan, even after
													repeated washes.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Comfort and Durability:{' '}
												<span>
													Often made from advanced fibers like Nomex, Kevlar, or
													other high-performance materials, offering a balance
													of comfort, durability, and protection.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Enhanced Safety:{' '}
												<span>
													Provides protection against flash fires, high heat,
													and molten metal splashes, making them suitable for
													hazardous work environments.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={FlameCoverallImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										ISO 11612:{' '}
										<span>
											Covers protective clothing against heat and flame,
											specifying performance requirements for garments used in
											environments with heat hazards.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										NFPA 2112:{' '}
										<span>
											Standard for flame-resistant garments for protection of
											industrial personnel, outlining performance criteria for
											flame resistance.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										EN 1149:{' '}
										<span>
											Specifies requirements for protective clothing with
											electrostatic properties, relevant for environments where
											static discharge could be a hazard.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										Industrial Work:{' '}
										<span>
											Suitable for industries like oil and gas, petrochemical,
											and metalworking where workers are exposed to high heat or
											flame.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										Welding and Cutting:{' '}
										<span>
											Protects against sparks and molten metal splashes in
											welding and cutting operations.
										</span>
									</h3>
								</div>
							</div>
							<p className='tab-content-para'>
								Inherent flame retardant coveralls offer robust and long-lasting
								protection, crucial for maintaining safety in high-risk work
								environments.
							</p>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>Flame Retardant Coverall (FR Coverall)</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Protects against flames, heat, and fire hazards in
										industrial environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<div className='tab-section-feature'>
											<h3>
												Flame Resistance:{' '}
												<span>
													Made from materials that resist ignition and slow down
													the spread of flames.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Durability:{' '}
												<span>
													Often constructed from treated fabrics or inherently
													flame-resistant fibers for long-lasting protection.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Comfort{' '}
												<span>
													Designed for wearability and ease of movement,
													suitable for extended use.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={FireCoverallImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										ISO 11612:{' '}
										<span>
											Specifies performance requirements for protective clothing
											against heat and flame.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										NFPA 2112:{' '}
										<span>
											Ensures protection for industrial personnel against flash
											fires.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Used in industries such as oil and gas, petrochemical, and
											welding, where exposure to high heat and fire is a risk.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>General Purpose Cotton Coverall</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Provides basic protection and comfort for a variety of
										standard work environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<div className='tab-section-feature'>
											<h3>
												Material:{' '}
												<span>
													Made from durable, breathable cotton fabric.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Design:{' '}
												<span>
													Typically includes features such as multiple pockets,
													adjustable cuffs, and a front zipper for ease of use.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Comfort{' '}
												<span>
													Lightweight and comfortable, suitable for general
													tasks and prolonged wear.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={CottonCoverallImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										EN 340:{' '}
										<span>
											General requirements for protective clothing, including
											comfort and fit.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Ideal for light-duty tasks in industries like
											manufacturing, construction, and maintenance, where basic
											protection and ease of movement are needed.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>
								Safety Shoes for Construction and Oil/Petrochemical Industries
							</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Protects feet from impact, compression, punctures, and slips
										in hazardous environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<h3>{'> '} Construction Industry</h3>
										<div className='tab-section-feature'>
											<h3>
												Steel or Composite Toes:{' '}
												<span>
													Provides protection against heavy objects and impact.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Slip-Resistant Soles:{' '}
												<span>Enhances traction on various surfaces.</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Durable Materials:{' '}
												<span>
													Often made from tough leather or synthetic materials
													for durability.
												</span>
											</h3>
										</div>
									</div>
									<div className='tab-section-features'>
										<h3>{'> '} Oil/Petrochemical Industries</h3>
										<div className='tab-section-feature'>
											<h3>
												Chemical-Resistant:{' '}
												<span>
													Made with materials that resist chemical spills and
													contaminants.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Electrical Hazard Protection:{' '}
												<span>
													Features non-conductive soles to protect against
													electrical hazards.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Oil and Fuel Resistant Soles:{' '}
												<span>
													Designed to prevent degradation from exposure to oils
													and fuels.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={SafetyShoesImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										ISO 20345:{' '}
										<span>
											Specifies safety footwear requirements, including impact
											protection and slip resistance.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										ASTM F2413:{' '}
										<span>
											U.S. standard for safety footwear providing performance
											requirements for impact, compression, and slip resistance.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Ensures worker safety and comfort in challenging
											conditions, including construction sites and
											oil/petrochemical operations.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>Head Protection - Safety Helmets</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Protects the head from impacts, falling objects, and
										electrical hazards in hazardous work environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<h3>{'> '} Construction Industry</h3>
										<div className='tab-section-feature'>
											<h3>
												Impact Resistance:{' '}
												<span>
													Shields against falling objects and accidental
													impacts.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Ventilation:{' '}
												<span>
													Often includes vents for improved air circulation and
													comfort.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Adjustable Fit:{' '}
												<span>
													Provides a secure and comfortable fit for extended
													wear.
												</span>
											</h3>
										</div>
									</div>
									<div className='tab-section-features'>
										<h3>{'> '}Oil, Gas, and Petrochemical Industries</h3>
										<div className='tab-section-feature'>
											<h3>
												Electrical Hazard Protection:{' '}
												<span>
													Non-conductive materials to guard against electrical
													shock.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Flame Resistance:{' '}
												<span>
													Designed to withstand exposure to high heat and
													flames.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Additional Accessories:{' '}
												<span>
													May include face shields and earmuffs for
													comprehensive protection.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={SafetyHelmetImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										ISO 3873:{' '}
										<span>
											International standard specifying requirements for
											industrial safety helmets.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										EN 397:{' '}
										<span>
											European standard detailing performance criteria for
											impact and penetration resistance, including optional
											features like electrical insulation.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Essential for ensuring safety in construction sites, oil
											rigs, and petrochemical plants, where head protection from
											various hazards is crucial.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>Hand Protection - Safety Gloves</h1>
							<div className='tab-section flex-container'>
								<div>
									<p>
										Protects hands from physical injuries, chemicals, and
										thermal hazards in demanding work environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<h3>{'> '} Construction Industry</h3>
										<div className='tab-section-feature'>
											<h3>
												Durable Materials:{' '}
												<span>
													Often made from leather, synthetic fibers, or
													reinforced fabrics for resistance to abrasion, cuts,
													and impacts.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Grip and Dexterity:{' '}
												<span>
													Provides enhanced grip for handling tools and
													materials while maintaining manual dexterity.
												</span>
											</h3>
										</div>
									</div>
									<div className='tab-section-features'>
										<h3>{'> '}Oil, Gas, and Petrochemical Industries</h3>
										<div className='tab-section-feature'>
											<h3>
												Chemical Resistance:{' '}
												<span>
													Made from materials like nitrile or neoprene to
													protect against chemical spills and exposure.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Heat Resistance:{' '}
												<span>
													Features heat-resistant linings or coatings for
													protection against high temperatures and burns.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Anti-Slip Properties:{' '}
												<span>
													Ensures secure handling in slippery or greasy
													conditions.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={SafetyGlovesImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										EN 388:{' '}
										<span>
											European standard for protective gloves against mechanical
											risks, including abrasion, cut, tear, and puncture
											resistance.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										EN 374:{' '}
										<span>
											Specifies requirements for gloves protecting against
											chemicals and microorganisms.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										EN 407:{' '}
										<span>
											Covers gloves designed to protect against thermal hazards
											such as heat and flames.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Essential for protecting hands in construction sites and
											oil/gas/petrochemical environments, ensuring safety from a
											range of potential hazards.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className='tab-content'>
							<h1>Eye Protection – Safety Goggles</h1>
							<div className='tab-section tab-section-last flex-container'>
								<div>
									<p>
										Safeguard eyes from hazards such as debris, chemicals, and
										intense light in construction, oil, gas, and petrochemical
										environments.
									</p>
									<div className='tab-section-features'>
										<h2>Key Features</h2>
										<div className='tab-section-feature'>
											<h3>
												Construction Industry:{' '}
												<span>
													Provides protection from flying debris, dust, and
													impact, often featuring impact-resistant lenses and
													secure fit.
												</span>
											</h3>
										</div>
										<div className='tab-section-feature'>
											<h3>
												Oil, Gas, and Petrochemical Industries:{' '}
												<span>
													Offers protection from chemical splashes, intense
													light, and high heat, with options for anti-fog and
													chemical-resistant coatings.
												</span>
											</h3>
										</div>
									</div>
								</div>
								<img src={SafetyGogglesImg} alt='' />
							</div>
							<div className='tab-section-features'>
								<h2>International Standards and Specifications</h2>
								<div className='tab-section-feature'>
									<h3>
										EN 166:{' '}
										<span>
											European standard specifying requirements for eye
											protection, including impact resistance and optical
											quality.
										</span>
									</h3>
								</div>
								<div className='tab-section-feature'>
									<h3>
										ANSI Z87.1:{' '}
										<span>
											U.S. standard for eye and face protection, covering impact
											resistance, optical clarity, and protective features.
										</span>
									</h3>
								</div>
							</div>
							<div className='tab-section-features'>
								<h2 style={{ color: '#fff' }}>Applications</h2>

								<div className='tab-section-feature'>
									<h3>
										<span>
											Essential for preventing eye injuries and exposure to
											hazardous substances, ensuring safety in high-risk
											industrial and construction settings.
										</span>
									</h3>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default SafetyProductsPage;
