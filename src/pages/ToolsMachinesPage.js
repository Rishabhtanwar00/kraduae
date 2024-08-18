import { useEffect } from 'react';
import ToolsBG from '../assets/toolsbg.jpg';
import NotchSVG from '../assets/notchleft.svg';
import DocumentTitle from '../components/DocumentTitle';
import Machine1 from '../assets/machine.png';
import Machine2 from '../assets/machine1.png';
import Machine3 from '../assets/machine2.png';
import Machine4 from '../assets/machine3.png';
import Machine5 from '../assets/machine4.png';
import Machine6 from '../assets/machine5.png';
import Machine7 from '../assets/machine6.webp';
import Machine8 from '../assets/machine7.jpg';
import Machine9 from '../assets/machine9.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ToolsMachinesPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('Safety Products - Krad Global General Trading');

	useGSAP(() => {
		gsap.from('.tools-landing', {
			transform: 'scale(0)',
			duration: 1,
			ease: 'expo.out',
		});
	}, []);

	return (
		<div className='product-page-container'>
			<div className='product-page-landing tools-landing'>
				<div className='product-bg1'></div>
				<img src={ToolsBG} alt='' />
				<div className='product-page-title flex-container'>
					<h1>Industrial Tools & Machines</h1>
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
					<span>Tools & Machines</span>
					<img src={NotchSVG} alt='' />
				</div>
			</div>

			<p className='valves-para fastners-para'>
				<span>Krad Global's</span> Tools and Machines Division specializes in
				providing a comprehensive range of high-performance equipment and tools
				for industrial and maintenance applications. The division offers
				advanced drilling, cutting, and grinding machines, as well as robust
				heavy machinery and specialized tools. With a focus on precision,
				durability, and efficiency, Krad Global delivers reliable solutions that
				enhance productivity and safety across various industrial sectors.
			</p>
			<h1 className='valves-title'>Tools and Machinery</h1>
			<div className='tools-container'>
				<table className='tools-table'>
					<thead>
						<tr>
							<th>Tools/ Machines</th>
							<th>Working</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Honing Machine</td>
							<td>
								{' '}
								Used for precision finishing of internal surfaces like cylinders
								and bores to achieve a smooth and accurate surface.
							</td>
						</tr>
						<tr>
							<td>Lathe Machine</td>
							<td>
								{' '}
								Machining tool that rotates the workpiece to shape cylindrical
								materials, essential for turning, threading, and boring
								operations.
							</td>
						</tr>
						<tr>
							<td>Flange Facing Machine</td>
							<td>
								{' '}
								Resurfaces flanges to ensure a proper seal by removing old
								gaskets and corrosion, preventing leaks.
							</td>
						</tr>
						<tr>
							<td>Magnetic Drill Machine</td>
							<td>
								{' '}
								Portable drill with a magnetic base for stable drilling on metal
								surfaces, ideal for on-site work.
							</td>
						</tr>
						<tr>
							<td>Portable Milling Machine</td>
							<td>
								{' '}
								Provides on-site machining of flat surfaces and keyways,
								reducing the need for disassembly and transport.
							</td>
						</tr>
						<tr>
							<td>Line Boring Machine</td>
							<td>
								{' '}
								Bores precise holes in large components, crucial for machinery
								repair and structural alignment.
							</td>
						</tr>
						<tr>
							<td>Bolt Tightening Machine</td>
							<td>
								{' '}
								Automates the process of tightening bolts to specified torque
								levels, improving consistency and efficiency.
							</td>
						</tr>
						<tr>
							<td>Air Ejector</td>
							<td>
								{' '}
								Uses compressed air to create a vacuum for ejecting and handling
								materials.
							</td>
						</tr>
						<tr>
							<td>Exhaust Fan</td>
							<td>
								{' '}
								Provides ventilation by removing air, smoke, and fumes from
								confined spaces.
							</td>
						</tr>
						<tr>
							<td>Flange Separator</td>
							<td>
								{' '}
								Facilitates the separation of flanges during maintenance or
								repair tasks.
							</td>
						</tr>
						<tr>
							<td>Impact Wrench</td>
							<td>
								{' '}
								Delivers high torque to loosen or tighten bolts quickly, useful
								for heavy-duty tasks.
							</td>
						</tr>
						<tr>
							<td>Torque Wrench</td>
							<td>
								{' '}
								Allows precise control over the amount of torque applied to
								fasteners, ensuring proper tightening.
							</td>
						</tr>
						<tr>
							<td>Jack Hammer</td>
							<td>
								{' '}
								Heavy-duty tool used for breaking concrete and hard surfaces.
							</td>
						</tr>
						<tr>
							<td>Nut Splitter</td>
							<td>
								{' '}
								Removes rusted or seized nuts by splitting them with a hydraulic
								or manual mechanism.
							</td>
						</tr>
						<tr>
							<td>Pipe Bender</td>
							<td>
								{' '}
								Bends pipes to desired angles and shapes without deforming or
								damaging them.
							</td>
						</tr>
						<tr>
							<td>Socket</td>
							<td>
								{' '}
								Interchangeable tool used with a ratchet to tighten or loosen
								nuts and bolts.
							</td>
						</tr>
						<tr>
							<td>Steam Ejector</td>
							<td>
								{' '}
								Utilizes steam to create a vacuum for pumping and handling
								fluids.
							</td>
						</tr>
						<tr>
							<td>Hydraulic Bottle Jack</td>
							<td>
								{' '}
								Lifts heavy loads using hydraulic pressure, ideal for vehicle
								and equipment maintenance.
							</td>
						</tr>
						<tr>
							<td>Drill Bits</td>
							<td>
								{' '}
								Cutting tools for creating holes in various materials, available
								in different sizes and types for specific applications.
							</td>
						</tr>
						<tr>
							<td>Taps and Dies</td>
							<td>
								{' '}
								Create internal and external threads on metal parts, essential
								for threading operations.
							</td>
						</tr>
						<tr>
							<td>Reamer</td>
							<td>
								{' '}
								Enlarges and smooths existing holes to precise dimensions.
							</td>
						</tr>
						<tr>
							<td>Lathe Cutting Tools</td>
							<td>
								{' '}
								Various tools used on lathes for turning, facing, and cutting
								materials.
							</td>
						</tr>
						<tr>
							<td>Bundle and Retubing Tools</td>
							<td>
								{' '}
								Used for handling and replacing tubes in heat exchangers and
								boilers.
							</td>
						</tr>
						<tr>
							<td>Tube Expander</td>
							<td>
								{' '}
								Expands tube ends for fitting into tube sheets, often used in
								heat exchangers.
							</td>
						</tr>
						<tr>
							<td>Grooving Tools</td>
							<td>
								{' '}
								Cut grooves into materials for various applications, including
								assembly and fitting.
							</td>
						</tr>
						<tr>
							<td>Fabrication Hand Tools</td>
							<td>
								{' '}
								Includes cutting, bending, and shaping tools used in metal
								fabrication.
							</td>
						</tr>
						<tr>
							<td>Welding Tools</td>
							<td>
								{' '}
								Includes equipment and accessories for welding processes, such
								as helmets, gloves, and rods.
							</td>
						</tr>
						<tr>
							<td>Spanners, Hammers, Wrenches</td>
							<td>
								{' '}
								Basic hand tools for tightening, loosening, and striking.
							</td>
						</tr>
						<tr>
							<td>Micrometer and Vernier Caliper</td>
							<td> Precision measuring tools for accurate dimension checks.</td>
						</tr>
						<tr>
							<td>Safety Tools</td>
							<td>
								{' '}
								Includes personal protective equipment (PPE) like helmets,
								gloves, and safety goggles to ensure worker safety.
							</td>
						</tr>
						<tr>
							<td>Chains</td>
							<td>
								{' '}
								Used for lifting and securing loads; come in alloy or lifting
								chains designed for heavy-duty use.
							</td>
						</tr>
						<tr>
							<td>Slings</td>
							<td>
								{' '}
								Flexible lifting devices, including synthetic, wire rope, and
								chain slings, that support and secure loads during lifting.
							</td>
						</tr>
						<tr>
							<td>Shackles</td>
							<td>
								{' '}
								Connect slings and chains to loads; available in D-shackles, bow
								shackles, and swivel shackles for different applications.
							</td>
						</tr>
						<tr>
							<td>Hooks</td>
							<td>
								{' '}
								Attach to slings or chains for lifting and moving loads;
								includes crane hooks, grab hooks, and sling hooks.
							</td>
						</tr>
						<tr>
							<td>Eye Bolts</td>
							<td>
								{' '}
								Provide secure attachment points for lifting equipment or
								rigging; available in various sizes and load capacities.
							</td>
						</tr>
						<tr>
							<td>Drill Machine</td>
							<td>
								{' '}
								Creates holes and drives screws in various materials. Available
								in cordless, corded, and hammer types.
							</td>
						</tr>
						<tr>
							<td>Cutting Machine</td>
							<td>
								{' '}
								Cuts through materials like metal and wood. Includes circular
								saws and pipe cutters for precise, straight cuts.
							</td>
						</tr>
						<tr>
							<td>Grinding Machine</td>
							<td>
								{' '}
								Smooths, shapes, and polishes surfaces.Includes angle grinders
								for versatile tasks and bench grinders for sharpening tools.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<h1 className='valves-title'>Tools and Machinery</h1>
			<div className='machine-images flex-container'>
				<img src={Machine1} alt='' />
				<img src={Machine2} alt='' />
				<img src={Machine3} alt='' />
				<img src={Machine4} alt='' />
				<img src={Machine5} alt='' />
				<img src={Machine9} alt='' />
				<img src={Machine6} alt='' />
				<img src={Machine7} alt='' />
				<img src={Machine8} alt='' />
			</div>
		</div>
	);
};

export default ToolsMachinesPage;
