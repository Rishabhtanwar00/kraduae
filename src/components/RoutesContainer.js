import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ProductPage from '../pages/ProductPage';
import FittingsPage from '../pages/FittingsPage';
import FlangesPage from '../pages/FlangesPage';
import ContactUs from '../pages/ContactUs';
import QualitySafety from '../pages/QualitySafety';
import ValvesPage from '../pages/ValvesPage';
import FastnersPage from '../pages/FastnersPage';
import GasketsPage from '../pages/GasketsPage';
import ScaffoldingProductPage from '../pages/ScaffoldingProductPage';
import SafetyProductsPage from '../pages/SafetyProductsPage';
import ToolsMachinesPage from '../pages/ToolsMachinesPage';
import PlatesStructuralSteelPage from '../pages/PlatesStructuralSteelPage';

const RoutesContainer = () => {
	return (
		<div className='routes-container'>
			<Routes>
				<Route exact path='/' element={<Homepage />}></Route>
				<Route exact path='/products/pipes' element={<ProductPage />}></Route>
				<Route
					exact
					path='/products/fittings'
					element={<FittingsPage />}
				></Route>
				<Route exact path='/products/flanges' element={<FlangesPage />}></Route>
				<Route exact path='/products/valves' element={<ValvesPage />}></Route>
				<Route
					exact
					path='/products/fastners'
					element={<FastnersPage />}
				></Route>
				<Route exact path='/products/gaskets' element={<GasketsPage />}></Route>
				<Route
					exact
					path='/products/scaffolding-product'
					element={<ScaffoldingProductPage />}
				></Route>
				<Route
					exact
					path='/products/safety-product'
					element={<SafetyProductsPage />}
				></Route>
				<Route
					exact
					path='/products/tools-machines'
					element={<ToolsMachinesPage />}
				></Route>
				<Route
					exact
					path='/products/plates-structural-steel'
					element={<PlatesStructuralSteelPage />}
				></Route>
				<Route exact path='/quality-safety' element={<QualitySafety />}></Route>
				<Route exact path='/contact-us' element={<ContactUs />}></Route>
				<Route path='/*' element={<ProductPage />}></Route>
			</Routes>
		</div>
	);
};

export default RoutesContainer;
