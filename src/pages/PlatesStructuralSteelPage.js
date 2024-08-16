import { useEffect } from 'react';
import PlatesBG from '../assets/platesbg.png';
import NotchSVG from '../assets/notchleft.svg';
import DocumentTitle from '../components/DocumentTitle';
import BeamImg from '../assets/beam.png';
import ChannelImg from '../assets/channel.png';
import AngleImg from '../assets/angle.png';
import BarImg from '../assets/bar.png';
import HollowSectionImg from '../assets/hollowsection.png';

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
				<img src={PlatesBG} alt='' />
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
			<div className='product-page-table-container'>
				<h1>PLATES</h1>
				<div className='table-wrapper'>
					<table className='tools-table'>
						<thead>
							<tr>
								<th>Types</th>
								<th>ASTM Standard</th>
								<th>Composition</th>
								<th>Properties</th>
								<th>Applications</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Carbon Steel Plates</td>
								<td>ASTM A36</td>
								<td>Low carbon content (up to 0.26%)</td>
								<td>Good weldability, strength, and machinability</td>
								<td>Structural components, bridges, buildings</td>
							</tr>
							<tr>
								<td>Low-Carbon Steel Plates</td>
								<td>ASTM A283 (Grades C, D)</td>
								<td>Low carbon content (up to 0.26%)</td>
								<td>Good weldability, moderate strength</td>
								<td>General structural steel, fabrication of structures</td>
							</tr>
							<tr>
								<td>High-Strength Low-Alloy Steel Plates</td>
								<td>ASTM A572, ASTM A992</td>
								<td>
									Low to medium carbon with alloying elements like manganese,
									vanadium
								</td>
								<td>High strength, good weldability</td>
								<td>Structural components, beams, columns</td>
							</tr>
							<tr>
								<td>Pressure Vessel Steel Plates</td>
								<td>ASTM A516 (Grades 60, 70)</td>
								<td>High carbon content with alloying elements</td>
								<td>Designed for high pressure and temperature conditions</td>
								<td>Pressure vessels, storage tanks, reactors</td>
							</tr>
							<tr>
								<td>Stainless Steel Plates</td>
								<td>ASTM A240 (304, 316)</td>
								<td>Contains chromium (at least 10.5%) and often nickel</td>
								<td>High corrosion resistance, durability</td>
								<td>Chemical processing, food industry, architecture</td>
							</tr>
							<tr>
								<td>Tool Steel Plates</td>
								<td>ASTM A681 (D2)</td>
								<td>
									High carbon, alloying elements like tungsten and molybdenum
								</td>
								<td>High hardness, wear resistance</td>
								<td>Tools, dies, molds</td>
							</tr>
							<tr>
								<td>Abrasion-Resistant Steel Plates</td>
								<td>ASTM A514, ASTM AR400</td>
								<td>High carbon and alloy content</td>
								<td>Exceptional wear and impact resistance</td>
								<td>Mining, construction, heavy-duty equipment</td>
							</tr>
							<tr>
								<td>Heat-Resistant Steel Plates</td>
								<td>
									ASTM A263 (Heat-Resistant), ASTM A213 (Heat-Resistant Tubing)
								</td>
								<td>Alloyed with chromium, nickel</td>
								<td>Maintains strength at high temperatures</td>
								<td>Boilers, high-temperature applications</td>
							</tr>
							<tr>
								<td>Shipbuilding Steel Plates</td>
								<td>ASTM A131, ASTM A36</td>
								<td>Low to medium carbon with added elements</td>
								<td>High tensile strength, impact resistance</td>
								<td>Ship hulls, marine structures</td>
							</tr>
							<tr>
								<td>Nickel-Alloy Steel Plates</td>
								<td>ASTM B167, ASTM B446</td>
								<td>Nickel with chromium and molybdenum</td>
								<td>High strength and corrosion resistance</td>
								<td>Offshore equipment, high-pressure environments</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='product-page-table-container'>
				<h1>Structural Steel </h1>
				<div className='table-wrapper'>
					<table className='tools-table'>
						<thead>
							<tr>
								<th>Types</th>
								<th>Description</th>
								<th>Common Materials</th>
								<th>Typical Standards/Grades</th>
								<th>Applications</th>
								<th>Images</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Beam</td>
								<td>
									Horizontal members used for structural support, available in
									various shapes like I-beams and H-beams.
								</td>
								<td>Carbon Steel, Alloy Steel, Stainless Steel, Aluminum</td>
								<td>
									ASTM A992, ASTM A36, ASTM A240 (stainless), ASTM B221
									(aluminum)
								</td>
								<td>Building frameworks, bridges, supports</td>
								<td>
									<img src={BeamImg} alt='' />
								</td>
							</tr>
							<tr>
								<td>Channel</td>
								<td>
									C-shaped sections used for framing and support structures.
								</td>
								<td>Carbon Steel, Alloy Steel, Stainless Steel, Aluminum</td>
								<td>
									ASTM A36, ASTM A992, ASTM A240 (stainless), ASTM B221
									(aluminum)
								</td>
								<td>Building frames, supports, railings</td>
								<td>
									<img src={ChannelImg} alt='' />
								</td>
							</tr>
							<tr>
								<td>Angle</td>
								<td>
									L-shaped steel sections used in various structural
									applications.
								</td>
								<td>Carbon Steel, Alloy Steel, Stainless Steel, Aluminum</td>
								<td>
									ASTM A36, ASTM A992, ASTM A240 (stainless), ASTM B221
									(aluminum)
								</td>
								<td>Brackets, frames, supports</td>
								<td>
									<img src={AngleImg} alt='' />
								</td>
							</tr>
							<tr>
								<td>Bar</td>
								<td>
									Flat or round steel bars used for reinforcement and structural
									purposes.
								</td>
								<td>Carbon Steel, Alloy Steel, Stainless Steel, Aluminum</td>
								<td>
									ASTM A36, ASTM A615 (rebar), ASTM A240 (stainless), ASTM B221
									(aluminum)
								</td>
								<td>Reinforcement, structural supports</td>
								<td>
									<img src={BarImg} alt='' />
								</td>
							</tr>
							<tr>
								<td>Hollow Section</td>
								<td>
									Tubular sections available in square, rectangular, or circular
									profiles.
								</td>
								<td>
									Carbon Steel, Alloy Steel, Stainless Steel, Aluminum, Brass,
									Bronze
								</td>
								<td>
									ASTM A500, ASTM A53, ASTM A240 (stainless), ASTM B36 (brass),
									ASTM B139 (bronze)
								</td>
								<td>Frames, columns, supports, trusses</td>
								<td>
									<img src={HollowSectionImg} alt='' />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h1 className='valves-title'>Detailed Material Information</h1>
			<div className='material-info-cards flex-container'>
				<div className='material-info-card'>
					<h2>Carbon Steel</h2>
					<p>
						<span>Description:</span>A common structural material known for its
						strength and versatility.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM A36:</span>General structural steel.
					</p>
					<p>
						<span>ASTM A992:</span>Wide flange beams and channels.
					</p>
					<p>
						<span>ASTM A500:</span>Cold-formed carbon steel tubing.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Building frames, bridges, supports.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>Stainless Steel</h2>
					<p>
						<span>Description:</span>Steel alloy with chromium added for
						corrosion resistance and enhanced mechanical properties.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM A240:</span>Stainless steel plates and sheets.
					</p>
					<p>
						<span>ASTM A312:</span>Stainless steel pipes.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Structures exposed to corrosive
						environments, food processing, chemical industries.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>Aluminum</h2>
					<p>
						<span>Description:</span>Lightweight and corrosion-resistant, used
						in applications requiring reduced weight.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM B221:</span>Aluminum alloy extrusions.
					</p>
					<p>
						<span>ASTM B209:</span>Aluminum and aluminum-alloy sheet and plate.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Lightweight frames, aerospace,
						transportation.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>Brass</h2>
					<p>
						<span>Description:</span>An alloy of copper and zinc, known for its
						machinability and resistance to corrosion.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM B36:</span>Brass sheet, plate, and strip.
					</p>
					<p>
						<span>ASTM B16:</span>
						Brass pipe fittings.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Decorative applications, fittings,
						hardware (less common in structural use).
					</p>
				</div>

				<div className='material-info-card'>
					<h2>Bronze</h2>
					<p>
						<span>Description:</span>An alloy of copper and tin, known for its
						durability and resistance to corrosion.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM B139:</span>Bronze tube and pipe.
					</p>
					<p>
						<span>ASTM B170:</span>
						Bronze plate.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Marine applications, artistic and
						architectural components (less common in structural use).
					</p>
				</div>

				<div className='material-info-card'>
					<h2>Alloy Steel</h2>
					<p>
						<span>Description:</span>Steel with additional alloying elements to
						improve properties such as strength, hardness, or wear resistance.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM A514:</span>High-strength, low-alloy steel.
					</p>
					<p>
						<span>ASTM A913:</span>
						High-strength, low-alloy structural steel.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Heavy-duty structural components,
						machinery, and equipment.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>SS400</h2>
					<p>
						<span>Description:</span>A Japanese standard for carbon steel with
						good weldability and machinability.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>JIS G3101 SS400:</span>
						Standard specification for hot-rolled steel.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Structural steel for buildings and
						bridges.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>4140 Steel</h2>
					<p>
						<span>Description:</span>An alloy steel with chromium and
						molybdenum, known for its high strength and toughness.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>ASTM A829:</span>
						Alloy steel plate for structural applications.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Heavy machinery, automotive parts,
						high-stress components.
					</p>
				</div>

				<div className='material-info-card'>
					<h2>1137 Steel</h2>
					<p>
						<span>Description:</span>A type of carbon steel used for various
						structural and industrial applications.
					</p>
					<h3>Grades/Standards:</h3>
					<p>
						<span>Equivalent to ASTM A36:</span>
						General structural steel with similar properties.
					</p>
					<p className='application-para'>
						<span>Applications:</span>Structural supports, manufacturing
						components.
					</p>
				</div>
			</div>
			<h1 className='valves-title'>Summary</h1>
			<div className='summary flex-container'>
				<p>
					<span>Carbon Steel:</span>Widely used due to its strength and
					affordability. Common in beams, channels, angles, bars, and hollow
					sections.
				</p>
				<p>
					<span>Stainless Steel:</span>Chosen for its corrosion resistance and
					strength in harsh environments. Used in various structural components.
				</p>
				<p>
					<span>Aluminum:</span>Valued for its lightweight and corrosion
					resistance. Used in applications where reduced weight is crucial.
				</p>
				<p>
					<span>Brass and Bronze:</span>Less common in structural applications
					but useful for specific needs like corrosion resistance and
					machinability.
				</p>
				<p>
					<span>Alloy Steel:</span>Used where enhanced mechanical properties are
					needed for demanding applications.
				</p>
				<p>
					<span>SS400, 4140, 1137:</span>Specific grades with applications in
					structural and heavy-duty components.
				</p>
			</div>
		</div>
	);
};

export default PlatesStructuralSteelPage;
